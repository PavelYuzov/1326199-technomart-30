var popupopen = document.querySelector(".button-help");
var popupoff = document.querySelector(".popup-off");
var popupclose = document.querySelector(".popup-close");
var popupcloseindex = document.querySelector(".popup-close-index");
var popupindex = document.querySelector(".popup-on");
var form = popupindex.querySelector("form");
var submitform = popupindex.querySelector(".popup-button");
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var text = document.querySelector("[name=comment]");
var storage = localStorage.getItem("login");
var active = document.querySelector(".button-active");
var button1 = document.querySelector(".services-item-button-description");
var button2 = document.querySelector(".services-item-button-guarantee");
var button3 = document.querySelector(".services-item-button-credit");
var services = document.querySelectorAll(".services-item");
var servicesbutton = document.querySelectorAll(".services-item");
var delivery = document.querySelector(".services-delivery");
var guarantee = document.querySelector(".services-guarantee");
var credit = document.querySelector(".services-credit");
var hidden = document.querySelector(".visually-hidden");
var openmap = document.querySelector(".company-map");
var popupmap = document.querySelector(".popup-map-on");
var mapclose = document.querySelector(".map-close");
var show = document.querySelector(".modal-show");
var error = document.querySelector(".modal-error");
var bgperfo = document.querySelector(".card-slider-perfo");
var bgdrill = document.querySelector(".card-slider-drill");
var textperfo = document.querySelector(".card-slider-slide1");
var textdrill = document.querySelector(".card-slider-slide2");
var next = document.querySelector(".slide-up");
var back = document.querySelector(".slide-back");
var pin1 = document.querySelector(".slide-first-pin-off");
var pin2 = document.querySelector(".slide-second-pin-on");
var basket = document.querySelector(".container-card-link");
var popupcatalog = document.querySelector(".popup-catalog-on");
var closecatalog = document.querySelector(".popup-close");
var nextshop = document.querySelector(".catalog-button-purchases");
var show = document.querySelector(".modal-show");

var isStorageSupport = true;
var storage = "";

try{
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupoff.classList.add("popup-off")) {
            evt.preventDefault ();
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupmap.classList.add("visually-hidden")) {
            evt.preventDefault ();
        }
    }
});

popupopen.addEventListener("click", function (evt) {

    evt.preventDefault();
    console.log("Открыть окно обратной формы");

    popupindex.classList.remove("popup-off");
    popupindex.classList.add("modal-show");
    login.focus();

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

popupcloseindex.addEventListener("click", function (evt) {

    evt.preventDefault();
    console.log("Закрыть окно обратной формы");

    popupindex.classList.add("popup-off");
    popupindex.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {

    if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popupindex.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }

});

services[0].addEventListener("click", function(evt) {
    evt.preventDefault();

    delivery.classList.remove("visually-hidden");
    guarantee.classList.add("visually-hidden");
    credit.classList.add("visually-hidden");
});

services[1].addEventListener("click", function(evt) {
    evt.preventDefault();

    delivery.classList.add("visually-hidden");
    guarantee.classList.remove("visually-hidden");
    credit.classList.add("visually-hidden");
});

services[2].addEventListener("click", function(evt) {
    evt.preventDefault();

    delivery.classList.add("visually-hidden");
    guarantee.classList.add("visually-hidden");
    credit.classList.remove("visually-hidden");
});

servicesbutton[0].addEventListener("click", function(evt) {
    evt.preventDefault();

    button1.classList.add("button-active");
    button2.classList.remove("button-active");
    button3.classList.remove("button-active");
});

servicesbutton[1].addEventListener("click", function(evt) {
    evt.preventDefault();

    button1.classList.remove("button-active");
    button2.classList.add("button-active");
    button3.classList.remove("button-active");
});

servicesbutton[2].addEventListener("click", function(evt) {
    evt.preventDefault();

    button1.classList.remove("button-active");
    button2.classList.remove("button-active");
    button3.classList.add("button-active");
});

openmap.addEventListener("click", function(evt) {
    evt.preventDefault();

    popupmap.classList.remove("visually-hidden");
});


mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();

    popupmap.classList.add("visually-hidden");
});

next.addEventListener("click", function(evt) {
    evt.preventDefault();

    bgperfo.classList.toggle("card-slider-drill");
    bgperfo.classList.toggle("card-slider-perfo");

    textperfo.classList.toggle("visually-hidden");
    textdrill.classList.toggle("visually-hidden");

    pin1.classList.toggle("slide-first-pin-off");
    pin2.classList.toggle("slide-second-pin-on");
});

back.addEventListener("click", function(evt) {
    evt.preventDefault();

    bgperfo.classList.toggle("card-slider-drill");
    bgperfo.classList.toggle("card-slider-perfo");

    textperfo.classList.toggle("visually-hidden");
    textdrill.classList.toggle("visually-hidden");

    pin1.classList.toggle("slide-first-pin-off");
    pin2.classList.toggle("slide-second-pin-on");
});

basket.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по ссылке: добавить товар в корзину");

    popupcatalog.classList.remove("popup-catalog-off");
    popupcatalog.classList.add("modal-show");
});

closecatalog.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по крестику: закрыть окно");

    popupcatalog.classList.add("popup-catalog-off");
    popupcatalog.classList.remove("modal-show");
});

nextshop.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по кнопке: продолжить покупки");

    popupcatalog.classList.add("popup-catalog-off");
    popupcatalog.classList.remove("modal-show");
});