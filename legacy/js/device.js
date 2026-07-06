const isMobile = window.innerWidth < 768;
let device = null;
let switcher = ''
if(window.innerWidth < 768){
    device = "mobile"
    switcher = "📱"
}else if(window.innerWidth >= 768 && window.innerWidth <= 1399){
    device = "tablet"
    switcher = "📟"
}else{
    device = "desktop"
    switcher = "🖥️"
}
console.log(device, switcher);
  localStorage.setItem("device", device)