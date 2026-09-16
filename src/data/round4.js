/** Round 4 — IV fluid sorting and case tie-in. */

export const FLUIDS = [
  { name: '0.9% Normal Saline (NS)', cls: 'isotonic' },
  { name: 'Lactated Ringer\'s (LR)', cls: 'isotonic' },
  { name: 'D5W (5% Dextrose in Water)', cls: 'isotonic' },
  { name: '0.45% Normal Saline (½NS)', cls: 'hypotonic' },
  { name: '3% Normal Saline', cls: 'hypertonic' },
  { name: 'D5 1/2NS', cls: 'hypertonic' },
  { name: 'D5NS', cls: 'hypertonic' },
];

export const BINS = [
  { cls: 'isotonic', label: 'Isotonic' },
  { cls: 'hypotonic', label: 'Hypotonic' },
  { cls: 'hypertonic', label: 'Hypertonic' },
];

export const R4_Q = {
  prompt:
    'This patient received 3 L of 0.9% NS first, then D5W at 75 mL/hr. What\'s the reasoning behind that two-step plan?',
  options: [
    {
      text: 'NS restores intravascular volume and blood pressure first; D5W then supplies free water to gradually correct the water deficit and hypernatremia',
      correct: true,
    },
    {
      text: 'D5W is used first because it corrects sodium the fastest',
      correct: false,
    },
    { text: 'Normal saline is contraindicated in hypernatremia', correct: false },
    {
      text: 'The switch was arbitrary and has no clinical basis',
      correct: false,
    },
  ],
  explain:
    'Isotonic saline expands the intravascular space and treats the hypotension/shock physiology first without changing tonicity too fast. Once perfusion is stabilized, a hypotonic free-water source (D5W, since the dextrose is metabolized) gradually replaces the water deficit driving the hypernatremia.',
};
