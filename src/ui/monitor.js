import { state, totalScore, roundNumber } from '../state.js';
import { fmtTime } from '../lib/utils.js';

export function monitorBar() {
  if (state.screen === 'title') return '';
  const rn = roundNumber();
  const elapsed = state.startedAt
    ? Math.floor((Date.now() - state.startedAt) / 1000)
    : 0;
  return `
  <div class="monitor">
    <div class="brand"><span class="pulse-dot"></span> Balance, STAT!</div>
    <div class="sep"></div>
    <div class="field"><span class="k">Team</span><span class="v">${state.groupName || 'Unnamed'}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Round</span><span class="v">${rn > 5 ? 'Report' : `${rn} of 5`}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Elapsed</span><span class="v mono" id="elapsedField">${fmtTime(elapsed)}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Score</span><span class="v mono">${totalScore()}</span></div>
    <div class="grow"></div>
    <button class="refbtn" id="openRef">Reference card</button>
  </div>
  <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, (rn / 5) * 100)}%"></div></div>
  `;
}
