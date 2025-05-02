import { updatePhone } from"./updateUserInfo/changeUserInfo.js"
const data = {
    "english": {
        "home":"Home",
        "about-us":"About Us",
        "portfolio":"Portfolio",
        "reviews":"Reviews",
        "contacts":"Contacts",
        "title": "realize your dreams with us",
        "button-consultation": "Consultation",
        
        "about-us-welcome": "Welcome to Krupinec Bouw, your premier destination for superior construction repairs. We are a passionate and dedicated team specializing in the art of restoration, enhancement, and complete transformation of spaces!",
        "read-more-button": "Read more",
        "services": "Services",
        "services-bathroom": "Bathroom Renovation",
        "services-algemene": "General Renovation",
        "services-dormer": "Dormer Constructions",
        "services-painting": "Painting and Plastering",
        
        "benefits": "Benefits",
        "benefits-performance": "Performance Quality",
        "benefits-experience": "Experience",
        "benefits-innovations": "Innovations",
        "benefits-customer": "Customer Orientation",

        "portfolio-badkamers": "bathrooms",
        "portfolio-general": "general",
        "portfolio-dormer": "dormer",


        
        "phone":`Phone: ${localStorage.getItem("phone")}`,

        "consultation": "Consultation",
        "name-form": "Name*",
        "phone-form": "Phone*",
        "mail-form": "E-mail*",
        
        "name-form-placeholder": "Enter your name",
        "phone-form-placeholder": "Enter your phone",
        "mail-form-placeholder": "Enter your mail",
        "question-form-placeholder":"Enter your question",

        "libel-name": "Enter your name",
        "libel-phone": "Enter your phone",
        "libel-mail": "Enter your mail",

        
        "copyright": `${localStorage.getItem("date")}. All rights reserved`,
        "copyright-unsplash": "The site contains images from a free resource Unsplash",
        

        "our-mission": "Our Mission",
        "why-choose-us": "WHY CHOOSE US",
        
        "our-mission-text-one": "At Krupinec Bouw, we are on a mission to turn your construction dreams into a tangible reality. Our team of seasoned professionals is unwavering in their commitment to providing high-quality, sustainable, and cost-effective solutions for a diverse range of projects.",
        "our-mission-text-two": "Whether it's home renovations or commercial repairs, we are here to elevate your surroundings to new heights. Discover our array of services, and allow us to infuse fresh vitality into your projects, delivering enduring quality and enhancing the value of your construction endeavors. Your vision and our expertise results in excellence.",
        "why-choose-us-one": "Expertise: Our experienced professionals bring years of knowledge and skill to every project, guaranteeing you expert solutions that stand the test of time, ensuring your peace of mind.",
        "why-choose-us-two": "Quality: We prioritize quality in every aspect of our work. From materials selection to craftsmanship, we uphold the highest standards to ensure the longevity and functionality of our projects.",
        "why-choose-us-three": "Innovation: We stay at the forefront of industry trends and technologies to bring you innovative solutions that meet the evolving needs of our clients",
        "why-choose-us-four": "Client-Centric Approach: Your satisfaction is our top priority. We work closely with you to understand your vision and goals, and we communicate transparently throughout the project's lifecycle.",
        
        "text-page": "WE CAN’T FIND THIS PAGE",
        "text-url": "The webpage you are trying to access cannot be found on the server. ",
        "text-url-nav": "Please check the URL or try navigation to a different page.",
        "button-main-page":  "Main page",
        
        "rewiew-button": "Write a review",
        "buttons-load-more": "Load more",
        
        "write-a-review": "write a review",
        "your-name": "Your name*",
        "tell-us-about": "Tell us about your experience*",

        "send": "Send",
        "your-review": "Your review",
        
        "contact-us":"contact us",
        "phone-nan":"Phone:",
        "question":"Your question*",
        "name-placeholder":"Enter your name",
        "phone-placeholder":"Enter your phone", 
        "mail-placeholder":"Enter your mail", 
        "question-placeholder":"Enter your question", 
        "see-more":"See more",
        "general-renovation":"general renovation",
        "dormer-construction":"dormer construction",

        "service-bathroom-removal":"- Removal of old plumbing fixtures and tiles.",
        "service-bathroom-installation":"- Installation of new plumbing fixtures.",
        "service-bathroom-tile":"- Tile laying for floors and walls.",
        "service-bathroom-electrical":"- Electrical work including installation of light fixtures and outlets.",
        "service-bathroom-ventilation":"- Installation of heating and ventilation systems.",
         
        "service-general-complete":"- Complete interior updates: living rooms, kitchens, hallways.",
        "service-general-flooring":"- Flooring renovations including parquet, laminate, tile, and PVC installation.",
        "service-general-replacement":"- Replacement of windows and doors.",
        "service-general-insulation":"- Insulation of walls and floors.",
        "service-general-interior":"- Interior finishing works.",

        "service-dormer-inspection":"- Inspection and repair of rafters and battens.",
        "service-dormer-replacement":"- Replacement or restoration of roofing materials.",
        "service-dormer-insulation":"- Insulation of roof and attic.",
        "service-dormer-installation":"- Installation of attic window systems.",
        "service-dormer-rainwater":"- Rainwater drainage and gutter installation.",
        
        "service-painting-surface":"- Surface preparation: filling, priming.",
        "service-painting-interior":"- Interior and exterior painting.",
        "service-painting-decorative":"- Decorative plastering: textured, Venetian.",
        "service-painting-antifungal":"- Antifungal and moisture-resistant treatments.",
        "service-painting-restoration":"- Restoration work on building facades.",
    },
    "netherlands": {
        "home":"Thuis",
        "about-us":"Over ons",
        "portfolio":"Portefeuille",
        "reviews":"Beoordelingen",
        "contacts":"Contacten",
        "title": "realiseer je dromen met ons",
        "button-consultation": "Consultatie",

        "about-us-welcome": "Welkom bij Krupinec Bouw, uw toonaangevende bestemming voor hoogwaardige bouwreparaties. Wij zijn een gepassioneerd en toegewijd team gespecialiseerd in de kunst van restauratie, verbetering en complete transformatie van ruimtes!",
        "read-more-button": "Lees meer",
        "services": "Diensten",
        "services-bathroom": "Badkamerrenovatie",
        "services-algemene": "Algemene Renovatie",
        "services-dormer": "Dakkapelconstructies",
        "services-painting": "Schilderen en Stukadoren",
        
        "benefits": "Voordelen",
        "benefits-performance": "Kwaliteit van Prestaties",
        "benefits-experience": "Ervaring",
        "benefits-innovations": "Innovaties",
        "benefits-customer": "Klantgerichtheid",

        "portfolio-badkamers": "badkamers",
        "portfolio-general": "algemeen",
        "portfolio-dormer": "dakkapel",
        
        "name-form-placeholder": "Voer uw naam in",
        "phone-form-placeholder": "Voer uw telefoonnummer in",
        "mail-form-placeholder": "Voer uw e-mailadres in",
        "question-form-placeholder":"Uw vraag*",

        "phone":`Telefoon: ${localStorage.getItem("phone")}`,

        "consultation": "Consultatie",
        "name-form": "Naam*",
        "phone-form": "Telefoon*",
        "mail-form": "E-mail*",

        "libel-name": "Voer uw naam in",
        "libel-phone": "Voer uw telefoonnummer in",
        "libel-mail": "Voer uw e-mailadres in",
        
        
        "copyright": `${localStorage.getItem("date")}. Alle rechten voorbehouden`,
        "copyright-unsplash": "De website bevat afbeeldingen van een gratis bron, Unsplash.",
        

        "our-mission": "Onze missie",
        "why-choose-us": "WAAROM ONS KIEZEN",
        
        "our-mission-text-one": "Bij Krupinec Bouw hebben we als missie om uw bouwdromen om te zetten in tastbare realiteit. Ons team van ervaren professionals is vastberaden in hun toewijding om hoogwaardige, duurzame en kosteneffectieve oplossingen te bieden voor een breed scala aan projecten.",
        "our-mission-text-two": "Of het nu gaat om renovaties aan huis of commerciële reparaties, wij zijn er om uw omgeving naar nieuwe hoogten te tillen. Ontdek ons scala aan diensten en laat ons frisse vitaliteit in uw projecten brengen, waarbij we duurzame kwaliteit leveren en de waarde van uw bouwprojecten verhogen. Uw visie en onze expertise leiden tot excellentie.",
        "why-choose-us-one": "Deskundigheid: Onze ervaren professionals brengen jarenlange kennis en vaardigheid mee naar elk project, wat u deskundige oplossingen garandeert die de tand des tijds doorstaan, en zo uw gemoedsrust verzekeren.",
        "why-choose-us-two": "Kwaliteit: We hebben kwaliteit als prioriteit in elk aspect van ons werk. Van de selectie van materialen tot vakmanschap, wij handhaven de hoogste normen om de duurzaamheid en functionaliteit van onze projecten te waarborgen.",
        "why-choose-us-three": "Innovatie: We blijven vooroplopen in trends en technologieën in de industrie om u innovatieve oplossingen te bieden die voldoen aan de steeds veranderende behoeften van onze klanten.",
        "why-choose-us-four": "Klantgerichte benadering: Uw tevredenheid is onze hoogste prioriteit. We werken nauw met u samen om uw visie en doelen te begrijpen, en we communiceren transparant gedurende de hele levenscyclus van het project.",
        
        "text-page": "WE KUNNEN DEZE PAGINA NIET VINDEN",
        "text-url": "De webpagina die u probeert te openen, kan niet worden gevonden op de server. ",
        "text-url-nav": "Controleer de URL of probeer naar een andere pagina te navigeren.",
        "button-main-page":  "Hoofdpagina",

        "rewiew-button": "Schrijf een recensie",
        "buttons-load-more": "Meer loden",
        
        "write-a-review": "Schrijf een recensie",
        "your-name": "Uw naam*",
        "tell-us-about": "Vertel ons over uw ervaring*",

        "send": "Verzenden",
        "your-review": "Uw recensie",
        
        "contact-us":"Neem contact met ons op",
        "phone-nan":"Telefoon:",
        "question":"Uw vraag*",
        "name-placeholder":"Voer uw naam in",
        "phone-placeholder":"Voer uw telefoonnummer in", 
        "mail-placeholder":"Voer uw e-mailadres in", 
        "question-placeholder":"Voer uw vraag in", 

        "see-more":"Zie meer",
        "general-renovation":"algemene renovatie",
        "dormer-construction":"dakkapel constructie",

        "service-bathroom-removal":"- Verwijdering van oude sanitairarmaturen en tegels",
        "service-bathroom-installation":"- Installatie van nieuwe sanitairarmaturen.",
        "service-bathroom-tile":"- Tegelzetten voor vloeren en muren.",
        "service-bathroom-electrical":"- Elektrisch werk, inclusief installatie van verlichtingsarmaturen en stopcontacten.",
        "service-bathroom-ventilation":"- Installatie van verwarmings- en ventilatiesystemen.",

        "service-general-complete":"- Volledige interieurupdates: woonkamers, keukens, gangen.",
        "service-general-flooring":"- Renovaties van vloeren, inclusief parket, laminaat, tegels en PVC-installatie.",
        "service-general-replacement":"- Vervanging van ramen en deuren.",
        "service-general-insulation":"- Isolatie van muren en vloeren.",
        "service-general-interior":"- Afwerking van het interieur.",

       "service-dormer-inspection":"- Inspectie en reparatie van spanten en latten.",
        "service-dormer-replacement":"- Vervanging of herstel van dakbedekkingsmaterialen.",
        "service-dormer-insulation":"- Isolatie van het dak en de zolder.",
        "service-dormer-installation":"- Installatie van zolderraamsystemen.",
        "service-dormer-rainwater":"- Installatie van regenwaterafvoer en dakgoot.",
        
        "service-painting-surface":"- Oppervlaktevoorbereiding: vullen, grondverven.",
        "service-painting-interior":"- Schilderen van interieur en exterieur.",
        "service-painting-decorative":"- Decoratief pleisterwerk: gestructureerd, Venetiaans.",
        "service-painting-antifungal":"- Antischimmel- en vochtbestendige behandelingen.",
        "service-painting-restoration":"- Restauratiewerkzaamheden aan gevels van gebouwen.",
    }   
};
let currentlang = null;
const translateElements = document.querySelectorAll(".lang");
function translate (){
    translateElements.forEach(element => {
        const {key, type}=element.dataset;
        if(type === "placeholder"){
            return element.placeholder = data[currentlang][key];
        }
        element.textContent = data[currentlang][key]
    })
}

function setLang (){
    currentlang = localStorage.getItem("lang");
    if(!currentlang){
        currentlang = "english";
        localStorage.setItem("lang", "english");
    };
    const activeLangButtons = document.querySelectorAll(`.lang-switch[language=${currentlang}]`);
    activeLangButtons.forEach(element => element.classList.add("active"))
    
    translate()

};
setLang()

const langSwichButtons = document.querySelectorAll(".lang-switch");
langSwichButtons.forEach(element => element.addEventListener("click", function(event){
    const isActive = event.target.classList.contains("active");
    if(!isActive){
        const lang = event.target.attributes.language.value;
        localStorage.setItem("lang", lang);
        langSwichButtons.forEach(element => element.classList.remove("active"));
        setLang()
 
    }
}))


export default class StorageObserver {
    constructor(key) {
      this.key = key;
      this.subscribers = [];
  
      // Слухаємо зміну в localStorage (в інших вкладках)
      window.addEventListener("storage", (e) => {
        if (e.key === this.key) {
          this.notify(e.newValue);
        }
      });
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    notify(newValue) {
      this.subscribers.forEach((cb) => cb(newValue));
    }
  
    set(value) {
      localStorage.setItem(this.key, value);
      this.notify(value); // сповіщаємо підписників у цій же вкладці
    }
  
    get() {
      return localStorage.getItem(this.key);
    }
  }
  

