import { R5_CLUES, R5_TIME } from '../data/index.js';
import { state } from '../state.js';
import { el, wireDraggable, wireDropTarget } from '../lib/dom.js';
import { shuffle, fmtTime } from '../lib/utils.js';
import { monitorBar } from '../ui/monitor.js';
import { wireRef } from '../ui/reference.js';

function placeClue(ansIdx, clueIdx, render) {
  if (state.r5.finished) return;
  const pairs = state.r5.matched;
  Object.keys(pairs).forEach((k) => {
    if (pairs[k] === clueIdx) delete pairs[k];
  });
  pairs[ansIdx] = clueIdx;
  state.r5.picked = null;
  render();
}

function removeClue(ansIdx, render) {
  if (state.r5.finished) return;
  delete state.r5.matched[ansIdx];
  render();
}

function pickUpFromSlot(ansIdx, render) {
  if (state.r5.finished) return;
  const clueIdx = state.r5.matched[ansIdx];
  if (clueIdx === undefined) return;
  delete state.r5.matched[ansIdx];
  state.r5.picked = clueIdx;
  render();
}

function scoreAndFinish(render) {
  if (state.r5.finished) return;
  state.r5.finished = true;
  state.r5.picked = null;
  if (state.r5.timerId) {
    clearInterval(state.r5.timerId);
    state.r5.timerId = null;
  }

  let correctCount = 0;
  R5_CLUES.forEach((_, i) => {
    if (state.r5.matched[i] === i) correctCount++;
  });
  state.scores.r5 = correctCount * 15;

  let bonus = 0;
  if (correctCount === R5_CLUES.length) {
    if (state.r5.timeLeft >= 45) bonus = 30;
    else if (state.r5.timeLeft >= 20) bonus = 15;
  }
  state.r5.bonus = bonus;
  state.scores.r5 += bonus;
  render();
}

function runSpeedTimer(render) {
  if (state.r5.timerId) clearInterval(state.r5.timerId);
  state.r5.timeLeft = R5_TIME;
  state.r5.timerId = setInterval(() => {
    state.r5.timeLeft--;
    const t = document.getElementById('speedTimer');
    if (t) t.textContent = fmtTime(state.r5.timeLeft);
    if (state.r5.timeLeft <= 0) {
      clearInterval(state.r5.timerId);
      state.r5.timerId = null;
      scoreAndFinish(render);
    }
  }, 1000);
}

function renderR5Intro(app, goTo) {
  const render = () => renderR5(app, goTo);
  app.innerHTML = `
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 5 of 5</span><span class="pill amber">Speed round · ${R5_TIME}s</span></div>
          <h2 class="round-title">Lytes Beyond Sodium</h2>
        </div>
      </div>
      <div class="card stack">
        <p class="lede">This case was all sodium — but the unit sees every electrolyte. Drag each symptom onto the imbalance it matches before the clock runs out. Rearrange freely; scoring waits until you submit. Ready as a team?</p>
        <div class="btn-row"><button class="btn" id="startSpeed">Start the clock</button></div>
      </div>
    </div>
  `;
  document.getElementById('startSpeed').onclick = () => {
    state.r5.started = true;
    state.r5.order = shuffle(R5_CLUES.map((_, i) => i));
    state.r5.clueOrder = shuffle(R5_CLUES.map((_, i) => i));
    runSpeedTimer(render);
    render();
  };
  wireRef();
}

