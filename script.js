const cube = document.querySelector('.cube');
const scene = document.querySelector('.scene');

let rotationX = 0;
let rotationY = 0;
let isRotating = false;
let lastX, lastY;

// Rotation du cube à la souris
scene.addEventListener('mousedown', (e) => {
  isRotating = true;
  lastX = e.clientX;
  lastY = e.clientY;
  cube.style.animationPlayState = 'paused';
});

window.addEventListener('mouseup', () => {
  isRotating = false;
  cube.style.animationPlayState = 'running';
});

window.addEventListener('mousemove', (e) => {
  if (!isRotating) return;

  let deltaX = e.clientX - lastX;
  let deltaY = e.clientY - lastY;

  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  lastX = e.clientX;
  lastY = e.clientY;
});

// Déplacement de la scène
let isDragging = false;
let startX, startY, initialLeft, initialTop;

scene.style.position = 'fixed';
scene.style.cursor = 'grab';

scene.addEventListener('contextmenu', (e) => e.preventDefault()); // empêche clic droit

scene.addEventListener('mousedown', (e) => {
  if (e.button === 2) { // clic droit pour déplacer
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = scene.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;
    scene.style.cursor = 'grabbing';
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let dx = e.clientX - startX;
  let dy = e.clientY - startY;
  scene.style.left = initialLeft + dx + 'px';
  scene.style.top = initialTop + dy + 'px';
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    scene.style.cursor = 'grab';
  }
});
