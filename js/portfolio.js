const bathroomsSection = document.getElementById("bathrooms-section");
const bathroomsItems = [];
console.log(currentlang)
const locale = currentlang === "english" ? "en" : "nl";
const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios?locale=${locale}&populate=*`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(result => {
    const data = result.data;
    if (!data.length) {
      return bathroomsSection.classList.add("hidden")
    }
    const fotoBlock = bathroomsSection.querySelector(".foto-block");
    for (const item of data) {
      const attributes = item.attributes;
      const name = attributes.name;
      const image = attributes.additional_images.data[0].attributes.formats.small.url;
      fotoBlock.insertAdjacentHTML("beforeend", `<div class="block-one">
      <picture>
          <source
              srcset="
              
              ${image},
              ${image},
              ${image}
          "
              media="(min-width: 1400px)"
          />
          <source
              srcset="
              ${image},
              ${image},
              ${image}
          "
          media="(min-width: 768px)"
          />
          <source
              srcset="
              ${image},
              ${image},
              ${image}
          "
          media="(max-width: 767px)"
          />
          <img
              src="${image}"
              alt=""
              class=""
          />
      </picture>
      <p class="block-text">${name}</p></div>`)
    }
  })
.catch(error => console.log(error.message))


document.getElementById('toggleButton').addEventListener('click', function() {
  let section = document.getElementById('additionalSection');
  let button = document.getElementById('toggleButton'); // Отримуємо доступ до кнопки
  if (section.style.display === 'none') {
    section.style.display = 'flex';
    button.textContent = 'See less'; // Змінюємо текст кнопки на "Закрити меню"
  } else {
    section.style.display = 'none';
    button.textContent = 'See more'; // Змінюємо текст кнопки назад на "Відкрити меню"
  }
});
// document.getElementById('toggleButton').addEventListener('click', function() {
//     let section = document.getElementById('additionalSection');
//     if (section.style.display === 'none') {
//       section.style.display = 'flex';
//     } else {
//       section.style.display = 'none';
//     }
//   });
  
  document.getElementById('toggleButtonOne').addEventListener('click', function() {
    let section = document.getElementById('additionalSectionOne');
    if (section.style.display === 'none') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
  
  document.getElementById('toggleButtonTwo').addEventListener('click', function() {
    let section = document.getElementById('additionalSectionTwo');
    if (section.style.display === 'none') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });