(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-review-open]"),
      closeModalBtn: document.querySelector("[data-review-close]"),
      modal: document.querySelector("[data-review]"),
      reviewList: document.querySelector("#review-list"),
      reviewForm: document.querySelector("#review-form"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hided");
    }
    async function fetchReviewData (){
        try{
          const response = await fetch("https://65ca59a33b05d29307e0346b.mockapi.io/reviews");
          const result = await response.json();
          const reviewElemnts = result.map(({
            stars, name, text
          })=>{
            return `<li class="review-list-item">
            <div class="group-wrapper">
            <div class="customer">J</div>
            <div class="p-group-wrapper">
            <p class="date">25.02.2024</p>
            <p class="name">${name}</p>
            <p class="stars">${stars}</p>
            </div>
            </div>
            <p class="text-review">${text}</p>
            </li>`;
          }).join('');
          refs.reviewList.insertAdjacentHTML("beforeend", reviewElemnts)
        }
        catch(error){

        }
    }
    fetchReviewData();
    refs.reviewForm.addEventListener("submit",async function(e){
      e.preventDefault();
      const name = this.elements.name.value;
      const text = this.elements.text.value;
      const stars = this.elements['simple-rating'].value;
      const data = {name,text,stars};
      try{
        const response = await fetch("https://65ca59a33b05d29307e0346b.mockapi.io/reviews", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      refs.reviewList.insertAdjacentHTML("afterbegin", `<li class="review-list-item">
      <p>${stars}</p>
      <p>${name}</p>
      <p>${text}</p>
      </li>`)
      toggleModal();
}
      catch(error){console.log(error.message)}

    })
  })();