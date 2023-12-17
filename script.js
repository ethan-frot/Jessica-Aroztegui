// Scroll reveal

// Bien pensé à actualisé la page pour désactiver
// les animations en dessous d'un desktop !
// (Sinon problème de marge à droite à cause de la bibliothèque)
ScrollReveal({ mobile: false });

// Up ease-in

var slideUp = {
  duration: 2000,
  distance: "10%",
  origin: "bottom",
  erasing: "ease-in",
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".slide-up", slideUp);

// Down ease-in

var slideDown = {
  duration: 2000,
  distance: "35%",
  origin: "top",
  erasing: "ease-in",
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".slide-down", slideDown);

// Left ease-in

var slideLeft = {
  duration: 2000,
  distance: "15%",
  origin: "left",
  erasing: "ease-in",
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".slide-left", slideLeft);

// Right ease-in

var slideRight = {
  duration: 2000,
  distance: "15%",
  origin: "right",
  erasing: "ease-in",
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".slide-right", slideRight);

// Pop up

var popUp = {
  duration: 2000,
  scale: 0.3,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up", popUp);

// Button pop up

var buttonPopUp = {
  duration: 2000,
  scale: 0.2,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".button-pop-up", buttonPopUp);

// Pop up 1s

var popUp1 = {
  duration: 1000,
  scale: 0.3,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up1", popUp1);

// Pop up 2s

var popUp2 = {
  duration: 2000,
  scale: 0.3,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up2", popUp2);

// Pop up 3s

var popUp3 = {
  duration: 3000,
  scale: 0.3,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up3", popUp3);

// Pop up 4s

var popUp4 = {
  duration: 4000,
  scale: 0.4,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up4", popUp4);

// Pop up 5s

var popUp5 = {
  duration: 5000,
  scale: 0.5,
  reset: true,
  useDelay: "once",
};

ScrollReveal().reveal(".pop-up5", popUp5);

//  Button

function returnSection() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    offsetTop: -10,
  });
}

// Reviews

// Display
function displayModal(event) {
  var modal = event.target
    .closest(".review-mobile-content")
    .querySelector(".modal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Close
function closeModal(event) {
  var modal = event.target.closest(".modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Button
var showMoreBtns = document.querySelectorAll(".show-more-btn");
showMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", displayModal);
});

// User click outside window
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event);
  }
});

// User click on close button
var closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

// Menu-burger

function closeMenu() {
  document.getElementById("navi-toggle").checked = false;
}
