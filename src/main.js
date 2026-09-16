import './style.css';
import { registerSW } from 'virtual:pwa-register';
import { state } from './state.js';
import { initReferenceOverlay } from './ui/reference.js';
import { renderTitle } from './screens/title.js';
import { renderR1 } from './screens/round1.js';
import { renderR2 } from './screens/round2.js';
import { renderR3 } from './screens/round3.js';
import { renderR4 } from './screens/round4.js';
import { renderR5 } from './screens/round5.js';
import { renderReport } from './screens/report.js';

const app = document.getElementById('app');

const RENDERERS = {
  title: renderTitle,
  r1: renderR1,
  r2: renderR2,
  r3: renderR3,
  r4: renderR4,
  r5: renderR5,
  report: renderReport,
};

function goTo(screen) {
  state.screen = screen;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  RENDERERS[screen](app, goTo);
}

initReferenceOverlay();
registerSW({ immediate: true });
goTo(state.screen);
