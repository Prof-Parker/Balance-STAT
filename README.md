# Balance, STAT!

A fluids & electrolytes case game for nursing students, built as a Vite progressive web app.

**Play online:** [https://prof-parker.github.io/Balance-STAT/](https://prof-parker.github.io/Balance-STAT/)

Based on Kamatam et al., *Extreme Hypernatremia due to Dehydration*, J Med Cases 2023;14(7):232–236 (details adapted for classroom use).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production build includes a service worker via `vite-plugin-pwa` so the game can be installed and used offline.

## Structure

| Path | Role |
|------|------|
| `src/data/` | Learning content (rounds, labs, clues) |
| `src/screens/` | One module per game screen |
| `src/ui/` | Shared chrome (monitor bar, reference card) |
| `src/lib/` | DOM and utility helpers |
| `src/state.js` | Session state and scoring |
| `src/main.js` | Router + PWA registration |
