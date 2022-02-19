/** Documentation site navigation on small screen */
const btnHamburger = document.querySelector("#btn-hamburger");
const ListMain = document.querySelector("#main-list");
const linkBtn = document.querySelectorAll(".btn-link");

btnHamburger.addEventListener("click", () => {
  ListMain.classList.toggle("nav-list-hide");
  ListMain.classList.toggle("list-inline");
});

for (eachBtn of linkBtn) {
  eachBtn.addEventListener("click", () => {
    ListMain.classList.toggle("nav-list-hide");
  });
}

/** Navigation component */
const btnNav = document.querySelector("#btn-nav");
const navList = document.querySelector("#list-nav");

btnNav.addEventListener("click", () => {
  navList.classList.toggle("nav-list-hide");
});

/** Modal */
const modalContainer = document.querySelector(".modal-container");
const btnModal = document.querySelector("#btn-modal");
const btnClose = document.querySelector("#btn-close-modal");

btnModal.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

btnClose.onclick = () => {
  modalContainer.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
};

/** Toast */
const toast = document.querySelector(".toast-container");
const btnToast = document.querySelector("#btn-toast");
const btnCloseToast = document.querySelector("#btn-close-toast");

const closeToast = () => {
  toast.style.display = "none";
};

btnToast.addEventListener("click", () => {
  toast.style.display = "block";
  setTimeout(closeToast, 3000);
});

btnCloseToast.onclick = closeToast;

// Slider 
var slider = document.querySelector('#slider')
var label = document.querySelector('#slider-value')
label.innerHTML = slider.value;
slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) '+slider.value/100+'%, var(--bgLight) 0%)'
slider.oninput = function() {
  label.innerHTML = slider.value;
  slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) '+slider.value/100+'%, var(--bgLight) 0%)'
}