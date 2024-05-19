const bathroomsSection = document.getElementById("portfolio-bathrooms");
const generalSection = document.getElementById("portfolio-general");
const dormerSection = document.getElementById("portfolio-dormer");
const bathroomsItems = [];
const locale = currentlang === "english" ? "en" : "nl";
function renderFotoBlock (block, data){
  const deliter = data.length < 3 ? 2 : 1;
  if(device === "desktop"){
   block.style.height = `${674 / deliter}px`;
  }
  if(device === "tablet"){
   block.style.height = `${544 / deliter}px`;
  }
  if(device === "mobile"){
   block.style.height = `${324 / deliter}px`;
  }
if(data.length === 2){
   block.style.flexDirection = "row";
}
for (let i = 0; i < data.length; i += 1) {
  const item = data[i];
  const attributes = item.attributes;
  const name = attributes.name;
  const image = attributes.additional_images.data[0].attributes.formats.small.url;
  let className = "";
  if(data.length === 1){
    className = "block-one full-width"
  }
  if(data.length === 2){
    className = "block-one"
  }
  if(data.length === 3){
    className = i < 2 ? "block-one" : "block-two";
  }
  block.insertAdjacentHTML("beforeend", `<div class="${className}">
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
};
function renderItems(section, data){
  const fotoBlock = section.querySelector(".foto-block");
  const fotoBlockReverse = section.querySelector(".foto-block-reverse");
  const toggleBtn = section.querySelector("[data-toggle=collapse]");
  if (!data.length) {

    fotoBlock.classList.add("hidden");
    fotoBlockReverse.classList.add("hidden");
    toggleBtn.classList.add("hidden");
    return
  }
  if(data.length < 4 ){
    toggleBtn.classList.add("hidden");
  };
 const fotoBlockItems = data.slice(0, 3);
 renderFotoBlock(fotoBlock, fotoBlockItems);
 if(data.length > 3){
  const fotoBlockReverseItems = data.slice(3);
  renderFotoBlock(fotoBlockReverse, fotoBlockReverseItems);
 }
  
}
const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa"
fetch(`https://krupinets-bouw-admin.onrender.com/api/portfolios?locale=${locale}&populate=*`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(result => {
    const data = result.data;
    const bathroomsItems = data.filter(item => item.attributes.type === "bathrooms");
    const generalItems = data.filter(item => item.attributes.type === "general-renovation");
    const dormerItems = data.filter(item => item.attributes.type === "dormer-renovation");
    renderItems(bathroomsSection, bathroomsItems)
    renderItems(generalSection, generalItems)
    renderItems(dormerSection, dormerItems)
    
  })
.catch(error => console.log(error.message))

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






