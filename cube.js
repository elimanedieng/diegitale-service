const cube = document.querySelector('.cube');
let isDragging = false;
let lastX, lastY;
let rotationX = 25;
let rotationY = 45;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

let autoRotateSpeed = 0.3;
let autoRotate = true;

function animate() {
  if (autoRotate && !isDragging) {
    rotationX += autoRotateSpeed;
    rotationY += autoRotateSpeed;
  }
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  requestAnimationFrame(animate);
}
animate();

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  autoRotate = false;
  cube.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    autoRotate = true;
    cube.style.cursor = 'grab';
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  rotationX = clamp(rotationX, -90, 90);
  lastX = e.clientX;
  lastY = e.clientY;
});
