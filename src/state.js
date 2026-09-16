import {
  R1_PAIRS,
  R2_Q2,
  R2_GCS_INTERPRET,
  R3_QUESTIONS,
  FLUIDS,
  R5_CLUES,
  R5_TIME,
} from './data/index.js';

const ROUND_MAX = {
  r1: R1_PAIRS.length * 10,
  r2: 20 + R2_Q2.items.length * 10 + 20 + R2_GCS_INTERPRET.items.length * 10,
  r3: R3_QUESTIONS.length * 25,
  r4: FLUIDS.length * 10 + 30,
  r5: R5_CLUES.length * 15 + 30,
};

function freshRoundState() {
  return {
    r1: { pairs: {}, picked: null, submitted: false },
    r2: {
      idx: 0,
      answered: [false, false, false, false],
      selected: [null, null, null, null],
      gotRight: [null, null, null, null],
      q2Checked: {},
      interpretChecked: {},
    },
    r3: {
      idx: 0,
      answered: [false, false, false, false],
      selected: [null, null, null, null],
      gotRight: [null, null, null, null],
    },
    r4: {
      placed: {},
      submitted: false,
      q4Selected: null,
      q4Answered: false,
      q4GotRight: null,
    },
    r5: {
      started: false,
      finished: false,
      timeLeft: R5_TIME,
      matched: {},
      picked: null,
      timerId: null,
      order: [],
      clueOrder: [],
      bonus: 0,
    },
  };
}

export function createInitialState() {
  return {
    screen: 'title',
    groupName: '',
    startedAt: null,
    scores: { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 },
    max: { ...ROUND_MAX },
    ...freshRoundState(),
    elapsedId: null,
  };
}

/** Mutable session state — screens read/write this object. */
export const state = createInitialState();

export function totalScore() {
  return Object.values(state.scores).reduce((a, b) => a + b, 0);
}

export function totalMax() {
  return Object.values(state.max).reduce((a, b) => a + b, 0);
}

export function roundNumber() {
  const map = { title: 0, r1: 1, r2: 2, r3: 3, r4: 4, r5: 5, report: 6 };
  return map[state.screen] ?? 0;
}

export function resetState() {
  const max = state.max;
  Object.assign(state, createInitialState());
  state.max = max;
}

export function startElapsedTimer() {
  if (state.elapsedId) clearInterval(state.elapsedId);
  state.elapsedId = setInterval(() => {
    const f = document.getElementById('elapsedField');
    if (f && state.startedAt) {
      f.textContent = fmtTimeElapsed();
    }
  }, 1000);
}

function fmtTimeElapsed() {
  const sec = Math.floor((Date.now() - state.startedAt) / 1000);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function stopElapsedTimer() {
  if (state.elapsedId) {
    clearInterval(state.elapsedId);
    state.elapsedId = null;
  }
}
