const sliderSecond = document.querySelectorAll('.slider-s');
sliderSecond.forEach(el =>{
   let pos = 0;
   let sl = el.querySelectorAll('.slider-s__item');
   let curSl = (pos + 300) * (sl.length - 3);
   el.addEventListener('click', (e)=>{
      let secondBtn = e.target;
      let prev = secondBtn.classList.contains('prev');
      let next = secondBtn.classList.contains('next');
      if(prev){
         pos = pos - 300;
         sl.forEach(el =>{
            if(pos <0){
               pos = curSl
            }
            el.style.left = - pos + 'px';
         })
      }
      if(next){
         pos = pos  + 300;
         sl.forEach(el =>{
            if(pos >= curSl){
               pos = 0
            }
            el.style.left = - pos + 'px';
         })
      }
   })
})