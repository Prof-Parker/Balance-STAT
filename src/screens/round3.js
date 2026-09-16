import { LABS, R3_QUESTIONS } from '../data/index.js';
import { state } from '../state.js';
import { el } from '../lib/dom.js';
import { monitorBar } from '../ui/monitor.js';
import { wireRef } from '../ui/reference.js';

function renderLabsTable() {
  return `
  <div class="tbl-wrap">
    <table class="labs">
      <thead><tr><th>Lab</th>${LABS.columns.map((c) => `<th>${c}</th>`).join('')}</tr></thead>
      <tbody>
        ${LABS.rows
          .map(
            (r) =>
              `<tr><td>${r.label}<br><span class="mono" style="font-size:.7rem;color:var(--ink-soft);">ref ${r.range}</span></td>${r.values
                .map(
                  (v, i) =>
                    `<td class="${r.flagIdx.includes(i) ? 'flag' : ''}">${v}</td>`,
                )
                .join('')}</tr>`,
          )
          .join('')}
      </tbody>
    </table>
  </div>`;
}

function feedbackHtml(idx) {
  if (!state.r3.answered[idx]) return '';
  const correct = state.r3.gotRight[idx];
  const explain = R3_QUESTIONS[idx].explain;
  return `<div class="feedback ${correct ? 'good' : 'bad'}"><strong>${correct ? 'Correct' : 'Not quite'}</strong>${explain}</div>`;
}

export function renderR3(app, goTo) {
  const render = () => renderR3(app, goTo);
  const idx = state.r3.idx;
  const q = R3_QUESTIONS[idx];
  const answered = state.r3.answered[idx];
  const selected = state.r3.selected[idx];
  const isLast = idx === R3_QUESTIONS.length - 1;
  const allAnswered = state.r3.answered.every(Boolean);

  app.innerHTML = `
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 3 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Chart Review</h2>
        </div>
        <span class="lede">Question ${idx + 1} of ${R3_QUESTIONS.length}</span>
      </div>
      <p class="lede">Basic metabolic profile at admission and every 24 hours after. Choose an answer, then submit to review.</p>
      ${renderLabsTable()}
      <div class="card stack">
        <div>
          <span class="eyebrow">Question ${idx + 1}</span>
          <p style="margin:6px 0 0;font-weight:600;">${q.prompt}</p>
        </div>
        <div class="choice-list" id="qlist"></div>
        <div class="btn-row">
          <button class="btn" id="submitBtn" ${selected == null || answered ? 'disabled' : ''}>${answered ? 'Submitted' : 'Submit answer'}</button>
        </div>
        <div id="qfeedback">${feedbackHtml(idx)}</div>
      </div>
      <div class="btn-row">
        <button class="btn ghost" id="prevBtn" ${idx === 0 ? 'disabled' : ''}>← Back</button>
        ${
          isLast
            ? `<button class="btn" id="nextRoundBtn" ${allAnswered ? '' : 'disabled'}>Continue to Round 4 →</button>`
            : `<button class="btn" id="nextQBtn" ${answered ? '' : 'disabled'}>Next question →</button>`
        }
        <span class="lede">${state.scores.r3} of ${state.max.r3} pts</span>
      </div>
    </div>
  `;

  const qlist = document.getElementById('qlist');
  q.options.forEach((o, i) => {
    const isSelected = selected === i;
    const c = el(
      `<label class="choice ${answered ? 'locked' : ''}"><input type="radio" name="q3" ${isSelected ? 'checked' : ''} ${answered ? 'disabled' : ''}><span>${o.text}</span></label>`,
    );
    if (answered) {
      if (o.correct) c.classList.add('correct');
      else if (isSelected) c.classList.add('incorrect');
    }
    c.onclick = () => {
      if (state.r3.answered[idx]) return;
      state.r3.selected[idx] = i;
      render();
    };
    qlist.appendChild(c);
  });

  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.onclick = () => {
      if (state.r3.answered[idx] || state.r3.selected[idx] == null) return;
      const pick = q.options[state.r3.selected[idx]];
      state.r3.answered[idx] = true;
      state.r3.gotRight[idx] = !!pick.correct;
      if (pick.correct) state.scores.r3 += 25;
      render();
    };
  }

  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) {
    prevBtn.onclick = () => {
      state.r3.idx--;
      render();
    };
  }
  const nextQBtn = document.getElementById('nextQBtn');
  if (nextQBtn) {
    nextQBtn.onclick = () => {
      state.r3.idx++;
      render();
    };
  }
  const nextRoundBtn = document.getElementById('nextRoundBtn');
  if (nextRoundBtn) nextRoundBtn.onclick = () => goTo('r4');
  wireRef();
}
