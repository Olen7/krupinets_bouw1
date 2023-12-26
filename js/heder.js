let minOffset = 50;
window.onscroll = function() { 
  let body = document.querySelector('body');
  let has_class = body.classList.contains("is-scrolled");

  if (minOffset < document.documentElement.scrollTop ) {
    if (!has_class) {
        body.classList.add("is-scrolled");
    } 
  } else if (has_class) {
    body.classList.remove("is-scrolled");
  } 
}