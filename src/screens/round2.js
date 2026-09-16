import {
  CASE_INTRO,
  LABS,
  NEURO_EXAM,
  R2_Q1,
  R2_Q2,
  R2_GCS_CALC,
  R2_GCS_INTERPRET,
} from '../data/index.js';
import { state } from '../state.js';
import { el } from '../lib/dom.js';
import { monitorBar } from '../ui/monitor.js';
import { wireRef } from '../ui/reference.js';

const R2_STEPS = 4;

function renderAdmissionLabs() {
  return `
  <div class="tbl-wrap">
    <table class="labs labs-admission">
      <thead><tr><th>Lab</th><th>On admission</th></tr></thead>
      <tbody>
        ${LABS.rows
          .map(
            (r) =>
              `<tr><td>${r.label}<br><span class="mono" style="font-size:.7rem;color:var(--ink-soft);">ref ${r.range}</span></td><td class="${r.flagIdx.includes(0) ? 'flag' : ''}">${r.values[0]}</td></tr>`,
          )
          .join('')}
      </tbody>
    </table>
  </div>`;
}

function scoreMultiSelect(items, checkedMap) {
  let pts = 0;
  const notes = [];
  items.forEach((it, i) => {
    const userChecked = !!checkedMap[i];
    if (userChecked === it.correct) pts += 10;
    notes.push(
      `<li style="margin-bottom:4px;"><strong>${it.text}:</strong> ${it.note}</li>`,
    );
  });
  return { pts, notes };
}

function singleFeedback(correct, explain) {
  return `<div class="feedback ${correct ? 'good' : 'bad'}"><strong>${correct ? 'Correct' : 'Not quite'}</strong>${explain}</div>`;
}

function multiFeedback(pts, maxPts, notes) {
  return `<div class="feedback good"><strong>${pts} of ${maxPts} pts</strong><ul style="margin:6px 0 0;padding-left:18px;">${notes.join('')}</ul></div>`;
}

function isMulti(idx) {
  return idx === 1 || idx === 3;
}

function canSubmit(idx, answered) {
  if (answered) return false;
  if (isMulti(idx)) return true;
  return state.r2.selected[idx] != null;
}

function mountSingleChoice(listEl, question, answered, selectedIdx, onSelect) {
  question.options.forEach((o, i) => {
    const isSelected = selectedIdx === i;
    const c = el(
      `<label class="choice ${answered ? 'locked' : ''}"><input type="radio" name="r2q" ${isSelected ? 'checked' : ''} ${answered ? 'disabled' : ''}><span>${o.text}</span></label>`,
    );
    if (answered) {
      if (o.correct) c.classList.add('correct');
      else if (isSelected) c.classList.add('incorrect');
    }
    c.onclick = () => {
      if (answered) return;
      onSelect(i);
    };
    listEl.appendChild(c);
  });
}

function mountMultiSelect(listEl, items, checkedMap, submitted) {
  items.forEach((it, i) => {
    const checked = checkedMap[i] || false;
    const c = el(
      `<label class="choice ${submitted ? 'locked' : ''}"><input type="checkbox" ${checked ? 'checked' : ''} ${submitted ? 'disabled' : ''}><span>${it.text}</span></label>`,
    );
    if (submitted) {
      const userChecked = !!checkedMap[i];
      c.classList.add(userChecked === it.correct ? 'correct' : 'incorrect');
    }
    c.querySelector('input').onchange = (e) => {
      checkedMap[i] = e.target.checked;
    };
    listEl.appendChild(c);
  });
}

function feedbackHtml(idx) {
  if (!state.r2.answered[idx]) return '';
  if (idx === 0) return singleFeedback(state.r2.gotRight[0], R2_Q1.explain);
  if (idx === 1) {
    const { pts, notes } = scoreMultiSelect(R2_Q2.items, state.r2.q2Checked);
    return multiFeedback(pts, R2_Q2.items.length * 10, notes);
  }
  if (idx === 2) return singleFeedback(state.r2.gotRight[2], R2_GCS_CALC.explain);
  const { pts, notes } = scoreMultiSelect(
    R2_GCS_INTERPRET.items,
    state.r2.interpretChecked,
  );
  return multiFeedback(pts, R2_GCS_INTERPRET.items.length * 10, notes);
}

function renderStepCard(idx, answered) {
  const eyebrow =
    idx === 0
      ? 'Question 1'
      : idx === 1
        ? 'Question 2 · select all that apply'
        : idx === 2
          ? 'Question 3'
          : 'Question 4 · select all that apply';
  const prompt =
    idx === 0
      ? R2_Q1.prompt
      : idx === 1
        ? R2_Q2.prompt
        : idx === 2
          ? R2_GCS_CALC.prompt
          : R2_GCS_INTERPRET.prompt;

  return `
    <div class="card stack">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <p style="margin:6px 0 0;font-weight:600;">${prompt}</p>
      </div>
      <div class="choice-list" id="qlist"></div>
      <div class="btn-row">
        <button class="btn" id="submitBtn" ${canSubmit(idx, answered) ? '' : 'disabled'}>${answered ? 'Submitted' : 'Submit answer'}</button>
      </div>
      <div id="qfeedback">${feedbackHtml(idx)}</div>
    </div>`;
}

function submitCurrent(idx, render) {
  if (state.r2.answered[idx]) return;

  if (idx === 0 || idx === 2) {
    const selected = state.r2.selected[idx];
    if (selected == null) return;
    const question = idx === 0 ? R2_Q1 : R2_GCS_CALC;
    const pick = question.options[selected];
    state.r2.answered[idx] = true;
    state.r2.gotRight[idx] = !!pick.correct;
    if (pick.correct) state.scores.r2 += 20;
    render();
    return;
  }

  if (idx === 1) {
    state.r2.answered[1] = true;
    const { pts } = scoreMultiSelect(R2_Q2.items, state.r2.q2Checked);
    state.scores.r2 += pts;
    render();
    return;
  }

  state.r2.answered[3] = true;
  const { pts } = scoreMultiSelect(
    R2_GCS_INTERPRET.items,
    state.r2.interpretChecked,
  );
  state.scores.r2 += pts;
  render();
}

export function renderR2(app, goTo) {
  const render = () => renderR2(app, goTo);
  const idx = state.r2.idx;
  const answered = state.r2.answered[idx];
  const isLast = idx === R2_STEPS - 1;
  const allAnswered = state.r2.answered.every(Boolean);

  app.innerHTML = `
    ${monitorBar()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 2 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Bedside Triage</h2>
        </div>
        <span class="lede">Question ${idx + 1} of ${R2_STEPS}</span>
      </div>
      <div class="chart-note">
        <h3>Initial presentation</h3>
        ${CASE_INTRO.history.map((h) => `<p style="margin:0 0 6px;">${h}</p>`).join('')}
        <div class="vitals-row">
          ${CASE_INTRO.vitals
            .map(
              (v) =>
                `<div class="vital ${v.flag ? 'flag' : ''}"><div class="lab">${v.lab}</div><div class="num mono">${v.num}</div></div>`,
            )
            .join('')}
        </div>
        <p style="margin:10px 0 0;"><strong>Exam:</strong> ${CASE_INTRO.exam}</p>
      </div>

      <div>
        <span class="eyebrow">Admission labs</span>
        ${renderAdmissionLabs()}
      </div>

      <div class="chart-note">
        <h3>Neurologic exam</h3>
        <p style="margin:0;">${NEURO_EXAM}</p>
      </div>

      ${renderStepCard(idx, answered)}

      <div class="btn-row">
        <button class="btn ghost" id="prevBtn" ${idx === 0 ? 'disabled' : ''}>← Back</button>
        ${
          isLast
            ? `<button class="btn" id="nextRoundBtn" ${allAnswered ? '' : 'disabled'}>Continue to Round 3 →</button>`
            : `<button class="btn" id="nextQBtn" ${answered ? '' : 'disabled'}>Next question →</button>`
        }
        <span class="lede">${state.scores.r2} of ${state.max.r2} pts</span>
      </div>
    </div>
  `;

  const qlist = document.getElementById('qlist');

  if (idx === 0 || idx === 2) {
    const question = idx === 0 ? R2_Q1 : R2_GCS_CALC;
    mountSingleChoice(qlist, question, answered, state.r2.selected[idx], (i) => {
      state.r2.selected[idx] = i;
      render();
    });
  } else if (idx === 1) {
    mountMultiSelect(qlist, R2_Q2.items, state.r2.q2Checked, answered);
  } else {
    mountMultiSelect(
      qlist,
      R2_GCS_INTERPRET.items,
      state.r2.interpretChecked,
      answered,
    );
  }

  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.onclick = () => submitCurrent(idx, render);
  }

  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) {
    prevBtn.onclick = () => {
      state.r2.idx--;
      render();
    };
  }
  const nextQBtn = document.getElementById('nextQBtn');
  if (nextQBtn) {
    nextQBtn.onclick = () => {
      state.r2.idx++;
      render();
    };
  }
  const nextRoundBtn = document.getElementById('nextRoundBtn');
  if (nextRoundBtn) nextRoundBtn.onclick = () => goTo('r3');
  wireRef();
}
