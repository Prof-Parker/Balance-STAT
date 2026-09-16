/** Case presentation and Round 2 bedside triage questions. */

export const CASE_INTRO = {
  history: [
    '70-year-old male, nursing home resident, brought in by ambulance for altered mental status.',
    'PMH: Parkinson\'s dementia, deep vein thrombosis on chronic anticoagulation, right ventriculoperitoneal (VP) shunt for hydrocephalus.',
    'Baseline: bedbound / wheelchair-dependent, but previously alert, oriented, and conversant.',
    'One week prior: completed a course of azithromycin for a cough.',
  ],
  vitals: [
    { lab: 'Temp', num: '36.4°C', flag: false },
    { lab: 'HR', num: '101', flag: true },
    { lab: 'BP', num: '78/51', flag: true },
    { lab: 'RR', num: '15', flag: false },
    { lab: 'SpO₂', num: '97% RA', flag: false },
  ],
  exam: 'Cachectic, scaphoid abdomen, mottled lower extremities, coarse crackles bilaterally.',
};

export const NEURO_EXAM =
  'No eye opening to painful stimuli. No vocal response. No motor response. He was intubated for airway protection.';

export const R2_Q1 = {
  prompt: 'Which extracellular fluid volume imbalance best fits this presentation?',
  options: [
    { text: 'Fluid volume deficit', correct: true },
    { text: 'Fluid volume excess', correct: false },
    { text: 'Normal fluid balance', correct: false },
    { text: 'Cannot be determined from this information', correct: false },
  ],
  explain:
    'Reduced thirst response, dependence on staff for fluids, and a poor oral intake history all point to dehydration — a fluid volume deficit. Elderly, institutionalized patients are at especially high risk because thirst and renal concentrating ability both decline with age.',
};

export const R2_Q2 = {
  prompt: 'Select every finding below that supports fluid volume deficit in this patient.',
  items: [
    {
      text: 'Tachycardia (HR 101)',
      correct: true,
      note: 'The heart compensates for low circulating volume by beating faster.',
    },
    {
      text: 'Hypotension (BP 78/51)',
      correct: true,
      note: 'Reduced intravascular volume lowers blood pressure.',
    },
    {
      text: 'Altered mental status / decreased LOC',
      correct: true,
      note: 'Cerebral perfusion and cell hydration both suffer with severe volume and water loss.',
    },
    {
      text: 'Elevated BUN and creatinine',
      correct: true,
      note: 'Reduced renal perfusion from volume depletion raises BUN and creatinine (prerenal pattern).',
    },
    {
      text: 'Coarse bilateral crackles',
      correct: false,
      note: 'Tempting — crackles usually signal fluid volume EXCESS. Here they most likely reflect aspiration/pneumonia, not overload: his BNP was normal (33 pg/mL) and chest imaging showed infiltrate vs. atelectasis, not pulmonary edema.',
    },
    {
      text: 'Bounding, easily palpable pulse',
      correct: false,
      note: 'A bounding pulse is a fluid volume EXCESS sign — this patient\'s exam doesn\'t show that.',
    },
    {
      text: 'Jugular venous distention',
      correct: false,
      note: 'JVD reflects volume overload, not deficit — not part of this presentation.',
    },
  ],
};

export const R2_GCS_CALC = {
  prompt: 'Using the neuro exam above, calculate this patient\'s Glasgow Coma Scale (GCS) score.',
  options: [
    { text: '0 — no response in any category', correct: false },
    { text: '3 — the lowest possible score on the scale', correct: true },
    { text: '8 — the usual threshold for airway protection concerns', correct: false },
    { text: '15 — fully alert and oriented', correct: false },
  ],
  explain:
    'Every GCS category has a floor of 1 point, even with zero response: Eye opening 1 (none) + Verbal 1 (none) + Motor 1 (none) = 3. A GCS can never score 0 — 3 is the lowest possible score and 15 is fully alert.',
};

export const R2_GCS_INTERPRET = {
  prompt: 'Based on your calculated GCS score which of the following apply? (Select all that apply)',
  items: [
    {
      text: 'There is significant neurological injury occurring',
      correct: true,
      note: 'A GCS of 3 is the lowest possible score and reflects profound impairment of consciousness.',
    },
    {
      text: 'The patient requires immediate CPR',
      correct: false,
      note: 'GCS measures level of consciousness, not cardiac or respiratory arrest — this patient still had a pulse and was breathing; he was intubated for airway protection, not resuscitated.',
    },
    {
      text: 'The patient is unable to protect their airway',
      correct: true,
      note: 'A GCS this low means the patient can\'t reliably guard against aspiration — exactly why he was intubated.',
    },
    {
      text: 'Fluid or electrolyte imbalances are not contributing to the patient\'s neurologic status',
      correct: false,
      note: 'The opposite is true here — extreme hypernatremia is a major, direct cause of his altered mental status.',
    },
    {
      text: 'This level of consciousness is consistent with the patient\'s baseline dementia',
      correct: false,
      note: 'He was previously alert, oriented, and conversant — this is an acute change from baseline, not his dementia, and acute changes always need a cause.',
    },
  ],
};
