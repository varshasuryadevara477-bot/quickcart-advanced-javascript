
"use strict";

console.log("TASK 1");

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphones", price: 2500 }
];

function findProduct(id) {
    return products.find(function (product) {
        return product.id === id;
    });
}

console.log("Found Product:", findProduct(3));

console.log("\nTASK 2");

function calculateTotal(price, quantity) {
    return price * quantity;
}

const memoizedTotal = (function () {
    const cache = new Map();

    return function (price, quantity) {
        const key = price + "-" + quantity;

        if (cache.has(key)) {
            console.log("Getting result from cache");
            return cache.get(key);
        }

        const result = calculateTotal(price, quantity);
        cache.set(key, result);

        console.log("Calculating result");
        return result;
    };
})();

console.log("Total:", memoizedTotal(50000, 2));
console.log("Total:", memoizedTotal(50000, 2));
console.log("Total:", memoizedTotal(800, 3));

console.log("\nTASK 3");

function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            callback();
        }, delay);
    };
}

const search = debounce(function () {
    console.log("Search completed");
}, 1000);

search();
search();
search();

console.log("Search started");
