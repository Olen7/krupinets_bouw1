

document.getElementById('consultation-form').addEventListener('submit', function() {
    setTimeout(() => {
        this.reset();
    }, 1000); // 2000 мілісекунд = 2 секунди
});