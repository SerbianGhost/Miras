const currentDrops = document.querySelectorAll('.about__drop');
const drops = document.querySelectorAll('.about__list');
currentDrops.forEach(el =>{
   el.addEventListener('click', (e)=>{
     let btn = e.target;
     let drop = btn.closest('.about__drop').querySelector('.about__list');
      if(btn){
         drop.classList.toggle('about__drop-active')
      }
 drops.forEach(el=>{
   if(el !== drop){
el.classList.remove('about__drop-active')
   }
 })
   })
})