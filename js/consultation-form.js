emailjs.init({
    publicKey: "FZFYVyZmOKImGijaI",
  });

const consultationForm = document.querySelector("#consultation-form");
consultationForm.addEventListener("submit", function(e){
    e.preventDefault()
    const serviceId = "service_e883bz7";
    const templateId = "template_mhvau7b";
    emailjs.sendForm(serviceId, templateId, this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
});