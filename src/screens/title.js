import { LOS } from '../data/index.js';
import { state, startElapsedTimer } from '../state.js';
import { openRef } from '../ui/reference.js';

function loGrid() {
  return `<div class="lo-grid">${LOS.map(
    (l, i) =>
      `<div class="lo-item"><span class="n">${i + 1}</span><span>${l}</span></div>`,
  ).join('')}</div>`;
}

export function renderTitle(app, goTo) {
  app.innerHTML = `
    <div class="hero">
      <span class="eyebrow">A fluids &amp; electrolytes case game</span>
      <h1>Balance, STAT!</h1>
      <p class="tag">Admit the patient. Read the chart. Keep the balance.</p>
    </div>
    <div class="card stack">
      <p class="lede">Your team is the admitting nurses for a 70-year-old nursing home resident with altered mental status. Across five short rounds you'll sort fluid compartments, triage the bedside exam, read a real basic metabolic panel, choose IV fluids, and race the clock on electrolyte imbalances. Play takes about 12&ndash;15 minutes.</p>
      <div>
        <span class="eyebrow">This session covers</span>
        ${loGrid()}
      </div>
      <div>
        <label class="field-label" for="teamInput">Team / group name</label>
        <input type="text" id="teamInput" placeholder="e.g., Team Isotonic" maxlength="30">
      </div>
      <div class="btn-row">
        <button class="btn" id="startBtn">Begin Shift</button>
        <button class="btn ghost" id="refBtnTitle">Open reference card</button>
      </div>
    </div>
    <p class="footer-note">Based on Kamatam et al., <em>Extreme Hypernatremia due to Dehydration</em>, J Med Cases 2023;14(7):232&ndash;236 &middot; details adapted for classroom use.</p>
  `;
  document.getElementById('startBtn').onclick = () => {
    const v = document.getElementById('teamInput').value.trim();
    state.groupName = v || 'Unnamed Team';
    state.startedAt = Date.now();
    startElapsedTimer();
    goTo('r1');
  };
  document.getElementById('refBtnTitle').onclick = openRef;
}
