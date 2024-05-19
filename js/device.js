const isMobile = window.innerWidth < 768;
let device = null;
if(window.innerWidth < 768){
    device = "mobile"
}else if(window.innerWidth >= 768 && window.innerWidth <= 1400){
    device = "tablet"
}else{
    device = "desktop"
}