const langSec = document.querySelector('.name_lang_item');
const buttons = document.querySelectorAll('button');
// const texthomeaboutnl = document.querySelector('.home-about-nl');
const texthomeusaboutnl = document.querySelector('.home-us-about-nl');
const textaboutusaboutnl = document.querySelector('.about-us-about-nl');
const textportfolioaboutnl = document.querySelector('.portfolio-about-nl');
const textreviewsaboutnl = document.querySelector('.reviews-about-nl');
const textcontactsaboutnl = document.querySelector('.contacts-about-nl');
const textmobhomeaboutnl = document.querySelector('.mob-home-about-nl');
const textmobaboutusaboutnl = document.querySelector('.mob-about-us-about-nl');
const textmobportfolioaboutnl = document.querySelector('.mob-portfolio-about-nl');
const textmobreviewsaboutnl = document.querySelector('.mob-reviews-about-nl');
const textmobcontactsaboutnl = document.querySelector('.mob-contacts-about-nl');
const textfootherhomeaboutnl = document.querySelector('.foother-home-about-nl');
const textfootheraboutusaboutnl = document.querySelector('.foother-about-us-about-nl');
const textfootherportfolioaboutnl = document.querySelector('.foother-portfolio-about-nl');
const textfootherreviewsaboutnl = document.querySelector('.foother-reviews-about-nl');
const textfoothercontactsaboutnl = document.querySelector('.foother-contacts-about-nl');
const textfoothercontactsabout = document.querySelector('.foother-contacts-about');
const textfootherphoneabout = document.querySelector('.foother-phone-about');
const textfootherformcontacts = document.querySelector('.foother-form-contacts');
const textfootherformnamecontacts = document.querySelector('.foother-form-name-contacts');
const textfootherformphonecontacts = document.querySelector('.foother-form-phone-contacts');
// const textfootherformcontactsbuttons = document.querySelector('.foother-form-contacts-buttons');
const textfootherformcontactsbuttons = document.querySelector('.foother-form-contacts-buttons');
const inputName = document.querySelector('.foother-libel-name-about');
const inputPhone = document.querySelector('.foother-libel-phone-about');
const inputMail = document.querySelector('.foother-libel-mail-about');
const textCopyright = document.querySelector('.foother-copyright-all-about');
const textUnsplash = document.querySelector('.foother-copyright-all-unsplash-about');
const aboutUsHeader = document.querySelector('.about-us-about-h');
const ourMissionHeader = document.querySelector('.our-mission-about-h');
const whyChooseUsHeader = document.querySelector('.why-choose-us-about-h');
const ourMissionText = document.querySelector('.our-mission-about-text');
const ourMissionTextP = document.querySelector('.our-mission-about-text-p');
const whyChooseUsText = document.querySelector('.why-choose-us-about-t');
const whyChooseUsTextE = document.querySelector('.why-choose-us-about-te');
const whyChooseUsTextEx = document.querySelector('.why-choose-us-about-tex');
const whyChooseUsTextExt = document.querySelector('.why-choose-us-about-text');
const aboutUsText = document.querySelector('.about-us-about-text');
const footherconsultationmob = document.querySelector('.foother-consultation-mob');

