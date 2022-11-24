const mirasSlider = document.querySelector('.slider');
let position = 0;
const sliderLine = document.querySelector('.slider__line');
mirasSlider.addEventListener('click', (e)=>{
   let btn = e.target;
   let prev = btn.classList.contains('prev');
   let next = btn.classList.contains('next');
if(prev){
   position = position  - 1366;
   if(position < 0){
      position = 2732;
   }
   sliderLine.style.left = - position + 'px';
}
if(next){
   position = position  + 1366;
   if(position > 2732){
      position = 0;
   }
   sliderLine.style.left = - position + 'px';
}
});
let auto = setInterval(function(){
   position = position + 1366;
   if(position > 2732){
      position = 0;
   }
   sliderLine.style.left = - position + 'px';
},15000)

