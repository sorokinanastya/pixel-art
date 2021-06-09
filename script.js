let pixels = document.querySelectorAll('.pixel');
let chosen = document.querySelector('.chosen-color');
let check = document.querySelector('.eraser');

chosen.onchange = function() {
  console.log(chosen.value)
  
}

for (let pixel of pixels) {
  pixel.onclick = function() {
    if(check.checked){
      pixel.style.backgroundColor = 'white';
    }
    else {
      pixel.style.backgroundColor = chosen.value;
    }
};


}