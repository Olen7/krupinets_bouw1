const bathroomsSection = document.getElementById("portfolio-bathrooms");
const generalSection = document.getElementById("portfolio-general");
const dormerSection = document.getElementById("portfolio-dormer");
const bathroomsItems = [];
const locale = currentlang === "english" ? "en" : "nl";

function renderFotoBlock(block, data) {
  const deviceHeightMap = {
    desktop: { 1: '674px', 2: '430px', 3: '674px' },
    tablet: { 1: '352px', 2: '264px', 3: '545px' },
    mobile: { 1: '55vw', 2: '30vw', 3: '355px' },
  };

  const heights = deviceHeightMap[device] || {};
  block.style.height = heights[data.length] || 'auto';

  if (data.length === 2) {
    block.style.flexDirection = "row";
  }

  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    const attributes = item.attributes;
    const name = attributes.name;

    // Вибір найкращого доступного формату
    let image = attributes.main_image.data.attributes.formats.large?.url || 
                attributes.main_image.data.attributes.url; // Оригінал
    console.log("Фото URL:", image);

    // Динамічна оптимізація зображення
    image = image.replace('/upload/', '/upload/w_1920,h_1080,c_limit,q_auto,f_auto/');

    let className = "";
    if (data.length === 1) {
      className = "block-one full-width";
    } else if (data.length === 2) {
      className = "block-one";
    } else if (data.length === 3) {
      className = i < 2 ? "block-one" : "block-two";
    }

    block.insertAdjacentHTML(
      "beforeend",
      `<div class="${className}" id="project-section">
        <a href="./project-one.html?id=${item.id}" class="portfolio-item-link">
          <img src="${image}" alt="${name}" class="portfolio-image">
          <p class="block-text">${name}</p>
        </a>
      </div>`
    );
  }
}

function renderItems(section, data){
  const fotoBlock = section.querySelector(".foto-block");
  const fotoBlockReverse = section.querySelector(".foto-block-reverse");
  const toggleBtn = section.querySelector("[data-toggle=collapse]");
  if (!data.length) {

    fotoBlock.classList.add("hidden");
    fotoBlockReverse.classList.add("hidden");
    return
  }
  if(data.length >= 4 ){
    toggleBtn.classList.remove("hidden");
  };
 const fotoBlockItems = data.slice(0, 3);
 renderFotoBlock(fotoBlock, fotoBlockItems);
 if(data.length > 3){
  const fotoBlockReverseItems = data.slice(3);
  renderFotoBlock(fotoBlockReverse, fotoBlockReverseItems);
 }
  
}
const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
// Функція для попереднього завантаження даних
function prefetchData() {
  fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios?locale=${locale}&populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('prefetchedData', JSON.stringify(data));
    })
    .catch(error => console.log("Помилка під час prefetching:", error.message));
}

// Виклик попереднього завантаження (наприклад, під час завантаження сторінки)
window.addEventListener('DOMContentLoaded', prefetchData);

// Основний запит з перевіркою на наявність даних у localStorage
function fetchData() {
  const cachedData = localStorage.getItem('prefetchedData');

  if (cachedData) {
    console.log("Отримані дані з localStorage:", JSON.parse(cachedData));
    processData(JSON.parse(cachedData));
    localStorage.removeItem('prefetchedData'); // Видаляємо кеш після використання
  } else {
    fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios?locale=${locale}&populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        processData(result);
      })
      .catch(error => console.log(error.message));
  }
}

// Функція для обробки даних
function processData(result) {
  const data = result.data;
  console.log("Отримані дані з API:", data);
  
  const bathroomsItems = data.filter(item => item.attributes.type === "bathrooms");
  const generalItems = data.filter(item => item.attributes.type === "general-renovation");
  const dormerItems = data.filter(item => item.attributes.type === "dormer-constructions");

  renderItems(bathroomsSection, bathroomsItems);
  renderItems(generalSection, generalItems);
  renderItems(dormerSection, dormerItems);
}

// Викликаємо основну функцію для отримання даних
fetchData();


