const isMobile = window.innerWidth < 768;
let device = null;
if(window.innerWidth < 768){
    device = "mobile"
}else if(window.innerWidth >= 768 && window.innerWidth <= 1399){
    device = "tablet"
}else{
    device = "desktop"
}
console.log(device);


//код для того щоб бачити розмір свого екрану
function logScreenSize() {
    console.log(`Ширина: ${window.innerWidth}px, Висота: ${window.innerHeight}px`);
  }

  // Викликаємо функцію при завантаженні сторінки
  logScreenSize();

  // Додаємо обробник події для відстеження зміни розміру вікна
  window.addEventListener('resize', logScreenSize);