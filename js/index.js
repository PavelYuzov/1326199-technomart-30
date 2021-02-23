var popupopen = document.querySelector(".button-help");
var popupoff = document.querySelector(".popup-off");
var popupclose = document.querySelector(".popup-close");
var popupindex = document.querySelector(".popup-on");
var form = popupindex.querySelector("form");
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
    login.focus();

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

popupclose.addEventListener("click", function (evt) {

    evt.preventDefault();
    console.log("Закрыть окно обратной формы");

    popupindex.classList.add("popup-off");
});

form.addEventListener("submit", function (evt) {

    if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля");
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
