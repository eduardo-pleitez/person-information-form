
function showGif(){
  const gifContainer = document.getElementById('gifContainer');
  let winHeight = document.documentElement.scrollHeight;
  gifContainer.style.height = winHeight +  'px';
  gifContainer.style.display = 'block';
  timeOut(gifContainer);
}

function timeOut(gifContainer){
  setTimeout(() => gifContainer.style.display = 'none', 5000);
}