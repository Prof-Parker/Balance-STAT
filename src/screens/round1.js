import { R1_PAIRS } from '../data/index.js';
import { state } from '../state.js';
import { el, wireDraggable, wireDropTarget } from '../lib/dom.js';
import { monitorBar } from '../ui/monitor.js';
import { wireRef } from '../ui/reference.js';

function placeDef(termIdx, defIdx, render) {
  if (state.r1.submitted) return;
  const pairs = state.r1.pairs;
  Object.keys(pairs).forEach((k) => {
    if (pairs[k] === defIdx) delete pairs[k];
  });
  pairs[termIdx] = defIdx;
  state.r1.picked = null;
  render();
}

function removeDef(termIdx, render) {
  if (state.r1.submitted) return;
  delete state.r1.pairs[termIdx];
  render();
}

function pickUpFromSlot(termIdx, render) {
  if (state.r1.submitted) return;
  const defIdx = state.r1.pairs[termIdx];
  if (defIdx === undefined) return;
  delete state.r1.pairs[termIdx];
  state.r1.picked = defIdx;
  render();
}

export function renderR1(app, goTo) {
  const render = () => renderR1(app, goTo);
  const pairs = state.r1.pairs;
  const submitted = state.r1.submitted;
  const answeredCount = Object.keys(pairs).length;
  const allPlaced = answeredCount === R1_PAIRS.length;
  const usedDefs = new Set(Object.values(pairs));

  app.innerHTML = `
    <div class="match-screen">
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 1 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Compartment Check</h2>
        </div>
      </div>
      <p class="lede">Drag a definition onto its matching term — or click to pick up, then click a row to place. Rearrange freely; scoring waits until you submit.</p>
      <div class="card stack match-board">
        <div class="match-wrap">
          <div class="match-col">
            <span class="eyebrow">Terms</span>
            <div class="term-rows" id="termRows"></div>
          </div>
          <div class="match-col">
            <span class="eyebrow">Definitions</span>
            <div class="pool-tray" id="defTray"></div>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn" id="submitR1Btn" ${allPlaced && !submitted ? '' : 'disabled'}>${submitted ? 'Submitted' : 'Submit answer'}</button>
          <span class="lede" id="r1status">${answeredCount} of ${R1_PAIRS.length} placed${submitted ? ` · ${state.scores.r1} pts` : ''}</span>
          <button class="btn" id="nextBtn" ${submitted ? '' : 'disabled'}>Continue to Round 2 →</button>
        </div>
      </div>
      ${
        submitted
          ? `
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${R1_PAIRS.map((p, i) => {
              const gotIt = pairs[i] === i;
              return `<div class="ak-row ${gotIt ? 'ok' : 'miss'}">
                <span class="mark">${gotIt ? '✓' : '✗'}</span>
                <div class="ak-body">
                  <strong>${p.term}</strong>
                  ${p.def}
                  ${gotIt ? '' : `<div class="ak-your">Your team matched: “${R1_PAIRS[pairs[i]].def}”</div>`}
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>
      `
          : ''
      }
    </div>
    </div>
  `;

  const defTray = document.getElementById('defTray');
  R1_PAIRS.forEach((p, i) => {
    if (usedDefs.has(i)) return;
    const selected = state.r1.picked === i;
    const chip = el(`<div class="pool-chip ${selected ? 'selected' : ''}">${p.def}</div>`);
    if (!submitted) {
      chip.onclick = () => {
        state.r1.picked = state.r1.picked === i ? null : i;
        render();
      };
      wireDraggable(chip, { defIdx: i });
    }
    defTray.appendChild(chip);
  });
  if (!submitted) {
    wireDropTarget(defTray, (payload) => {
      if (payload && payload.fromTerm != null) removeDef(payload.fromTerm, render);
    });
  }

  const termRows = document.getElementById('termRows');
  R1_PAIRS.forEach((p, i) => {
    const defIdx = pairs[i];
    const filled = defIdx !== undefined;
    const correct = filled && defIdx === i;
    const zoneCls = filled ? 'filled' : '';
    const row = el(
      `<div class="term-row"><div class="term-label">${p.term}</div><div class="dropzone ${zoneCls}" data-term="${i}">${filled ? '' : `<span class="placeholder">Drop here</span>`}</div></div>`,
    );
    const zone = row.querySelector('.dropzone');
    if (filled) {
      let chipCls = '';
      if (submitted) chipCls = correct ? 'correct' : 'incorrect';
      else if (state.r1.picked === defIdx) chipCls = 'selected';
      const chip = el(
        `<div class="slot-chip ${chipCls}">${R1_PAIRS[defIdx].def}${submitted ? '' : `<button class="remove" title="Remove">✕</button>`}</div>`,
      );
      if (!submitted) {
        chip.querySelector('.remove').onclick = (e) => {
          e.stopPropagation();
          removeDef(i, render);
        };
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          pickUpFromSlot(i, render);
        });
        wireDraggable(chip, { defIdx, fromTerm: i });
      }
      zone.appendChild(chip);
    }
    if (!submitted) {
      zone.addEventListener('click', () => {
        if (state.r1.picked != null) placeDef(i, state.r1.picked, render);
      });
      wireDropTarget(zone, (payload) => {
        if (payload && payload.defIdx != null) placeDef(i, payload.defIdx, render);
      });
    }
    termRows.appendChild(row);
  });

  const submitBtn = document.getElementById('submitR1Btn');
  if (submitBtn) {
    submitBtn.onclick = () => {
      if (!allPlaced || state.r1.submitted) return;
      let correctCount = 0;
      R1_PAIRS.forEach((_, i) => {
        if (state.r1.pairs[i] === i) correctCount++;
      });
      state.scores.r1 = correctCount * 10;
      state.r1.submitted = true;
      render();
    };
  }
  document.getElementById('nextBtn').onclick = () => goTo('r2');
  wireRef();
}
