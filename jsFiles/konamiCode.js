let pointer = 0;
const sequenceCode = ['KeyR', 'KeyE', 'KeyA', 'KeyC', 'KeyT'];
document.addEventListener('keydown', (e) => {
  pointer = (e.code == sequenceCode[pointer]) ? pointer + 1 : 0;
  if(pointer == sequenceCode.length){
    showGif(); 
    pointer = 0;
  } 
});