/** Round 3 — lab trends and chart-review MCQs. */

export const LABS = {
  columns: ['On admission', '24 h', '48 h', '72 h', '96 h'],
  rows: [
    {
      label: 'Sodium (mEq/L)',
      range: '136–145',
      values: ['191', '182', '171', '164', '157'],
      flagIdx: [0, 1, 2, 3, 4],
    },
    {
      label: 'Potassium (mEq/L)',
      range: '3.5–5.1',
      values: ['5.1', '3.9', '3.5', '3.1', '3.3'],
      flagIdx: [3, 4],
    },
    {
      label: 'Chloride (mEq/L)',
      range: '98–107',
      values: ['>150', '>150', '146', '137', '128'],
      flagIdx: [0, 1, 2, 3, 4],
    },
    {
      label: 'BUN (mg/dL)',
      range: '8–26',
      values: ['119', '31', '31', '44', '27'],
      flagIdx: [0, 1, 2, 3, 4],
    },
    {
      label: 'Creatinine (mg/dL)',
      range: '0.7–1.3',
      values: ['3.17', '2.9', '2.27', '1.43', '1.13'],
      flagIdx: [0, 1, 2, 3],
    },
  ],
};

export const R3_QUESTIONS = [
  {
    prompt: 'The admission sodium is 191 mEq/L. How is this classified?',
    options: [
      { text: 'Mild hypernatremia (>145 mEq/L)', correct: false },
      { text: 'Severe hypernatremia (>160 mEq/L)', correct: false },
      { text: 'Extreme hypernatremia (>190 mEq/L)', correct: true },
      { text: 'Within normal limits', correct: false },
    ],
    explain:
      'Hypernatremia starts above 145 mEq/L, is severe above 160 mEq/L, and is classified extreme above 190 mEq/L. A level of 191 mEq/L is at the very top of that scale and is exceptionally rare.',
  },
  {
    prompt:
      'Sodium dropped from 191 to 157 mEq/L over 96 hours — about 34 mEq/L total. Guidelines recommend correcting no faster than 0.5 mEq/L/hr (or 12 mEq/L/24 hr). Was this correction rate safe?',
    options: [
      {
        text: 'Yes — roughly 0.35 mEq/L/hr, well inside the safe range',
        correct: true,
      },
      {
        text: 'No — this is dangerously fast and risks cerebral edema',
        correct: false,
      },
      {
        text: 'No — it should have been corrected within the first few hours',
        correct: false,
      },
      { text: 'Not enough information to tell', correct: false },
    ],
    explain:
      '34 mEq/L over 96 hours averages about 0.35 mEq/L/hr (roughly 8–9 mEq/L per 24 hr) — a slow, guideline-concordant correction. Correcting hypernatremia too fast pulls water into swollen brain cells and can cause fatal cerebral edema, so slow and steady is the rule even when the starting number is extreme.',
  },
  {
    prompt:
      'Potassium trends 5.1 → 3.9 → 3.5 → 3.1 mEq/L over the first 72 hours. What\'s the priority nursing consideration?',
    options: [
      { text: 'None — potassium isn\'t clinically relevant here', correct: false },
      {
        text: 'Monitor closely for hypokalemia and its cardiac effects as fluids correct',
        correct: true,
      },
      { text: 'Give an emergency IV potassium bolus immediately', correct: false },
      { text: 'Hold all IV fluids until potassium stabilizes', correct: false },
    ],
    explain:
      'As fluid resuscitation dilutes the serum and renal excretion improves, potassium is drifting down toward hypokalemia. It needs frequent monitoring and, if ordered, slow IV replacement — potassium is never given as an IV push/bolus, which can cause fatal arrhythmias.',
  },
  {
    prompt:
      'BUN 119 mg/dL and creatinine 3.17 mg/dL on admission (a BUN:Cr ratio over 20:1) both trend back toward normal with fluid resuscitation. What does this pattern suggest?',
    options: [
      { text: 'Chronic kidney disease', correct: false },
      { text: 'Prerenal azotemia from dehydration', correct: true },
      {
        text: 'Intrinsic renal failure unrelated to hydration status',
        correct: false,
      },
      { text: 'Urinary tract obstruction', correct: false },
    ],
    explain:
      'A disproportionately high BUN:Cr ratio that improves with volume repletion is the classic pattern of prerenal azotemia — the kidneys themselves are fine, but reduced perfusion from dehydration was dragging both values up.',
  },
];
