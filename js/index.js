const linkOpenForm = document.querySelector(".button-help");
const closeForm = document.querySelector(".popup-off");
const iconClosePopup = document.querySelector(".popup-close-index");
const openForm = document.querySelector(".popup-on");
const form = openForm.querySelector("form");
const login = openForm.querySelector("[name=login]");
const email = openForm.querySelector("[name=email]");
const comment = openForm.querySelector("[name=comment]"); 
let storage = localStorage.getItem("login");
const activeButton = document.querySelector(".button-active");
const hide = document.querySelector(".visually-hidden");
const closeMap = document.querySelector(".popup-map-off");
const linkOpenMap = document.querySelector(".company-map");
const openPopupMap = document.querySelector(".popup-map-on");
const iconCloseMap = document.querySelector(".map-close");
const modalShow = document.querySelector(".modal-show");
const modalError = document.querySelector(".modal-error");
const slidePerforator = document.querySelector(".card-slider-perfo");
const sliderdrill = document.querySelector(".card-slider-drill");
const infoSlidePerforator = document.querySelector(".card-slider-slide-perfo");
const infoSlideDrill = document.querySelector(".card-slider-slide-drill");
const nextSlide = document.querySelector(".slide-up");
const backSlide = document.querySelector(".slide-back");
const nextSlidePin = document.querySelector(".slide-first-pin-off");
const backSlidePin = document.querySelector(".slide-second-pin-on");
const linkBuyProduct = document.querySelectorAll(".container-card-link");
const popupPurchases = document.querySelector(".popup-catalog-on");
const iconClosePopupPurchases = document.querySelector(".popup-close");
const linkResumePurchases = document.querySelector(".catalog-button-purchases");
const buttons = document.querySelectorAll(".services-item-button");
const buttonsInfo = document.querySelectorAll(".services-container-description div");
let isStorageSupport = true;

try{
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (closeForm.classList.add("popup-off")) {
            evt.preventDefault ();
            openForm.classList.remove("modal-error");
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (openPopupMap.classList.add("visually-hidden")) {
            evt.preventDefault ();
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupPurchases.classList.add("popup-catalog-off")) {
            evt.preventDefault ();
        }
    }
});

linkOpenForm.addEventListener("click", function (evt) {
    evt.preventDefault();

    openForm.classList.remove("popup-off");
    openForm.classList.remove("modal-error");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !comment.value) {
        evt.preventDefault();
        openForm.classList.remove("modal-error");
        openForm.offsetWidth = openForm.offsetWidth;
        openForm.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("comment", comment.value);
        }
    }
});

iconClosePopup.addEventListener("click", function (evt) {
    evt.preventDefault();

    openForm.classList.add("popup-off");
    openForm.classList.remove("modal-error");
});

linkOpenMap.addEventListener("click", function(evt) {
    evt.preventDefault();

    openPopupMap.classList.remove("popup-map-off");
    openPopupMap.classList.add("modal-show");
});


iconCloseMap.addEventListener("click", function(evt) {
    evt.preventDefault();

    openPopupMap.classList.add("popup-map-off");
    openPopupMap.classList.remove("modal-show");
});

nextSlide.addEventListener("click", function(evt) {
    evt.preventDefault();

    slidePerforator.classList.toggle("card-slider-drill");
    slidePerforator.classList.toggle("card-slider-perfo");

    infoSlidePerforator.classList.toggle("visually-hidden");
    infoSlideDrill.classList.toggle("visually-hidden");

    nextSlidePin.classList.toggle("slide-first-pin-off");
    backSlidePin.classList.toggle("slide-second-pin-on");
});

backSlide.addEventListener("click", function(evt) {
    evt.preventDefault();

    slidePerforator.classList.toggle("card-slider-drill");
    slidePerforator.classList.toggle("card-slider-perfo");

    infoSlidePerforator.classList.toggle("visually-hidden");
    infoSlideDrill.classList.toggle("visually-hidden");

    nextSlidePin.classList.toggle("slide-first-pin-off");
    backSlidePin.classList.toggle("slide-second-pin-on");
});

iconClosePopupPurchases.addEventListener("click", function (evt) {
    evt.preventDefault ();

    popupPurchases.classList.add("popup-catalog-off");
});

linkResumePurchases.addEventListener("click", function (evt) {
    evt.preventDefault ();

    popupPurchases.classList.add("popup-catalog-off");
});

linkBuyProduct.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.preventDefault();
        popupPurchases.classList.remove("popup-catalog-off");
    });
});

buttons.forEach((item, index, arr) => {
    item.addEventListener("click", () => {
        item.classList.add("button-active");
        buttonsInfo[index].classList.remove("visually-hidden");

        arr.forEach((innderItem, innerIndex) => {
            if (innerIndex !== index) {
                buttons[innerIndex].classList.remove("button-active");
                buttonsInfo[innerIndex].classList.add("visually-hidden");
            }
        });
    });
});
