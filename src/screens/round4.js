import { FLUIDS, BINS, R4_Q } from '../data/index.js';
import { state } from '../state.js';
import { el, wireDraggable, wireDropTarget } from '../lib/dom.js';
import { monitorBar } from '../ui/monitor.js';
import { wireRef } from '../ui/reference.js';

function placeFluid(name, cls, render) {
  if (state.r4.submitted) return;
  state.r4.placed[name] = cls;
  render();
}

function unplaceFluid(name, render) {
  if (state.r4.submitted) return;
  delete state.r4.placed[name];
  render();
}

function binLabel(cls) {
  return BINS.find((b) => b.cls === cls)?.label ?? cls;
}

function answerKeyHtml() {
  return FLUIDS.map((f) => {
    const placed = state.r4.placed[f.name];
    const gotIt = placed === f.cls;
    return `<div class="ak-row ${gotIt ? 'ok' : 'miss'}">
      <span class="mark">${gotIt ? '✓' : '✗'}</span>
      <div class="ak-body">
        <strong>${f.name}</strong>
        ${binLabel(f.cls)}
        ${gotIt ? '' : `<div class="ak-your">Your team sorted: “${binLabel(placed)}”</div>`}
      </div>
    </div>`;
  }).join('');
}

export function renderR4(app, goTo) {
  const render = () => renderR4(app, goTo);
  const placedNames = Object.keys(state.r4.placed);
  const allPlaced = placedNames.length === FLUIDS.length;
  const submitted = state.r4.submitted;
  const sortPts = FLUIDS.filter((f) => state.r4.placed[f.name] === f.cls).length * 10;

  app.innerHTML = `
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 4 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">IV Fluid Pharmacy</h2>
        </div>
      </div>
      <p class="lede">Drag each fluid into the bin where it belongs — or click a fluid, then click a bin. Rearrange freely; scoring waits until you submit.</p>
      <div class="card stack">
        <div class="fluid-tray" id="tray"></div>
        <div class="bin-board" id="binBoard"></div>
        <div class="btn-row">
          <button class="btn" id="submitBinsBtn" ${allPlaced && !submitted ? '' : 'disabled'}>${submitted ? 'Submitted' : 'Submit answer'}</button>
          <span class="lede">${placedNames.length} of ${FLUIDS.length} sorted${submitted ? ` · ${sortPts} pts` : ''}</span>
        </div>
      </div>
      ${
        submitted
          ? `
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${answerKeyHtml()}
          </div>
        </div>
      `
          : ''
      }

      <div class="card stack" id="q4card" ${submitted ? '' : 'style="opacity:.4;pointer-events:none;"'}>
        <div>
          <span class="eyebrow">Case tie-in</span>
          <p style="margin:6px 0 0;font-weight:600;">${R4_Q.prompt}</p>
        </div>
        <div class="choice-list" id="q4list"></div>
        <div class="btn-row">
          <button class="btn" id="submitQ4Btn" ${!submitted || state.r4.q4Selected == null || state.r4.q4Answered ? 'disabled' : ''}>${state.r4.q4Answered ? 'Submitted' : 'Submit answer'}</button>
        </div>
        <div id="q4feedback">${
          state.r4.q4Answered
            ? `<div class="feedback ${state.r4.q4GotRight ? 'good' : 'bad'}"><strong>${state.r4.q4GotRight ? 'Correct' : 'Not quite'}</strong>${R4_Q.explain}</div>`
            : ''
        }</div>
      </div>

      <div class="btn-row">
        <button class="btn" id="nextBtn" ${submitted && state.r4.q4Answered ? '' : 'disabled'}>Continue to Round 5 →</button>
        <span class="lede">${state.scores.r4} of ${state.max.r4} pts</span>
      </div>
    </div>
  `;

  const tray = document.getElementById('tray');
  let selectedFluid = null;
  FLUIDS.forEach((f) => {
    if (state.r4.placed[f.name]) return;
    const c = el(
      `<button class="fluid-chip" data-name="${f.name}"><span class="drop"></span>${f.name}</button>`,
    );
    c.onclick = () => {
      if (submitted) return;
      tray.querySelectorAll('.fluid-chip').forEach((x) => x.classList.remove('selected'));
      selectedFluid = f;
      c.classList.add('selected');
    };
    if (!submitted) wireDraggable(c, { name: f.name });
    tray.appendChild(c);
  });
  if (!submitted) {
    wireDropTarget(tray, (payload) => {
      if (payload && payload.name) unplaceFluid(payload.name, render);
    });
  }

  const binBoard = document.getElementById('binBoard');
  BINS.forEach((b) => {
    const binEl = el(
      `<div class="bin" data-cls="${b.cls}"><h4>${b.label}</h4><div class="items"></div></div>`,
    );
    const itemsEl = binEl.querySelector('.items');
    Object.entries(state.r4.placed).forEach(([name, cls]) => {
      if (cls !== b.cls) return;
      const fluid = FLUIDS.find((f) => f.name === name);
      const correct = fluid.cls === b.cls;
      const row = el(
        `<div class="bin-item ${submitted ? (correct ? 'correct' : 'incorrect') : ''}"><span>${name}</span>${submitted ? '' : '<button title="remove">✕</button>'}</div>`,
      );
      if (!submitted) {
        row.querySelector('button').onclick = (e) => {
          e.stopPropagation();
          unplaceFluid(name, render);
        };
        wireDraggable(row, { name });
      }
      itemsEl.appendChild(row);
    });
    binEl.onclick = () => {
      if (submitted || !selectedFluid || state.r4.placed[selectedFluid.name]) return;
      placeFluid(selectedFluid.name, b.cls, render);
    };
    if (!submitted) {
      wireDropTarget(binEl, (payload) => {
        if (payload && payload.name) placeFluid(payload.name, b.cls, render);
      });
    }
    binBoard.appendChild(binEl);
  });

  const submitBinsBtn = document.getElementById('submitBinsBtn');
  if (submitBinsBtn) {
    submitBinsBtn.onclick = () => {
      if (!allPlaced || state.r4.submitted) return;
      let pts = 0;
      FLUIDS.forEach((f) => {
        if (state.r4.placed[f.name] === f.cls) pts += 10;
      });
      state.scores.r4 += pts;
      state.r4.submitted = true;
      render();
    };
  }

  const q4list = document.getElementById('q4list');
  const q4Answered = state.r4.q4Answered;
  R4_Q.options.forEach((o, i) => {
    const isSelected = state.r4.q4Selected === i;
    const c = el(
      `<label class="choice ${q4Answered ? 'locked' : ''}"><input type="radio" name="q4" ${isSelected ? 'checked' : ''} ${q4Answered || !submitted ? 'disabled' : ''}><span>${o.text}</span></label>`,
    );
    if (q4Answered) {
      if (o.correct) c.classList.add('correct');
      else if (isSelected) c.classList.add('incorrect');
    }
    c.onclick = () => {
      if (!state.r4.submitted || state.r4.q4Answered) return;
      state.r4.q4Selected = i;
      render();
    };
    q4list.appendChild(c);
  });

  const submitQ4Btn = document.getElementById('submitQ4Btn');
  if (submitQ4Btn) {
    submitQ4Btn.onclick = () => {
      if (!state.r4.submitted || state.r4.q4Answered || state.r4.q4Selected == null) return;
      const pick = R4_Q.options[state.r4.q4Selected];
      state.r4.q4Answered = true;
      state.r4.q4GotRight = !!pick.correct;
      if (pick.correct) state.scores.r4 += 30;
      render();
    };
  }

  document.getElementById('nextBtn').onclick = () => goTo('r5');
  wireRef();
}
