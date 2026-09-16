/** Reference card overlay wiring. */

export function openRef() {
  document.getElementById('refOverlay').hidden = false;
}

export function closeRef() {
  document.getElementById('refOverlay').hidden = true;
}

export function wireRef() {
  const btn = document.getElementById('openRef');
  if (btn) btn.onclick = openRef;
}

export function initReferenceOverlay() {
  document.getElementById('refClose').onclick = closeRef;
  document.getElementById('refOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'refOverlay') closeRef();
  });
}