const toggleBtn = document.querySelectorAll("[data-toggle=collapse]");
toggleBtn.forEach(btn => btn.addEventListener("click", function(event){
  const element = document.querySelector(event.target.dataset.target);
      if (element.style.display === 'none') {
        element.style.display = 'flex';
        event.target.textContent = currentlang === "english" ? "See less" : "Zie wijnmoer";
    } else {
       element.style.display = 'none';
       event.target.textContent = currentlang === "english" ? "See more" : "Zie meer";
    }
}))








// const bathroomsSection = document.getElementById("portfolio-bathrooms");
// const generalSection = document.getElementById("portfolio-general");
// const dormerSection = document.getElementById("portfolio-dormer");
// const bathroomsItems = [];
// const locale = currentlang === "english" ? "en" : "nl";

// function renderFotoBlock(block, data) {
//   const deviceHeightMap = {
//     desktop: { 1: '430px', 2: '430px', 3: '674px' },
//     tablet: { 1: '352px', 2: '264px', 3: '545px' },
//     mobile: { 1: '55vw', 2: '30vw', 3: '355px' },
//   };

//   const heights = deviceHeightMap[device] || {};
//   block.style.height = heights[data.length] || 'auto';

//   if (data.length === 2) {
//     block.style.flexDirection = "row";
//   }

//   for (let i = 0; i < data.length; i += 1) {
//     const item = data[i];
//     const attributes = item.attributes;
//     const name = attributes.name;

//     // Вибір найкращого доступного формату
//     let image = attributes.main_image.data.attributes.formats.large?.url || 
//                 attributes.main_image.data.attributes.url; // Оригінал
//     console.log("Фото URL:", image);

//     // Динамічна оптимізація зображення
//     image = image.replace('/upload/', '/upload/w_1920,h_1080,c_limit,q_auto,f_auto/');

//     let className = "";
//     if (data.length === 1) {
//       className = "block-one full-width";
//     } else if (data.length === 2) {
//       className = "block-one";
//     } else if (data.length === 3) {
//       className = i < 2 ? "block-one" : "block-two";
//     }

//     block.insertAdjacentHTML(
//       "beforeend",
//       `<div class="${className}">
//         <a href="./project-one.html?id=${item.id}" class="portfolio-item-link">
//           <img src="${image}" alt="${name}" class="portfolio-image">
//           <p class="block-text">${name}</p>
//         </a>
//       </div>`
//     );
//   }
// }

// function renderItems(section, data){
//   const fotoBlock = section.querySelector(".foto-block");
//   const fotoBlockReverse = section.querySelector(".foto-block-reverse");
//   const toggleBtn = section.querySelector("[data-toggle=collapse]");
//   if (!data.length) {

//     fotoBlock.classList.add("hidden");
//     fotoBlockReverse.classList.add("hidden");
//     return
//   }
//   if(data.length >= 4 ){
//     toggleBtn.classList.remove("hidden");
//   };
//  const fotoBlockItems = data.slice(0, 3);
//  renderFotoBlock(fotoBlock, fotoBlockItems);
//  if(data.length > 3){
//   const fotoBlockReverseItems = data.slice(3);
//   renderFotoBlock(fotoBlockReverse, fotoBlockReverseItems);
//  }
  
// }
// const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
// fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios?locale=${locale}&populate=*`, {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// })
//   .then(response => response.json())
//   .then(result => {
//     const data = result.data;
//     console.log("Отримані дані з API:", data);
//     const bathroomsItems = data.filter(item => item.attributes.type === "bathrooms");
//     const generalItems = data.filter(item => item.attributes.type === "general-renovation");
//     const dormerItems = data.filter(item => item.attributes.type === "dormer-constructions");
//     renderItems(bathroomsSection, bathroomsItems)
//     renderItems(generalSection, generalItems)
//     renderItems(dormerSection, dormerItems)
    
//   })
// .catch(error => console.log(error.message))

// const toggleBtn = document.querySelectorAll("[data-toggle=collapse]");
// toggleBtn.forEach(btn => btn.addEventListener("click", function(event){
//   const element = document.querySelector(event.target.dataset.target);
//       if (element.style.display === 'none') {
//         element.style.display = 'flex';
//         event.target.textContent = currentlang === "english" ? "See less" : "Zie wijnmoer";
//     } else {
//        element.style.display = 'none';
//        event.target.textContent = currentlang === "english" ? "See more" : "Zie meer";
//     }
// }))