let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const attr = this.getAttribute('language');

        if (activeButton !== this) {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // texthomeaboutnl.textContent = data[attr]['home-about-nl'];
            texthomeusaboutnl.textContent = data[attr]['home-us-about-nl'];
            textaboutusaboutnl.textContent = data[attr]['about-us-about-nl'];
            textportfolioaboutnl.textContent = data[attr]['portfolio-about-nl'];
            textreviewsaboutnl.textContent = data[attr]['reviews-about-nl'];
            textcontactsaboutnl.textContent = data[attr]['contacts-about-nl'];
            textmobhomeaboutnl.textContent = data[attr]['mob-home-about-nl'];
            textmobaboutusaboutnl.textContent = data[attr]['mob-about-us-about-nl'];
            textmobportfolioaboutnl.textContent = data[attr]['mob-portfolio-about-nl'];
            textmobreviewsaboutnl.textContent = data[attr]['mob-reviews-about-nl'];
            textmobcontactsaboutnl.textContent = data[attr]['mob-contacts-about-nl'];
            textfootherhomeaboutnl.textContent = data[attr]['foother-home-about-nl'];
            textfootheraboutusaboutnl.textContent = data[attr]['foother-about-us-about-nl'];
            textfootherportfolioaboutnl.textContent = data[attr]['foother-portfolio-about-nl'];
            textfootherreviewsaboutnl.textContent = data[attr]['foother-reviews-about-nl'];
            textfoothercontactsaboutnl.textContent = data[attr]['foother-contacts-about-nl'];
            textfoothercontactsabout.textContent = data[attr]['foother-contacts-about'];
            textfootherphoneabout.textContent = data[attr]['foother-phone-about'];
            textfootherformcontacts.textContent = data[attr]['foother-form-contacts'];
            textfootherformnamecontacts.textContent = data[attr]['foother-form-name-contacts'];
            textfootherformphonecontacts.textContent = data[attr]['foother-form-phone-contacts'];
            // textfootherformcontactsbuttons.textContent = data[attr]['foother-form-contacts-buttons'];
            textfootherformcontactsbuttons.textContent = data[attr]['foother-form-contacts-buttons'];
            inputName.placeholder = data[attr]['foother-libel-name-about'];
            inputPhone.placeholder = data[attr]['foother-libel-phone-about'];
            inputMail.placeholder = data[attr]['foother-libel-mail-about'];
            textCopyright.textContent = data[attr]['foother-copyright-all-about'];
                textUnsplash.textContent = data[attr]['foother-copyright-all-unsplash-about'];
                aboutUsHeader.textContent = data[attr]['about-us-about-h'];
                ourMissionHeader.textContent = data[attr]['our-mission-about-h'];
                whyChooseUsHeader.textContent = data[attr]['why-choose-us-about-h'];
                ourMissionText.textContent = data[attr]['our-mission-about-text'];
                ourMissionTextP.textContent = data[attr]['our-mission-about-text-p'];
                whyChooseUsText.textContent = data[attr]['why-choose-us-about-t'];
                whyChooseUsTextE.textContent = data[attr]['why-choose-us-about-te'];
                whyChooseUsTextEx.textContent = data[attr]['why-choose-us-about-tex'];
                whyChooseUsTextExt.textContent = data[attr]['why-choose-us-about-text'];
                aboutUsText.textContent = data[attr]['about-us-about-text'];
                footherconsultationmob.textContent = data[attr]['foother-consultation-mob'];
            
            
            
                activeButton = this;
               
        }
    });
});

