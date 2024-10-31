const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
const params = new URLSearchParams(window.location.search);
const id = params.get("id")
const locale = currentlang === "english" ? "en" : "nl";
fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios/${id}?locale=${locale}&populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
.then(response => response.json())
.then(result =>{
    const attributes = result.data.attributes
    const name = attributes.name
    const projectNameElement = document.getElementById("project-name")
    projectNameElement.textContent = name
    const mainImage = attributes.main_image.data.attributes.url
    const projectMainImageElement = document.getElementById("project-main-image")
    projectMainImageElement.src = mainImage
    const description = attributes.description
    const projectDescriptionElement = document.getElementById("project-description")
    projectDescriptionElement.innerHTML = description;
    console.log(description);
   const additionalImages = attributes.additional_images.data
   const projectAdditionalImagesElement = document.getElementById("project-additional-images")
   for (const image of additionalImages) {
    const attributes = image.attributes
    const url = attributes.url;
     projectAdditionalImagesElement.insertAdjacentHTML("beforeend", `<li class="picture-menu-block"><img src="${url}"></li>`)
    console.log(attributes);
   }


    console.log(additionalImages);
    console.log(description);
    console.log(attributes);
    
})
.catch(error => console.log(error.message))   
