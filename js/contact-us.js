const contactUsForm = document.querySelector("#contact-us-form");
contactUsForm.addEventListener("submit", function(e){
    e.preventDefault()
    const serviceId = "service_e883bz7";
    const templateId = "template_5gzb5kp";
    emailjs.sendForm(serviceId, templateId, this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
});