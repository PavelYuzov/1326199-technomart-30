const linkBuyProduct = document.querySelectorAll(".container-card-link");
const popupPurchases = document.querySelector(".popup-catalog-on");
const iconClosePopupPurchases = document.querySelector(".popup-close");
const linkResumePurchases = document.querySelector(".catalog-button-purchases");


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {  
        if (popupPurchases.classList.add("popup-catalog-off")) {
            evt.preventDefault ();
        }
    }
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
