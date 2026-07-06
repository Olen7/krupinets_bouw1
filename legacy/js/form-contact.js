document.getElementById('contact-us-form').addEventListener('submit', function() {
    setTimeout(() => {
        this.reset();
    }, 1000); // 2000 мілісекунд = 2 секунди
});