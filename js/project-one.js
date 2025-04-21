import StorageObserver from './index-lang.js';
const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const langStorage = new StorageObserver("lang");
const currentlang = langStorage.get() || "english";
const locale = currentlang === "english" ? "en" : "nl";

// Функція для попереднього завантаження даних
function prefetchData() {
  if (!id) return; // Перевірка, чи існує id

  fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios/${id}?locale=${locale}&populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem(`prefetchedData_${id}`, JSON.stringify(data));
      console.log("Дані попередньо завантажені:", data);
    })
    .catch(error => console.log("Помилка під час prefetching:", error.message));
}

// Виклик попереднього завантаження
window.addEventListener('DOMContentLoaded', prefetchData);

// Основна функція для отримання даних з перевіркою на кеш
function fetchData() {
  if (!id) {
    console.log("ID не знайдено у параметрах URL.");
    return;
  }

  const cachedData = localStorage.getItem(`prefetchedData_${id}`);

  if (cachedData) {
    console.log("Отримані дані з localStorage:", JSON.parse(cachedData));
    processData(JSON.parse(cachedData));
    localStorage.removeItem(`prefetchedData_${id}`); // Видаляємо кеш після використання
  } else {
    fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios/${id}?locale=${locale}&populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        processData(result);
      })
      .catch(error => console.log("Помилка під час завантаження даних:", error.message));
  }
}

// Функція для обробки отриманих даних
function processData(result) {
  const attributes = result.data?.attributes;

  if (!attributes) {
    console.log("Атрибути відсутні у відповіді сервера.");
    return;
  }

  // Отримання та встановлення назви проєкту
  const name = attributes.name || "Назва недоступна";
  const projectNameElement = document.getElementById("project-name");
  if (projectNameElement) projectNameElement.textContent = name;

  // Основне зображення проєкту
  const mainImage = attributes.main_image?.data?.attributes?.url;
  const projectMainImageElement = document.getElementById("project-main-image");
  if (projectMainImageElement && mainImage) projectMainImageElement.src = mainImage;

  // Опис проєкту
  const description = attributes.description || "Опис проєкту недоступний.";
  const projectDescriptionElement = document.getElementById("project-description");
  if (projectDescriptionElement) {
    const formattedDescription = description
      .split("\n\n")
      .map(block => {
        const [title, ...content] = block.split("\n");
        const titleCleaned = title.startsWith("**") && title.endsWith("**")
          ? title.slice(2, -2).trim()
          : title.trim();
        const contentHtml = content.map(line => `<p class="text-portfolio">${line.trim()}</p>`).join("");

        return `
          <div class="div-block">
            <div class="title-portfolio">${titleCleaned}</div>
            ${contentHtml}
          </div>
        `;
      })
      .join("");

    projectDescriptionElement.innerHTML = formattedDescription;
  }

  // Додаткові зображення
  const additionalImages = attributes.additional_images?.data || [];
  const projectAdditionalImagesElement = document.getElementById("project-additional-images");
  if (projectAdditionalImagesElement) {
    projectAdditionalImagesElement.innerHTML = ""; // Очищуємо перед вставкою нових зображень

    for (const image of additionalImages) {
      const imageUrl = image.attributes?.url;
      if (imageUrl) {
        projectAdditionalImagesElement.insertAdjacentHTML(
          "beforeend",
          `<li class="picture-menu-block"><img src="${imageUrl}" alt="Additional Image"></li>`
        );
      }
    }
  }
}

// Викликаємо основну функцію для отримання даних
fetchData();




// const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
// const params = new URLSearchParams(window.location.search);
// const id = params.get("id")
// const locale = currentlang === "english" ? "en" : "nl";
// fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios/${id}?locale=${locale}&populate=*`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
// .then(response => response.json())
// .then(result =>{
//     const attributes = result.data.attributes
//     const name = attributes.name
//     const projectNameElement = document.getElementById("project-name")
//     projectNameElement.textContent = name
//     const mainImage = attributes.main_image.data.attributes.url
//     const projectMainImageElement = document.getElementById("project-main-image")
//     projectMainImageElement.src = mainImage
//     //xx
//     const description = attributes.description || "Опис проекту недоступний.";
// const projectDescriptionElement = document.getElementById("project-description");

// // Розбиваємо текст на блоки по символах нового рядка
// const formattedDescription = description
//   .split("\n\n") // Розбиваємо текст на блоки за подвійним перенесенням рядків (абзац)
//   .map(block => {
//     const [title, ...content] = block.split("\n"); // Розділяємо заголовок і текст
//     const titleCleaned = title.startsWith("**") && title.endsWith("**")
//       ? title.slice(2, -2).trim() // Видаляємо `**` для заголовка
//       : title.trim(); // Якщо це не заголовок
//     const contentHtml = content.map(line => `<p class="text-portfolio">${line.trim()}</p>`).join("");

//     return `
//       <div class="div-block">
//         <div class="title-portfolio">${titleCleaned}</div>
//         ${contentHtml}
//       </div>
//     `;
//   })
//   .join(""); // Збираємо всі блоки в один HTML

// // Додаємо відформатований текст у div
// projectDescriptionElement.innerHTML = formattedDescription;
// //xx
//     console.log(description);
//    const additionalImages = attributes.additional_images.data
//    const projectAdditionalImagesElement = document.getElementById("project-additional-images")
//    for (const image of additionalImages) {
//     const attributes = image.attributes
//     const url = attributes.url;
//      projectAdditionalImagesElement.insertAdjacentHTML("beforeend", `<li class="picture-menu-block"><img src="${url}"></li>`)
//    }
// })
// .catch(error => console.log(error.message))   



//const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
// const params = new URLSearchParams(window.location.search);
// const id = params.get("id")
// const locale = currentlang === "english" ? "en" : "nl";
// fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios/${id}?locale=${locale}&populate=*`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
// .then(response => response.json())
// .then(result =>{
//     const attributes = result.data.attributes
//     const name = attributes.name
//     const projectNameElement = document.getElementById("project-name")
//     projectNameElement.textContent = name
//     const mainImage = attributes.main_image.data.attributes.url
//     const projectMainImageElement = document.getElementById("project-main-image")
//     projectMainImageElement.src = mainImage
//     const description = attributes.description
//     const projectDescriptionElement = document.getElementById("project-description")
//     projectDescriptionElement.innerHTML = description;
//     console.log(description);
//    const additionalImages = attributes.additional_images.data
//    const projectAdditionalImagesElement = document.getElementById("project-additional-images")
//    for (const image of additionalImages) {
//     const attributes = image.attributes
//     const url = attributes.url;
//      projectAdditionalImagesElement.insertAdjacentHTML("beforeend", `<li class="picture-menu-block"><img src="${url}"></li>`)
//    }
// })
// .catch(error => console.log(error.message)) 