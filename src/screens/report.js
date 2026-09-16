import confetti from 'canvas-confetti';
import { LO_CROSSWALK, DISCUSS_QUESTIONS, RANKS } from '../data/index.js';
import { state, totalScore, totalMax, resetState, stopElapsedTimer } from '../state.js';
import { openRef } from '../ui/reference.js';

export function renderReport(app, goTo) {
  stopElapsedTimer();
  const pct = totalMax() ? totalScore() / totalMax() : 0;
  const rank = RANKS.find((r) => pct >= r.min).title;
  const rows = [
    { label: 'Round 1 · Compartment Check', score: state.scores.r1, max: state.max.r1 },
    { label: 'Round 2 · Bedside Triage', score: state.scores.r2, max: state.max.r2 },
    { label: 'Round 3 · Chart Review', score: state.scores.r3, max: state.max.r3 },
    { label: 'Round 4 · IV Fluid Pharmacy', score: state.scores.r4, max: state.max.r4 },
    { label: 'Round 5 · Lytes Beyond Sodium', score: state.scores.r5, max: state.max.r5 },
  ];

  app.innerHTML = `
    <div class="stack">
      <div class="hero">
        <span class="eyebrow">Shift report</span>
        <h1 style="font-size:2rem;">${state.groupName}</h1>
      </div>

      <div class="score-banner">
        <div>
          <div class="eyebrow">Total score</div>
          <div class="score-num">${totalScore()} <span style="font-size:1rem;color:var(--ink-soft);font-weight:500;">/ ${totalMax()}</span></div>
        </div>
        <div class="rank-badge">${rank}</div>
      </div>

      <div class="card stack">
        <span class="eyebrow">Round breakdown</span>
        <div class="breakdown">
          ${rows
            .map(
              (r) =>
                `<div class="brow"><span>${r.label}</span><span class="bar-track"><span class="bar-fill" style="width:${r.max ? Math.round((r.score / r.max) * 100) : 0}%"></span></span><span class="mono">${r.score}/${r.max}</span></div>`,
            )
            .join('')}
        </div>
      </div>

      <div class="epilogue">
        <h3>What happened to this patient</h3>
        <p>His sodium was gradually corrected over 6&ndash;7 days down to 144 mEq/L, right on target. Despite that, he had minimal neurological recovery, developed ventilator-associated pneumonia, and could not be weaned off the ventilator. His family chose comfort-focused care, and he passed away on hospital day 11.</p>
        <p style="margin-bottom:0;"><strong>Learning point:</strong> extreme hypernatremia carries a high risk of mortality and morbidity even with guideline-based, appropriately slow correction. Early recognition — and preventing severe dehydration in dependent, elderly patients in the first place — is what actually changes outcomes.</p>
      </div>

      <div class="card stack">
        <span class="eyebrow">Learning objectives covered</span>
        <table class="cross-tbl">
          <thead><tr><th>Round</th><th>Objectives</th></tr></thead>
          <tbody>${LO_CROSSWALK.map((x) => `<tr><td>${x.round}</td><td>${x.los}</td></tr>`).join('')}</tbody>
        </table>
      </div>

      <div class="card stack">
        <span class="eyebrow">For the class discussion</span>
        <ol class="discuss-list">${DISCUSS_QUESTIONS.map((q) => `<li>${q}</li>`).join('')}</ol>
      </div>

      <div class="btn-row">
        <button class="btn" id="restartBtn">Play again</button>
        <button class="btn ghost" id="refBtnReport">Open reference card</button>
      </div>
    </div>
  `;

  document.getElementById('restartBtn').onclick = () => {
    resetState();
    goTo('title');
  };
  document.getElementById('refBtnReport').onclick = openRef;

  if (pct >= 0.9) {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.3 },
      colors: ['#0e7c86', '#c97a2e', '#2f8f5b'],
    });
  }
}
