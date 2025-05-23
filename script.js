// Simple interaction for cube rotation on mouse move
const cube = document.querySelector('.cube');
const scene = document.querySelector('.scene');

let rotationX = 0;
let rotationY = 0;
let isDragging = false;
let lastX, lastY;

scene.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  cube.style.animationPlayState = 'paused';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  cube.style.animationPlayState = 'running';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  let deltaX = e.clientX - lastX;
  let deltaY = e.clientY - lastY;

  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  lastX = e.clientX;
  lastY = e.clientY;
});
const scene = document.querySelector('.scene');
let isDragging = false;
let startX, startY, initialLeft, initialTop;

scene.style.position = 'fixed';  // pour être sûr

scene.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  const rect = scene.getBoundingClientRect();
  initialLeft = rect.left;
  initialTop = rect.top;
  scene.style.cursor = 'grabbing';
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
