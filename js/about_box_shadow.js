window.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    if (window.scrollY > 0) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  });
//   let minOffset = 50;
// window.onscroll = function() { 
//   let header = document.querySelector('header');
//   let has_class = header.classList.contains("is-scrolled");

//   if (minOffset < document.documentElement.scrollTop ) {
//     if (!has_class) {
//         header.classList.add("is-scrolled");
//     } 
//   } else if (has_class) {
//     header.classList.remove("is-scrolled");
//   } 
// }
  // 0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa