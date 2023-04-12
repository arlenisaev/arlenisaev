let position = 0;

function recursionAnimation(){
  position = position + 10;
  if (position > 450) return;
  document.querySelector('.box').style.left = position + 'px';
  animation();
}
function animation() {
  setTimeout(recursionAnimation, 100);
}
animation();



