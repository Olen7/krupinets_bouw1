

const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa";
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-review-open]"),
      closeModalBtn: document.querySelector("[data-review-close]"),
      modal: document.querySelector("[data-review]"),
      reviewList: document.querySelector("#review-list"),
      reviewForm: document.querySelector("#review-form"),
      
    };
    const element = document.getElementById("myElement");
element.addEventListener("click", function(event){
    const eventTarget = event.target;  
    const eventCurrentTarget = event.currentTarget; 
    if (eventTarget === eventCurrentTarget) {
      refs.modal.classList.toggle("is-hided");
    }
});
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
     
    function toggleModal() {
      refs.modal.classList.toggle("is-hided");
      
    }
    function renderReview({grade, text, username, updatedAt}){
      return `<li class="review-list-item">
      <div class="group-wrapper">
      <div class="customer">J</div>
      <div class="p-group-wrapper">
      <p class="date">${updatedAt.slice(0,10)}</p>
      <p class="name">${username}</p>
      <p class="stars">${Array(5).fill(0).map((_,index) => `<span class="review-star ${index < grade ? "fill" : ""}" > </span>`).join('')}</p>
      </div>
      </div>
      <p class="text-review">${text}</p>
      </li>`
    }
    async function fetchReviewData (){
        try{
          const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews?filters[verified][$eq]=true", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const result = await response.json();
          const data = result.data;
          const reviewElements = data.map(({
            attributes
          })=>{
            return renderReview(attributes);
          }).join('');
          refs.reviewList.insertAdjacentHTML("beforeend", reviewElements)
        }
        catch(error){

        }
    }
    
    fetchReviewData();
    refs.reviewForm.addEventListener("submit",async function(e){
      e.preventDefault();
      const username = this.elements.name.value;
      const text = this.elements.text.value;
      const grade = this.elements['simple-rating'].value;
      const data = {
        data:{username,text,grade}
      };
      try{
        const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      const attributes = result.data.attributes;
      refs.reviewList.insertAdjacentHTML("afterbegin", renderReview(attributes))
      toggleModal();
}
      catch(error){console.log(error.message)}

    })
  })();

//   (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-review-open]"),
//       closeModalBtn: document.querySelector("[data-review-close]"),
//       modal: document.querySelector("[data-review]"),
//       reviewList: document.querySelector("#review-list"),
//       reviewForm: document.querySelector("#review-form"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
     
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hided");
      
//     }
    
//     async function fetchReviewData (){
//         try{
//           const response = await fetch("https://65ca59a33b05d29307e0346b.mockapi.io/reviews");
//           const result = await response.json();
//           const reviewElemnts = result.map(({
//             stars, name, text
//           })=>{
//             return `<li class="review-list-item">
//             <div class="group-wrapper">
//             <div class="customer">J</div>
//             <div class="p-group-wrapper">
//             <p class="date">25.02.2024</p>
//             <p class="name">${name}</p>
//             <p class="stars">${stars}</p>
//             </div>
//             </div>
//             <p class="text-review">${text}</p>
//             </li>`;
//           }).join('');
//           refs.reviewList.insertAdjacentHTML("beforeend", reviewElemnts)
//         }
//         catch(error){

//         }
//     }
//     fetchReviewData();
//     refs.reviewForm.addEventListener("submit",async function(e){
//       e.preventDefault();
//       const name = this.elements.name.value;
//       const text = this.elements.text.value;
//       const stars = this.elements['simple-rating'].value;
//       const data = {name,text,stars};
//       try{
//         const response = await fetch("https://65ca59a33b05d29307e0346b.mockapi.io/reviews", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(data)
//       })
//       const result = await response.json();
//       refs.reviewList.insertAdjacentHTML("afterbegin", `<li class="review-list-item">
//       <p>${stars}</p>
//       <p>${name}</p>
//       <p>${text}</p>
//       </li>`)
//       toggleModal();
// }
//       catch(error){console.log(error.message)}

//     })
//   })();