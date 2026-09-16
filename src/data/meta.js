/** Learning objectives, scoring ranks, and debrief content. */

export const LOS = [
  'Body fluid compartments',
  'Regulation of fluid & electrolyte movement',
  'ECF volume imbalances: deficit & excess',
  'Common fluid imbalances',
  'Common IV fluid solutions',
  'Electrolyte imbalances (Na, K, Mg, Ca, Phos)',
];

export const LO_CROSSWALK = [
  { round: 'Round 1 · Compartment Check', los: 'LO 1, 2, 6' },
  { round: 'Round 2 · Bedside Triage', los: 'LO 3, 4, 7' },
  { round: 'Round 3 · Chart Review', los: 'LO 3, 4, 8, 10' },
  { round: 'Round 4 · IV Fluid Pharmacy', los: 'LO 5, 9' },
  { round: 'Round 5 · Lytes Beyond Sodium', los: 'LO 8, 10' },
];

export const DISCUSS_QUESTIONS = [
  'The crackles in Round 2 were a distractor for fluid volume excess. What other assessment and lab findings help you tell an infectious cause of crackles apart from cardiogenic volume overload?',
  'Age was a major risk factor here — reduced thirst, reduced renal concentrating ability, and dependence on staff for fluids. What nursing interventions at the nursing home might have prevented this admission?',
  'If this patient\'s sodium had been low (hyponatremia) instead of high, how would your choice and rate of IV fluids change?',
  'Which single electrolyte would you prioritize monitoring most closely during this patient\'s rehydration, and why?',
  'The team followed guideline-based, gradual sodium correction and the patient still did not recover. What does that tell you about the limits of “doing everything right” in extreme electrolyte disturbances?',
];

export const RANKS = [
  { min: 0.9, title: 'Charge Nurse' },
  { min: 0.75, title: 'RN, Ready for Rounds' },
  { min: 0.55, title: 'New Grad — Solid Start' },
  { min: 0, title: 'Chart This One for Review' },
];
