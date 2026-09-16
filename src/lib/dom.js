/** DOM helpers shared across round screens. */

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/** Drag-and-drop helpers — touch devices and trackpads both work with click fallback. */
export function wireDraggable(node, payload) {
  node.draggable = true;
  node.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(payload));
    setTimeout(() => node.classList.add('dragging'), 0);
  });
  node.addEventListener('dragend', () => node.classList.remove('dragging'));
}

export function wireDropTarget(node, onDrop) {
  node.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    node.classList.add('dragover');
  });
  node.addEventListener('dragleave', () => node.classList.remove('dragover'));
  node.addEventListener('drop', (e) => {
    e.preventDefault();
    node.classList.remove('dragover');
    let payload = null;
    try {
      payload = JSON.parse(e.dataTransfer.getData('text/plain'));
    } catch {
      /* ignore malformed payloads */
    }
    if (payload) onDrop(payload);
  });
}
