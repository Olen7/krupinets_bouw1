
const baseURL = "https://krupinets-bouw-admin.onrender.com/api/portfolios";

export function prefetchData(locale = 'en', token) {
  fetch(`${baseURL}?locale=${locale}&populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('prefetchedData', JSON.stringify(data));
      console.log("Дані збережено у localStorage ✅ ");
    })
    .catch(error => console.error("❌ Prefetch error:", error.message));
}
