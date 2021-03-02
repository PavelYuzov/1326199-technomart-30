var linkBuyProduct = document.querySelectorAll(".container-card-link");
var popupPurchases = document.querySelector(".popup-catalog-on");
var iconClosePopupPurchases = document.querySelector(".popup-close");
var linkResumePurchases = document.querySelector(".catalog-button-purchases");


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupPurchases.classList.add("popup-catalog-off")) {
            evt.preventDefault ();
        }
    }
});

iconClosePopupPurchases.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по крестику: закрыть окно");

    popupPurchases.classList.add("popup-catalog-off");
});

linkResumePurchases.addEventListener("click", function (evt) {

    evt.preventDefault ();
    console.log("Клик по кнопке: продолжить покупки");

    popupPurchases.classList.add("popup-catalog-off");
});

linkBuyProduct.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.preventDefault();
        popupPurchases.classList.remove("popup-catalog-off");
    });
});
