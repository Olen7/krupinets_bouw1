function updateCopyright(){
    const year = new Date().getFullYear();
    const copyrightText = document.querySelector("#copyright-text")
    copyrightText.textContent = `${year}. All rights reserved`
    localStorage.setItem("date", year)
 return
}
updateCopyright()