export function renderR5(app, goTo) {
  if (!state.r5.started) {
    renderR5Intro(app, goTo);
    return;
  }

  const render = () => renderR5(app, goTo);
  const pairs = state.r5.matched;
  const finished = state.r5.finished;
  const placedCount = Object.keys(pairs).length;
  const allPlaced = placedCount === R5_CLUES.length;
  const usedClues = new Set(Object.values(pairs));
  const correctCount = finished
    ? R5_CLUES.reduce((n, _, i) => n + (pairs[i] === i ? 1 : 0), 0)
    : 0;

  app.innerHTML = `
    <div class="match-screen">
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 5 of 5</span><span class="pill amber">Speed round</span></div>
          <h2 class="round-title">Lytes Beyond Sodium</h2>
        </div>
      </div>
      <div class="speed-bar">
        <span>⏱</span>
        <span class="timer mono" id="speedTimer">${fmtTime(state.r5.timeLeft)}</span>
        <span class="lede">${placedCount} of ${R5_CLUES.length} placed${finished ? ` · ${state.scores.r5} pts` : ''}</span>
      </div>
      <div class="card stack match-board">
        <div class="match-wrap">
          <div class="match-col">
            <span class="eyebrow">Imbalances</span>
            <div class="term-rows" id="ansRows"></div>
          </div>
          <div class="match-col">
            <span class="eyebrow">Symptoms</span>
            <div class="pool-tray" id="clueTray"></div>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn" id="submitR5Btn" ${allPlaced && !finished ? '' : 'disabled'}>${finished ? 'Submitted' : 'Submit answer'}</button>
          ${
            finished
              ? `<span class="lede">${correctCount} of ${R5_CLUES.length} correct${state.r5.bonus ? `, +${state.r5.bonus} speed bonus` : ''}</span>
                 <button class="btn" id="nextBtn">See your team's report →</button>`
              : `<p class="lede match-hint">Drag a symptom onto its imbalance — or click to pick up, then click a row to place. Rearrange freely.</p>`
          }
        </div>
      </div>
      ${
        finished
          ? `
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${R5_CLUES.map((item, i) => {
              const got = pairs[i];
              const gotIt = got === i;
              const yourClue = got !== undefined ? R5_CLUES[got].clue : null;
              return `<div class="ak-row ${gotIt ? 'ok' : 'miss'}">
                <span class="mark">${gotIt ? '✓' : '✗'}</span>
                <div class="ak-body">
                  <strong>${item.answer}</strong>
                  ${item.clue}
                  ${gotIt ? '' : `<div class="ak-your">${yourClue != null ? `Your team matched: “${yourClue}”` : 'Your team left this unmatched.'}</div>`}
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

  const clueTray = document.getElementById('clueTray');
  (state.r5.clueOrder || []).forEach((i) => {
    if (usedClues.has(i)) return;
    const selected = state.r5.picked === i;
    const chip = el(`<div class="pool-chip ${selected ? 'selected' : ''}">${R5_CLUES[i].clue}</div>`);
    if (!finished) {
      chip.onclick = () => {
        state.r5.picked = state.r5.picked === i ? null : i;
        render();
      };
      wireDraggable(chip, { clueIdx: i });
    }
    clueTray.appendChild(chip);
  });
  if (!finished) {
    wireDropTarget(clueTray, (payload) => {
      if (payload && payload.fromAns != null) removeClue(payload.fromAns, render);
    });
  }

  const ansRows = document.getElementById('ansRows');
  state.r5.order.forEach((i) => {
    const item = R5_CLUES[i];
    const clueIdx = pairs[i];
    const filled = clueIdx !== undefined;
    const correct = filled && clueIdx === i;
    const zoneCls = filled ? 'filled' : '';
    const row = el(
      `<div class="term-row"><div class="term-label">${item.answer}</div><div class="dropzone ${zoneCls}" data-ans="${i}">${filled ? '' : `<span class="placeholder">Drop here</span>`}</div></div>`,
    );
    const zone = row.querySelector('.dropzone');
    if (filled) {
      let chipCls = '';
      if (finished) chipCls = correct ? 'correct' : 'incorrect';
      else if (state.r5.picked === clueIdx) chipCls = 'selected';
      const chip = el(
        `<div class="slot-chip ${chipCls}">${R5_CLUES[clueIdx].clue}${finished ? '' : `<button class="remove" title="Remove">✕</button>`}</div>`,
      );
      if (!finished) {
        chip.querySelector('.remove').onclick = (e) => {
          e.stopPropagation();
          removeClue(i, render);
        };
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          pickUpFromSlot(i, render);
        });
        wireDraggable(chip, { clueIdx, fromAns: i });
      }
      zone.appendChild(chip);
    } else if (finished) {
      zone.classList.add('missed');
      zone.innerHTML = `<span class="placeholder">Missed — ${item.clue}</span>`;
    }
    if (!finished) {
      zone.addEventListener('click', () => {
        if (state.r5.picked != null) placeClue(i, state.r5.picked, render);
      });
      wireDropTarget(zone, (payload) => {
        if (payload && payload.clueIdx != null) placeClue(i, payload.clueIdx, render);
      });
    }
    ansRows.appendChild(row);
  });

  const submitBtn = document.getElementById('submitR5Btn');
  if (submitBtn) {
    submitBtn.onclick = () => {
      if (!allPlaced || state.r5.finished) return;
      scoreAndFinish(render);
    };
  }
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.onclick = () => goTo('report');
  wireRef();
}