const data = {
    "english": {
        "home-us-about-nl": "Home",
        "about-us-about-nl": "About Us",
        "portfolio-about-nl": "Portfolio",
        "reviews-about-nl": "Reviews",
        "contacts-about-nl": "Contacts",
        "mob-home-about-nl": "Home",
        "mob-about-us-about-nl": "About Us",
        "mob-portfolio-about-nl": "Portfolio",
        "mob-reviews-about-nl": "Reviews",
        "mob-contacts-about-nl": "Contacts",
        "foother-home-about-nl": "Home",
        "foother-about-us-about-nl": "About Us",
        "foother-portfolio-about-nl": "Portfolio",
        "foother-reviews-about-nl": "Reviews",
        "foother-contacts-about-nl": "Contacts",
        "foother-contacts-about":"Contacts",
        "foother-phone-about":"Phone: +31621968479",
        "foother-form-contacts":"Consultation",
        "foother-form-name-contacts":"Name*",
        "foother-form-phone-contacts":"Phone*",
        "foother-form-contacts-buttons":"Consultation",
        "foother-libel-name-about": "Enter your name",
        "foother-libel-phone-about": "Enter your phone",
        "foother-libel-mail-about": "Enter your mail",
        "foother-copyright-all-about": "2023. All rights reserved",
        "foother-copyright-all-unsplash-about": "The site contains images from a free resource Unsplash",
        "about-us-about-h": "About Us",
        "our-mission-about-h": "Our Mission",
        "why-choose-us-about-h": "WHY CHOOSE US",
        "about-us-about-text": "Welcome to Krupinec Bouw, your premier destination for superior construction repairs. We are a passionate and dedicated team specializing in the art of restoration, enhancement, and complete transformation of spaces! ",
        "our-mission-about-text": "At Krupinec Bouw, we are on a mission to turn your construction dreams into a tangible reality. Our team of seasoned professionals is unwavering in their commitment to providing high-quality, sustainable, and cost-effective solutions for a diverse range of projects.",
        "our-mission-about-text-p": "Whether it's home renovations or commercial repairs, we are here to elevate your surroundings to new heights. Discover our array of services, and allow us to infuse fresh vitality into your projects, delivering enduring quality and enhancing the value of your construction endeavors. Your vision and our expertise results in excellence.",
        "why-choose-us-about-t": "Expertise: Our experienced professionals bring years of knowledge and skill to every project, guaranteeing you expert solutions that stand the test of time, ensuring your peace of mind.",
        "why-choose-us-about-te": "Quality: We prioritize quality in every aspect of our work. From materials selection to craftsmanship, we uphold the highest standards to ensure the longevity and functionality of our projects.",
        "why-choose-us-about-tex": "Innovation: We stay at the forefront of industry trends and technologies to bring you innovative solutions that meet the evolving needs of our clients",
        "why-choose-us-about-text": "Client-Centric Approach: Your satisfaction is our top priority. We work closely with you to understand your vision and goals, and we communicate transparently throughout the project's lifecycle.",
        "foother-consultation-mob": "Consultation",
    },
    "netherlands": {
        "home-us-about-nl": "Thuis",
        "about-us-about-nl": "Over ons",
        "portfolio-about-nl": "Portefeuille",
        "reviews-about-nl": "Beoordelingen",
        "contacts-about-nl": "Contacten",
        "mob-home-about-nl": "Thuis",
        "mob-about-us-about-nl": "Over ons",
        "mob-portfolio-about-nl": "Portefeuille",
        "mob-reviews-about-nl": "Beoordelingen",
        "mob-contacts-about-nl": "Contacten",
        "foother-home-about-nl": "Thuis",
        "foother-about-us-about-nl": "Over ons",
        "foother-portfolio-about-nl": "Portefeuille",
        "foother-reviews-about-nl": "Beoordelingen",
        "foother-contacts-about-nl": "Contacten",
        "foother-contacts-about":"Contacten",
        "foother-phone-about":"Telefoon: +31621968479",
        "foother-form-contacts":"Consultatie",
        "foother-form-name-contacts":"Naam*",
        "foother-form-phone-contacts":"Telefoon*",
        "foother-form-contacts-buttons":"Consultatie",
        "foother-libel-name-about": "Voer uw naam in",
        "foother-libel-phone-about": "Voer uw telefoonnummer in",
        "foother-libel-mail-about": "Voer uw e-mailadres in",
        "foother-copyright-all-about": "2023. Alle rechten voorbehouden",
        "foother-copyright-all-unsplash-about": "De website bevat afbeeldingen van een gratis bron, Unsplash.",
        "about-us-about-h": "Over ons",
        "our-mission-about-h": "Onze missie",
        "why-choose-us-about-h": "WAAROM ONS KIEZEN",
        "about-us-about-text": "Welkom bij Krupinec Bouw, uw eerste keuze voor hoogwaardige bouwreparaties. Wij zijn een gepassioneerd en toegewijd team gespecialiseerd in de kunst van restauratie, verbetering en volledige transformatie van ruimtes!",
        "our-mission-about-text": "Bij Krupinec Bouw hebben we als missie om uw bouwdromen om te zetten in tastbare realiteit. Ons team van ervaren professionals is vastberaden in hun toewijding om hoogwaardige, duurzame en kosteneffectieve oplossingen te bieden voor een breed scala aan projecten.",
        "our-mission-about-text-p": "Of het nu gaat om renovaties aan huis of commerciële reparaties, wij zijn er om uw omgeving naar nieuwe hoogten te tillen. Ontdek ons scala aan diensten en laat ons frisse vitaliteit in uw projecten brengen, waarbij we duurzame kwaliteit leveren en de waarde van uw bouwprojecten verhogen. Uw visie en onze expertise leiden tot excellentie.",
        "why-choose-us-about-t": "Deskundigheid: Onze ervaren professionals brengen jarenlange kennis en vaardigheid mee naar elk project, wat u deskundige oplossingen garandeert die de tand des tijds doorstaan, en zo uw gemoedsrust verzekeren.",
        "why-choose-us-about-te": "Kwaliteit: We hebben kwaliteit als prioriteit in elk aspect van ons werk. Van de selectie van materialen tot vakmanschap, wij handhaven de hoogste normen om de duurzaamheid en functionaliteit van onze projecten te waarborgen.",
        "why-choose-us-about-tex": "Innovatie: We blijven vooroplopen in trends en technologieën in de industrie om u innovatieve oplossingen te bieden die voldoen aan de steeds veranderende behoeften van onze klanten.",
        "why-choose-us-about-text": "Klantgerichte benadering: Uw tevredenheid is onze hoogste prioriteit. We werken nauw met u samen om uw visie en doelen te begrijpen, en we communiceren transparant gedurende de hele levenscyclus van het project.",
        "foother-consultation-mob": "Consultatie",
    }
};