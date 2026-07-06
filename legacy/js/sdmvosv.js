
// element: це DOM-елемент, до якого ви хочете прикріпити обробник події.

// addEventListener() є методом, який дозволяє вам прослуховувати події на елементах DOM.
//  Цей метод можна використовувати для призначення обробників подій елементам веб-сторінки без необхідності використання атрибутів подій у HTML.

// аргумент "click" використовується як назва події в методі addEventListener для визначення реакції на клік користувача мишею по елементу. 
// Коли ви використовуєте "click" як аргумент, ви кажете браузеру слухати і реагувати на подію кліку по певному елементу.


// element.addEventListener("click", function(event){
//     const eventTarget = event.target;        // target це DOM елемент до якого привязана подія.    властивість  
//     const eventCurrentTarget = event.currentTarget; // currentTarget це DOM елемент на якому відбулась подія.    властивість
//     if (eventTarget === eventCurrentTarget) {
        
//     }
// });
const element = document.getElementById("myElement");
element.addEventListener("click", function(event){
    const eventTarget = event.target;  
    const eventCurrentTarget = event.currentTarget; 
    if (eventTarget === eventCurrentTarget) {
        // window.location.href = "../html/reviews.html";
        window.close();

    }
});