const bathroomsSection = document.getElementById("portfolio-bathrooms");
const generalSection = document.getElementById("portfolio-general");
const dormerSection = document.getElementById("portfolio-dormer");
const bathroomsItems = [];
const locale = currentlang === "english" ? "en" : "nl";
function renderFotoBlock (block, data){
  const deliter = data.length < 3 ? 2 : 1;
  if(device === "desktop"){
    let deliter = 0;
    if(data.length === 3){
      block.style.height = '674px';
    }else if(data.length === 2){
      block.style.height = '430px';
    }else if(data.length === 1){
      block.style.height = '430px';
    }
    console.log(device);
  }
  if(device === "tablet"){
    let deliter = 0;
    if(data.length === 3){
      block.style.height = '545px';
    }else if(data.length === 2){
      block.style.height = '264px';
    }else if(data.length === 1){
      block.style.height = '352px';
    }
  }
  if(device === "mobile"){
    console.log("mobile");
    let deliter = 0;
    if(data.length === 3){
      block.style.height = '255px';
    }else if(data.length === 2){
      block.style.height = '30vw';
    }else if(data.length === 1){
      block.style.height = '55vw';
    }
    
  }
if(data.length === 2){
   block.style.flexDirection = "row";
}
for (let i = 0; i < data.length; i += 1) {
  const item = data[i];
  const attributes = item.attributes;
  const name = attributes.name;
  const image = attributes.main_image.data.attributes.formats.small.url;
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
  block.insertAdjacentHTML("beforeend", `<div style="background-image:url(${image})" class="${className}">
  <a href="./project-one.html?id=${item.id}" class="portfolio-item-link">
  <p class="block-text">${name}</p></a></div>`)
}

};
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






