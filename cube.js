// Optionnel: Permettre de contrôler le cube avec la souris

const cube = document.querySelector('.cube');
let isDragging = false;
let previousX, previousY;
let rotationX = 0;
let rotationY = 0;

cube.style.animationPlayState = 'running';

cube.addEventListener('mousedown', e => {
  isDragging = true;
  cube.style.animationPlayState = 'paused';
  previousX = e.clientX;
  previousY = e.clientY;
  cube.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', e => {
  isDragging = false;
  cube.style.animationPlayState = 'running';
  cube.style.cursor = 'grab';
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const deltaX = e.clientX - previousX;
  const deltaY = e.clientY - previousY;
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  previousX = e.clientX;
  previousY = e.clientY;
});
