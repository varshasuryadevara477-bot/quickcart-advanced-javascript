
"use strict";

let cartCount = 0;

const productList = document.getElementById("productList");
const cartDisplay = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-btn")) {
        cartCount++;

        cartDisplay.textContent = cartCount;

        console.log(event.target.dataset.name + " added to cart");
    }
});

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const buttons = document.querySelectorAll(".add-btn");

    buttons.forEach(function (button) {
        const productName = button.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
});
