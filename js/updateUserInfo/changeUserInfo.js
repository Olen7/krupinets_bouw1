const contact = {
  address: "Ericastraat 7 1214 EJ Hilversum",
  phone: "+31625351815",
  email: "krupinecbouw@gmail.com",
};
export function updatePhone() {
  const updatePhoneEl = document.querySelector("#update-phone");
  console.log(updatePhoneEl);
  updatePhoneEl.insertAdjacentHTML(
    "beforeend",
    `<a href="tel:${contact.phone}" class="address_link lang " data-key="phone">Phone: <span class="foother_desctop_amster ">${contact.phone}</span></a>`
  );
  localStorage.setItem("phone", contact.phone);
}
function updateEmail() {
  const updateEmailEl = document.querySelector("#update-email");
  updateEmailEl.insertAdjacentHTML(
    "beforeend",
    `<a href="mailto:${contact.email}" class="address_link">E-mail: <span class="foother_desctop_amster">${contact.email}</span> </a>`
  );
  localStorage.setItem("email", contact.email);
}

function updateAddress() {
  const updateAddressEl = document.querySelector("#update-address");
  updateAddressEl.insertAdjacentHTML(
    "beforeend",
    ` <a href="https://maps.app.goo.gl/yW653rWedA1cQ6HC8" class="address_link" target="_blank" rel="noopener noreferrer nofollow lang" data-key="address">Address: <span class="foother_desctop_amster">${contact.address},<span class="foother_tab_amster">Amsterdam, Netherlands</span></span></a>`
  );
  localStorage.setItem("address", contact.address);
}
updatePhone();
updateEmail();
updateAddress();

// icon - mail
const iconMail = document.getElementById("icon-mail");
iconMail.href = "krupinecbouw@gmail.com";
console.log(iconMail.href);

// icon - facebook
const iconFacebook = document.getElementById("icon-facebook");
iconFacebook.href = "#";
console.log(iconFacebook.href);

// icon - instagram
const iconInsta = document.getElementById("icon-insta");
iconInsta.href = "#";
console.log(iconInsta.href);

// icon - primary
const iconPrimary = document.getElementById("icon-primary");
iconPrimary.href = "#";
console.log(iconPrimary.href);

// icon - instagram
const iconLinkedin = document.getElementById("icon-linkedin");
iconLinkedin.href = "#";
console.log(iconLinkedin.href);

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
