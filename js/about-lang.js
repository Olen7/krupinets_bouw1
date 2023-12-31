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
            textfootherphoneabout = data[attr]['foother-phone-about'];
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
        "foother-phone-about":"Phone:+31621968479",

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
        "foother-phone-about":"Telefoon:+31621968479",
    }
};