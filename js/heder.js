let minOffset = 50;
window.onscroll = function() { 
  let header = document.querySelector('header');
  let has_class = header.classList.contains("is-scrolled");

  if (minOffset < document.documentElement.scrollTop ) {
    if (!has_class) {
        header.classList.add("is-scrolled");
    } 
  } else if (has_class) {
    header.classList.remove("is-scrolled");
  } 
}

// let minOffset = 50;
// window.onscroll = function() { 
//   let body = document.body; // Або document.querySelector('body'), але document.body коротше
//   let hasClass = body.classList.contains("is-scrolled");

//   if (minOffset < document.documentElement.scrollTop) {
//     if (!hasClass) {
//       body.classList.add("is-scrolled");
//     }
//   } else if (hasClass) {
//     body.classList.remove("is-scrolled");
//   }
// }