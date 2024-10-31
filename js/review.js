(() => {
  const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa";
  

  const locale = currentlang === "english" ? "en" : "nl";
  const refs = {
    openModalBtn: document.querySelector("[data-review-open]"),
    closeModalBtn: document.querySelector("[data-review-close]"),
    modal: document.querySelector("[data-review]"),
    reviewList: document.querySelector("#review-list"),
    reviewForm: document.querySelector("#review-form"),
    loadMoreButton: document.getElementById("button-view"), // Посилання на кнопку
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

  function renderReview({grade, text, username, updatedAt}) {
    return `<li class="review-list-item comment">
    <div class="group-wrapper">
    <div class="customer">${username.slice(0,1)}</div>
    <div class="p-group-wrapper">
    <p class="date">${updatedAt.slice(0,10)}</p>
    <p class="name">${username}</p>
    <p class="stars">${Array(5).fill(0).map((_,index) => `<span class="review-star ${index < grade ? "fill" : ""}" > </span>`).join('')}</p>
    </div>
    </div>
    <p class="text-review">${text}</p>
    </li>`;
  }

  async function fetchReviewData() {
    try {
      const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews?filters[verified][$eq]=true", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = await response.json();
      const data = result.data;
      const reviewElements = data.map(({attributes}) => {
        return renderReview(attributes);
      }).join('');
      refs.reviewList.insertAdjacentHTML("beforeend", reviewElements);
      init();
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchReviewData();

  refs.reviewForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = this.elements.name.value;
    const text = this.elements.text.value;
    const grade = this.elements['simple-rating'].value;
    const data = { data: { username, text, grade } };

    try {
      const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      const attributes = result.data.attributes;
      refs.reviewList.insertAdjacentHTML("afterbegin", renderReview(attributes));
      toggleModal();
    } catch (error) {
      console.error(error.message);
    }
  });

  function init() {
    let commentsToShow = 10;
    const comments = document.querySelectorAll('.comment');
    
    if (!refs.loadMoreButton) {
      console.error("Load more button not found in the DOM.");
      return;
    }

    function updateCommentsDisplay() {
      comments.forEach((comment, index) => {
        if (index < commentsToShow) {
          comment.style.display = 'list-item';
        } else {
          comment.style.display = 'none';
        }
      });
    }

    function toggleComments() {
      if (commentsToShow >= comments.length) {
        commentsToShow = 10;
        refs.loadMoreButton.textContent = getLocaleText("loadMore");
      } else {
        commentsToShow += 10;
        if (commentsToShow >= comments.length) {
          refs.loadMoreButton.textContent = getLocaleText("seeLess");
        } else {
          refs.loadMoreButton.textContent = getLocaleText("loadMore");
        }
      }
      updateCommentsDisplay();
    }

    refs.loadMoreButton.addEventListener('click', toggleComments);

    updateCommentsDisplay();
  }

  function getLocaleText(key) {
    const texts = {
      en: {
        loadMore: "Load more EN",
        seeLess: "See less EN",
        
      },
      nl: {
        loadMore: "Meer loden NL",
        seeLess: "Minder zien NL",
       
      }
    };
    return texts[locale][key];
  }

  function changeLanguage(lang) {
    currentLang = lang;
    updateButtonText();
  }

  function updateButtonText() {
    refs.loadMoreButton.textContent = getLocaleText("loadMore");
  }

  const toggleBtn = document.querySelectorAll("[data-toggle=collapse]");
  toggleBtn.forEach(btn => btn.addEventListener("click", function(event){
    const element = document.querySelector(event.target.dataset.target);
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'flex';
      event.target.textContent = getLocaleText("seeLess");
    } else {
      element.style.display = 'none';
      event.target.textContent = getLocaleText("loadMore");
    }
  }));

  // Для тестування зміни мови викличте changeLanguage з потрібним значенням, наприклад:
  // changeLanguage('dutch'); // Викличте цю функцію, коли користувач змінює мову
})();



// Основа


// const token = "0a13a8cfa8298be921810716f96cc6f35e35dd00606b292746c1ecf038f34e7ada48f241a439786e1b5edd268be17d01d0ba9ccdaddfbddc7fae7840fc1a5150eda4b2d8cd453ef1869d461cf77e4bcb9ce86e6739413a4296d75ce9f0c9e97ba840b52c480442d3a29e537b1e7dcfede3b5182c7c1d14a474d3a3e7b285b4aa";
// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-review-open]"),
//       closeModalBtn: document.querySelector("[data-review-close]"),
//       modal: document.querySelector("[data-review]"),
//       reviewList: document.querySelector("#review-list"),
//       reviewForm: document.querySelector("#review-form"),
      
//     };
//     const element = document.getElementById("myElement");
// element.addEventListener("click", function(event){
//     const eventTarget = event.target;  
//     const eventCurrentTarget = event.currentTarget; 
//     if (eventTarget === eventCurrentTarget) {
//       refs.modal.classList.toggle("is-hided");
//     }
// });
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
     
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hided");
      
//     }
//     function renderReview({grade, text, username, updatedAt}){
//       return `<li class="review-list-item comment">
//       <div class="group-wrapper">
//       <div class="customer">${username.slice(0,1)}</div>
//       <div class="p-group-wrapper">
//       <p class="date">${updatedAt.slice(0,10)}</p>
//       <p class="name">${username}</p>
//       <p class="stars">${Array(5).fill(0).map((_,index) => `<span class="review-star ${index < grade ? "fill" : ""}" > </span>`).join('')}</p>
//       </div>
//       </div>
//       <p class="text-review">${text}</p>
//       </li>`
//     }
//     async function fetchReviewData (){
//         try{
//           const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews?filters[verified][$eq]=true", {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           const result = await response.json();
//           const data = result.data;
//           const reviewElements = data.map(({
//             attributes
//           })=>{
//             return renderReview(attributes);
//           }).join('');
//           refs.reviewList.insertAdjacentHTML("beforeend", reviewElements)
//         }
//         catch(error){

//         }
//     }
    
//     fetchReviewData();
//     refs.reviewForm.addEventListener("submit",async function(e){
//       e.preventDefault();
//       const username = this.elements.name.value;
//       const text = this.elements.text.value;
//       const grade = this.elements['simple-rating'].value;
//       const data = {
//         data:{username,text,grade}
//       };
//       try{
//         const response = await fetch("https://krupinets-bouw-admin.onrender.com/api/reviews", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(data)
//       })
//       const result = await response.json();
//       const attributes = result.data.attributes;
//       refs.reviewList.insertAdjacentHTML("afterbegin", renderReview(attributes))
//       toggleModal();
// }
//       catch(error){console.log(error.message)}

//     })
//   })();
