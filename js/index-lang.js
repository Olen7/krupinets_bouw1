const langSec = document.querySelector('.name_lang_item .name-lang-mob');
const buttons = document.querySelectorAll('button');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.button-consultation');
const textAboutUs = document.querySelector('.about-us'); 
const textAboutUsP = document.querySelector('.about-us-p');
const aboutUsButton = document.querySelector('.about-us-button');
const headerHome = document.querySelector('.header-home');
const headerAboutUs = document.querySelector('.header-about-us');
const headerPortfolio = document.querySelector('.header-portfolio');
const headerReviews = document.querySelector('.header-reviews');
const headerContacts = document.querySelector('.header-contacts');
const textServices = document.querySelector('.services');
const textServicesF = document.querySelector('.services-f');
const textServicesFo = document.querySelector('.services-fo');
const textServicesFot = document.querySelector('.services-fot');
const textServicesFoto = document.querySelector('.services-foto');
const textBenefits = document.querySelector('.benefits');
const textBenefitsOne = document.querySelector('.benefits-one');
const textBenefitsTwo = document.querySelector('.benefits-two');
const textBenefitsThre = document.querySelector('.benefits-thre');
const textBenefitsFour = document.querySelector('.benefits-four');
const textPortfolioBadkamers = document.querySelector('.portfolio-badkamers');
const textPortfolioGeneral = document.querySelector('.portfolio-general');
const textPortfolioDormer = document.querySelector('.portfolio-dormer');
const textFootherHome = document.querySelector('.foother-home');
const textFootherAboutUs = document.querySelector('.foother-about-us');
const textFootherPortfolio = document.querySelector('.foother-portfolio');
const textFootherReviews = document.querySelector('.foother-reviews');
const textFootherContacts = document.querySelector('.foother-contacts');
const textFootherContactSection = document.querySelector('.foother-contact-section');
const textFootherPhone = document.querySelector('.foother-phone');
const textFootherConsultation = document.querySelector('.foother-consultation-feetback');
const textFootherNameForm = document.querySelector('.foother-name-form');
const textFootherPhoneForm = document.querySelector('.foother-phone-form');
const textFootherMailForm = document.querySelector('.foother-mail-form');
const textFootherLibelName = document.querySelector('.foother-libel-name');
const textFootherLibelPhone = document.querySelector('.foother-libel-phone');
const textfootherlibelmail = document.querySelector('.foother-libel-mail');
const textfootherformbuttom = document.querySelector('.foother-form-buttom');
const textfoothercopyrightall = document.querySelector('.foother-copyright-all');
const textfoothercopyrightallunsplash = document.querySelector('.foother-copyright-all-unsplash');
// const textfoothernl = document.querySelector('.foother-nl');
const textMobHome = document.querySelector('.mob-home');
const textMobAboutUs = document.querySelector('.mob-about-us');
const textMobPortfolio = document.querySelector('.mob-portfolio');
const textMobReviews = document.querySelector('.mob-reviews');
const textMobContacts = document.querySelector('.mob-contacts');
const textfootherconsultation = document.querySelector('.button-consultation');

let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const attr = this.getAttribute('language');

        if (activeButton !== this) {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            textTitle.textContent = data[attr].title;
            textDesc.textContent = data[attr]['button-consultation'];
            textAboutUs.textContent = data[attr]['about-us'];
            textAboutUsP.textContent = data[attr]['about-us-p'];
            aboutUsButton.textContent = data[attr]['about-us-button'];
            headerHome.textContent = data[attr]['header-home'];
            headerAboutUs.textContent = data[attr]['header-about-us'];
            headerPortfolio.textContent = data[attr]['header-portfolio'];
            headerReviews.textContent = data[attr]['header-reviews'];
            headerContacts.textContent = data[attr]['header-contacts'];

            // Оновлення для нових ключів
            textServices.textContent = data[attr]['services'];
            textServicesF.textContent = data[attr]['services-f'];
            textServicesFo.textContent = data[attr]['services-fo'];
            textServicesFot.textContent = data[attr]['services-fot'];
            textServicesFoto.textContent = data[attr]['services-foto'];
            textBenefits.textContent = data[attr]['benefits'];
            textBenefitsOne.textContent = data[attr]['benefits-one'];
            textBenefitsTwo.textContent = data[attr]['benefits-two'];
            textBenefitsThre.textContent = data[attr]['benefits-thre'];
            textBenefitsFour.textContent = data[attr]['benefits-four'];
            textPortfolioBadkamers.textContent = data[attr]['portfolio-badkamers'];
            textPortfolioGeneral.textContent = data[attr]['portfolio-general'];
            textPortfolioDormer.textContent = data[attr]['portfolio-dormer'];
            textFootherHome.textContent = data[attr]['foother-home'];
            textFootherAboutUs.textContent = data[attr]['foother-about-us'];
            textFootherPortfolio.textContent = data[attr]['foother-portfolio'];
            textFootherReviews.textContent = data[attr]['foother-reviews'];
            textFootherContacts.textContent = data[attr]['foother-contacts'];
            textFootherContactSection.textContent = data[attr]['foother-contact-section'];
            textFootherPhone.textContent = data[attr]['foother-phone'];

            textFootherConsultation.textContent = data[attr]['foother-consultation-feetback'];
            textFootherNameForm.textContent = data[attr]['foother-name-form'];
            textFootherPhoneForm.textContent = data[attr]['foother-phone-form'];
            textFootherMailForm.textContent = data[attr]['foother-mail-form'];
            textFootherLibelName.placeholder = data[attr]['foother-libel-name'];
            textFootherLibelPhone.placeholder = data[attr]['foother-libel-phone'];
            textfootherlibelmail.placeholder = data[attr]['foother-libel-mail'];
            textfootherformbuttom.textContent = data[attr]['foother-form-buttom'];
            textfoothercopyrightall.textContent = data[attr]['foother-copyright-all'];
            textfoothercopyrightallunsplash.textContent = data[attr]['foother-copyright-all-unsplash'];
            // textfoothernl.textContent = data[attr]['foother-nl'];

            // Оновлення для ключів мобільної версії
            textMobHome.textContent = data[attr]['mob-home'];
            textMobAboutUs.textContent = data[attr]['mob-about-us'];
            textMobPortfolio.textContent = data[attr]['mob-portfolio'];
            textMobReviews.textContent = data[attr]['mob-reviews'];
            textMobContacts.textContent = data[attr]['mob-contacts'];
            textfootherconsultation.textContent = data[attr]['foother-consultation'];

            activeButton = this;
        }
    });
});

const data = {
    "english": {
        "header-home":"Home",
        "header-about-us":"About Us",
        "header-portfolio":"Portfolio",
        "header-reviews":"Reviews",
        "header-contacts":"Contacts",
        "title": "realize your dreams with us",
        "button-consultation": "Consultation",
        "about-us": "About Us",
        "about-us-p": "Welcome to Krupinec Bouw, your premier destination for superior construction repairs. We are a passionate and dedicated team specializing in the art of restoration, enhancement, and complete transformation of spaces!",
        "about-us-button": "Read more",
        "services": "Services",
        "services-f": "Bathroom Renovation",
        "services-fo": "General Renovation",
        "services-fot": "Dormer Constructions",
        "services-foto": "Painting and Plastering",
        "benefits": "Benefits",
        "benefits-one": "Performance Quality",
        "benefits-two": "Experience",
        "benefits-thre": "Innovations",
        "benefits-four": "Customer Orientation",
        "portfolio-badkamers": "bathrooms",
        "portfolio-general": "general",
        "portfolio-dormer": "dormer",
        "foother-home":"Home",
        "foother-about-us":"About Us",
        "foother-portfolio":"Portfolio",
        "foother-reviews":"Reviews",
        "foother-contacts":"Contacts",
        "foother-contact-section":"Contacts",
        "foother-phone":"Phone: +31621968479",
        "foother-address":"Address: Eliza van Calcarstraat 27,",
        "foother-consultation-feetback": "Consultation",
        "foother-name-form": "Name*",
        "foother-phone-form": "Phone*",
        "foother-mail-form": "E-mail*",
        "foother-libel-name": "Enter your name",
        "foother-libel-phone": "Enter your phone",
        "foother-libel-mail": "Enter your mail",
        "foother-form-buttom": "Consultation",
        "foother-copyright-all": "2023. All rights reserved",
        "foother-copyright-all-unsplash": "The site contains images from a free resource Unsplash",
        // "foother-nl": "Address: Eliza van Calcarstraat 27, Amsterdam, Netherlands",
        "mob-home":"Home",
        "mob-about-us":"About Us",
        "mob-portfolio":"Portfolio",
        "mob-reviews":"Reviews",
        "mob-contacts":"Contacts",
        "foother-consultation": "Consultation",


    },
    "netherlands": {
        "header-home":"Thuis",
        "header-about-us":"Over ons",
        "header-portfolio":"Portefeuille",
        "header-reviews":"Beoordelingen",
        "header-contacts":"Contacten",
        "title": "realiseer je dromen met ons.",
        "button-consultation": "Consultatie",
        "about-us": "Over ons",
        "about-us-p": "Welkom bij Krupinec Bouw, uw toonaangevende bestemming voor hoogwaardige bouwreparaties. Wij zijn een gepassioneerd en toegewijd team gespecialiseerd in de kunst van restauratie, verbetering en complete transformatie van ruimtes!",
        "about-us-button": "Lees meer",
        "services": "Diensten",
        "services-f": "Badkamerrenovatie",
        "services-fo": "Algemene renovatie",
        "services-fot": "Dakkapelconstructies",
        "services-foto": "Schilderen en Stukadoren",
        "benefits": "Voordelen",
        "benefits-one": "Kwaliteit van Prestaties",
        "benefits-two": "Ervaring",
        "benefits-thre": "Innovaties",
        "benefits-four": "Klantgerichtheid",
        "portfolio-badkamers": "badkamers",
        "portfolio-general": "algemeen",
        "portfolio-dormer": "dakkapel",
        "foother-home":"Thuis",
        "foother-about-us":"Over ons",
        "foother-portfolio":"Portefeuille",
        "foother-reviews":"Beoordelingen",
        "foother-contacts":"Contacten",
        "foother-contact-section":"Contacten",
        "foother-phone":"Telefoon: +31621968479",
        "foother-address":"Adres: Eliza van Calcarstraat 27,",
        "foother-consultation-feetback": "Consultatie",
        "foother-name-form": "Naam*",
        "foother-phone-form": "Telefoon*",
        "foother-mail-form": "E-mail*",
        "foother-libel-name": "Voer uw naam in",
        "foother-libel-phone": "Voer uw telefoonnummer in",
        "foother-libel-mail": "Voer uw e-mailadres in",
        "foother-form-buttom": "Consultatie",
        "foother-copyright-all": "2023. Alle rechten voorbehouden",
        "foother-copyright-all-unsplash": "De website bevat afbeeldingen van een gratis bron, Unsplash.",
        // "foother-nl": "Adres: Eliza van Calcarstraat 27, Amsterdam, Netherlands",
        "mob-home":"Thuis",
        "mob-about-us":"Over ons",
        "mob-portfolio":"Portefeuille",
        "mob-reviews":"Beoordelingen",
        "mob-contacts":"Contacten",
        "foother-consultation": "Consultatie",
    }   
};

// const textmobhome = document.querySelector('.mob-home');
// const textmobaboutusl = document.querySelector('.mob-about-us');
// const textmobportfolio = document.querySelector('.mob-portfolio');
// const textmobreviews = document.querySelector('.mob-reviews');
// const textmobcontacts = document.querySelector('.mob-contacts');
// textmobhome.textContent = data[attr]['mob-home'];
// textmobaboutus.textContent = data[attr]['mob-portfolio'];
// textmobportfolio.textContent = data[attr]['mob-portfolio'];
// textmobreviews.textContent = data[attr]['mob-reviews'];
// textmobcontacts.textContent = data[attr]['mob-contacts'];

// const langSec = document.querySelector('.name_lang_item');
// const buttons = document.querySelectorAll('button');
// const textTitle = document.querySelector('.title');
// const textDesc = document.querySelector('.button-consultation');
// const textAboutUs = document.querySelector('.about-us'); 
// const textAboutUsP = document.querySelector('.about-us-p');
// const aboutUsButton = document.querySelector('.about-us-button');
// const headerHome = document.querySelector('.header-home');
// const headerAboutUs = document.querySelector('.header-about-us');
// const headerPortfolio = document.querySelector('.header-portfolio');
// const headerReviews = document.querySelector('.header-reviews');
// const headerContacts = document.querySelector('.header-contacts');

// let activeButton = null;

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const attr = this.getAttribute('language');

//         if (activeButton !== this) {
//             buttons.forEach(btn => btn.classList.remove('active'));
//             this.classList.add('active');
//             textTitle.textContent = data[attr].title;
//             textDesc.textContent = data[attr]['button-consultation'];
//             textAboutUs.textContent = data[attr]['about-us'];
//             textAboutUsP.textContent = data[attr]['about-us-p'];
//             aboutUsButton.textContent = data[attr]['about-us-button'];
//             headerHome.textContent = data[attr]['header-home']; // Оновлення тексту заголовка "Home"
//             headerAboutUs.textContent = data[attr]['header-about-us']; // Оновлення тексту заголовка "About Us"
//             headerPortfolio.textContent = data[attr]['header-portfolio']; // Оновлення тексту заголовка "Portfolio"
//             headerReviews.textContent = data[attr]['header-reviews']; // Оновлення тексту заголовка "Reviews"
//             headerContacts.textContent = data[attr]['header-contacts']; // Оновлення тексту заголовка "Contacts"
//             activeButton = this;
//         }
//     });
// });

// const data = {
//     "english": {
//         "header-home":"Home",
//         "header-about-us":"About Us",
//         "header-portfolio":"Portfolio",
//         "header-reviews":"Reviews",
//         "header-contacts":"Contacts",
//         "title": "realize your dreams with us",
//         "button-consultation": "Consultation",
//         "about-us": "About Us",
//         "about-us-p": "Welcome to Krupinec Bouw, your premier destination for superior construction repairs. We are a passionate and dedicated team specializing in the art of restoration, enhancement, and complete transformation of spaces!",
//         "about-us-button": "Read more"
//     },
//     "netherlands": {
//         "header-home":"Thuis",
//         "header-about-us":"Over ons",
//         "header-portfolio":"Portefeuille",
//         "header-reviews":"Beoordelingen",
//         "header-contacts":"Contacten",
//         "title": "realiseer je dromen met ons.",
//         "button-consultation": "Consultatie",
//         "about-us": "Over ons",
//         "about-us-p": "Welkom bij Krupinec Bouw, uw toonaangevende bestemming voor hoogwaardige bouwreparaties. Wij zijn een gepassioneerd en toegewijd team gespecialiseerd in de kunst van restauratie, verbetering en complete transformatie van ruimtes!",
//         "about-us-button": "Lees meer"
//     }
// };




// const langSec = document.querySelector('.name_lang_item');
// const buttons = document.querySelectorAll('button');
// const textTitle = document.querySelector('.title');
// const textDesc = document.querySelector('.button-consultation');
// const textAboutUs = document.querySelector('.about-us'); 
// const textAboutUsP = document.querySelector('.about-us-p');
// const aboutUsButton = document.querySelector('.about-us-button');
// const headerHome = document.querySelector('.header-home');
// const headerAboutUs = document.querySelector('.header-about-us');
// const headerPortfolio = document.querySelector('.header-portfolio');
// const headerReviews = document.querySelector('.header-reviews');
// const headerContacts = document.querySelector('.header-contacts');

// let activeButton = null;

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const attr = this.getAttribute('language');

//         if (activeButton !== this) {
//             buttons.forEach(btn => btn.classList.remove('active'));
//             this.classList.add('active');
//             textTitle.textContent = data[attr].title;
//             textDesc.textContent = data[attr]['button-consultation'];
//             textAboutUs.textContent = data[attr]['about-us'];
//             textAboutUsP.textContent = data[attr]['about-us-p'];
//             aboutUsButton.textContent = data[attr]['about-us-button'];
//             headerHome.textContent = data[attr]['header-home'];
//             headerAboutUs.textContent = data[attr]['header-about-us'];
//             headerPortfolio.textContent = data[attr]['header-portfolio'];
//             headerReviews.textContent = data[attr]['header-reviews'];
//             headerContacts.textContent = data[attr]['header-contacts'];
//             activeButton = this;
//         }
//     });
// });

// const data = {
//     "english": {
//         "header-home":"Home",
//         "header-about-us":"About Us",
//         "header-portfolio":"Portfolio",
//         "header-reviews":"Reviews",
//         "header-contacts":"Contacts",
//         "title": "realize your dreams with us",
//         "button-consultation": "Consultation",
//         "about-us": "About Us",
//         "about-us-p": "Welcome to Krupinec Bouw, your premier destination for superior construction repairs. We are a passionate and dedicated team specializing in the art of restoration, enhancement, and complete transformation of spaces!",
//         "about-us-button": "Read more",
//         "services": "Services",
//         "services-f": "Bathroom Renovation",
//         "services-fo": "General Renovation",
//         "services-fot": "Dormer Constructions",
//         "services-foto": "Painting and Plastering",
//         "benefits": "Benefits",
//         "benefits-one": "Performance Quality",
//         "benefits-two": "Experience",
//         "benefits-thre": "Innovations",
//         "benefits-four": "Customer Orientation"
//     },
//     "netherlands": {
//         "header-home":"Thuis",
//         "header-about-us":"Over ons",
//         "header-portfolio":"Portefeuille",
//         "header-reviews":"Beoordelingen",
//         "header-contacts":"Contacten",
//         "title": "realiseer je dromen met ons.",
//         "button-consultation": "Consultatie",
//         "about-us": "Over ons",
//         "about-us-p": "Welkom bij Krupinec Bouw, uw toonaangevende bestemming voor hoogwaardige bouwreparaties. Wij zijn een gepassioneerd en toegewijd team gespecialiseerd in de kunst van restauratie, verbetering en complete transformatie van ruimtes!",
//         "about-us-button": "Lees meer",
//         "services": "Diensten",
//         "services-f": "Badkamerrenovatie",
//         "services-fo": "Algemene renovatie",
//         "services-fot": "Dakkapelconstructies",
//         "services-foto": "Schilderen en Stukadoren",
//         "benefits": "Voordelen",
//         "benefits-one": "Kwaliteit van Prestaties",
//         "benefits-two": "Ervaring",
//         "benefits-thre": "Innovaties",
//         "benefits-four": "Klantgerichtheid"
//     }
// };







// const langSec = document.querySelector('.name_lang_item');
// const buttons = document.querySelectorAll('button');
// const textTitle = document.querySelector('.title');
// const textDesc = document.querySelector('.button-consultation');
// const aboutUsButton = document.querySelector('.aboutus');

// let activeButton = null;

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const attr = this.getAttribute('language');

//         if (activeButton !== this) {
//             buttons.forEach(btn => btn.classList.remove('active'));
//             this.classList.add('active');
//             textTitle.textContent = data[attr].title;
//             textDesc.textContent = data[attr]['button-consultation'];
//             activeButton = this;
//         }
//     });
// });

// const data = {
//     "english": {
//         "title": "realize your dreams with us",
//         "button-consultation": "Consultation",
//         "aboutus": "About Us"
//     },
//     "netherlands": {
//         "title": "realiseer je dromen met ons.",
//         "button-consultation": "Consultatie",
//         "aboutus": "Over ons"
//     }
// };