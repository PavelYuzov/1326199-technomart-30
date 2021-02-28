var basketbutton = document.querySelectorAll(".container-card-link");
var popupcatalog = document.querySelector(".popup-catalog-on");
var closecatalog = document.querySelector(".popup-close");
var nextshop = document.querySelector(".catalog-button-purchases");


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupcatalog.classList.add("popup-catalog-off")) {
            evt.preventDefault ();
        }
    }
});

closecatalog.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по крестику: закрыть окно");

    popupcatalog.classList.add("popup-catalog-off");
});

nextshop.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по кнопке: продолжить покупки");

    popupcatalog.classList.add("popup-catalog-off");
});

basketbutton.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.preventDefault();
        popupcatalog.classList.remove("popup-catalog-off");
    });
});
