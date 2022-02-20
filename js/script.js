/** Documentation site navigation on small screen */
const btnHamburger = document.querySelector("#btn-hamburger");
const ListMain = document.querySelector("#main-list");
const linkBtn = document.querySelectorAll(".btn-link");
const navigation = document.querySelector("#navigation");

btnHamburger.addEventListener("click", () => {
  ListMain.classList.toggle("nav-list-hide");
  ListMain.classList.toggle("list-inline");
});

for (eachBtn of linkBtn) {
  eachBtn.addEventListener("click", () => {
    ListMain.classList.toggle("nav-list-hide");
  });
}

let path = window.location.pathname;

// when path is of docs page
if (path.includes("/docs")) {

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

  // Slider component
  var slider = document.querySelector('#slider')
  var label = document.querySelector('#slider-value')
  label.innerHTML = slider.value;
  slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) ' + slider.value / 100 + '%, var(--bgLight) 0%)'
  slider.oninput = function () {
    label.innerHTML = slider.value;
    slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) ' + slider.value / 100 + '%, var(--bgLight) 0%)'
  }

  // For dark mode feature changing styles of docs page

  const iframes = document.querySelectorAll("iframe");
  const darkModeBtn = document.querySelector(".dark-mode-btn");
  const connectLinks = document.querySelectorAll(".connect-link")
  const btntLinks = document.querySelectorAll(".btn-link")
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    navigation.classList.toggle("dark-mode")
    ListMain.classList.toggle("dark-mode")

    // all iframes style toggling
    for (var i = 0; i < iframes.length; i++)
      iframes[i].classList.toggle("dark-iframe");

    //  all aside bar links toggling
    for (var i = 0; i < btntLinks.length; i++)
      btntLinks[i].classList.toggle("white")

    //  all social media links toggling
    for (var i = 0; i < connectLinks.length; i++)
      connectLinks[i].classList.toggle("dark-mode")

    // toggling dark mode button
    if (darkModeBtn.classList.contains("fa-moon")) {
      darkModeBtn.classList.replace("fa-moon", "fa-sun")
    }
    else {
      darkModeBtn.classList.replace("fa-sun", "fa-moon")
    }
  });

}

// when path is of landing page
else {
  const darkModeBtn2 = document.querySelector(".dark-mode-btn-landing");
  const footer = document.querySelector(".footer")
  const navLanding = document.querySelector(".nav")
  const homeImage = document.querySelector(".home-image")
  const links = document.querySelectorAll(".link")
  const fab = document.querySelectorAll(".fab")

  darkModeBtn2.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
    homeImage.classList.toggle("dark-mode-img")
    navLanding.classList.toggle("dark-mode")
    for (var i = 1; i < 4; i++)
      links[i].classList.toggle("dark-mode")

    // toggling dark mode button
    if (darkModeBtn2.classList.contains("fa-moon")) {
      darkModeBtn2.classList.replace("fa-moon", "fa-sun")
    }
    else {
      darkModeBtn2.classList.replace("fa-sun", "fa-moon")
    }

    // toggling footer color
    if (footer.style.backgroundColor != "var(--darkMode)") {
      footer.style.backgroundColor = "var(--darkMode)"
      footer.style.color = "white"
    }
    else {
      footer.style.backgroundColor = "var(--theme100)"
      footer.style.color = "black"
    }
    // landing page footer links toggle
    for (var i = 0; i < fab.length; i++)
      fab[i].classList.toggle("dark-mode")
  });
}