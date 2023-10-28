(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-review-open]"),
      closeModalBtn: document.querySelector("[data-review-close]"),
      modal: document.querySelector("[data-review]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hided");
    }
  })();