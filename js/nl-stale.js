function applyStyles(lang) {
    var elements = document.querySelectorAll('.element1, .element2, .element3');

    elements.forEach(function(element) {
        if (lang === 'nl') {
            element.classList.add('lang-nl');
            element.classList.remove('lang-en');
        } else {
            element.classList.add('lang-en');
            element.classList.remove('lang-nl');
        }
    });
}

var btnEnglish = document.getElementById('btnEnglish');
var btnDutch = document.getElementById('btnDutch');

btnEnglish.addEventListener('click', function() {
    document.documentElement.lang = 'en';
    applyStyles('en'); // Застосування стилів для англійської мови
});

btnDutch.addEventListener('click', function() {
    document.documentElement.lang = 'nl';
    applyStyles('nl'); // Застосування стилів для голландської мови
});