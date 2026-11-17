
"use strict";

function getProducts() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            const products = [
                { id: 1, name: "Laptop", price: 50000 },
                { id: 2, name: "Mouse", price: 800 },
                { id: 3, name: "Keyboard", price: 1500 }
            ];

            resolve(products);
        }, 2000);
    });
}

function getUser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                id: 101,
                name: "Varsha"
            });
        }, 1000);
    });
}

console.log("TASK 1");

getProducts()
    .then(function (products) {
        console.log("Products:", products);
    })
    .catch(function (error) {
        console.log("Error:", error.message);
    });

console.log("\nTASK 2");

async function displayUser() {
    try {
        const user = await getUser();
        console.log("User:", user);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayUser();

console.log("\nTASK 3");

async function displayAllData() {
    try {
        const results = await Promise.all([
            getProducts(),
            getUser()
        ]);

        console.log("All Products:", results[0]);
        console.log("User Details:", results[1]);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayAllData();
