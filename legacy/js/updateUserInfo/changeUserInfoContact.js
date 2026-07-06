const contact = {
  address: "Ericastraat 7 1214 EJ Hilversum",
  phone: "+31625351815",
  email: "krupinecbouw@gmail.com",
};
export function updatePhoneContact() {
  const updatePhoneEl = document.querySelector("#update-phone-contact");
  console.log(updatePhoneEl);
  updatePhoneEl.insertAdjacentHTML(
    "afterend",
    `<a href="${contact.phone}" class="address_link_contact">${contact.phone}</a>`
  );
}
function updateEmailContact() {
  const updateEmailEl = document.querySelector("#update-email-contact");
  updateEmailEl.insertAdjacentHTML(
    "beforeend",
    `<a href="mailto:${contact.email}" class="address_link_contact">${contact.email}</a>`
  );
  localStorage.setItem("email", contact.email);
}

function updateAddressContact() {
  const updateAddressEl = document.querySelector("#update-address-contact");
  updateAddressEl.insertAdjacentHTML(
    "beforeend",
    `<a href="https://maps.app.goo.gl/WqgaP1G8ZHufNCVWA"
        class="address_link_contact"
        target="_blank"
        rel="noopener noreferrer nofollow">${contact.address}
    </a>`
  );
  localStorage.setItem("address", contact.address);
}
updatePhoneContact();
updateEmailContact();
updateAddressContact();
