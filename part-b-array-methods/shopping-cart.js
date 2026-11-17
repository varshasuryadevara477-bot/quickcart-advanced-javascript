
"use strict";

const cart = [
    { id: 101, name: "Laptop", price: 50000, quantity: 1, category: "Electronics" },
    { id: 102, name: "Mouse", price: 800, quantity: 2, category: "Accessories" },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, category: "Electronics" },
    { id: 105, name: "Headphones", price: 2500, quantity: 2, category: "Accessories" }
];

console.log("TASK 1");

const itemTotals = cart.map(function (item) {
    return {
        name: item.name,
        total: item.price * item.quantity
    };
});

console.log("Product Totals:", itemTotals);

const expensiveProducts = cart.filter(function (item) {
    return item.price > 2000;
});

console.log("Products above 2000:", expensiveProducts);

const totalCartValue = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
}, 0);

console.log("Total Cart Value:", totalCartValue);

cart.forEach(function (item) {
    console.log(item.name, item.category, item.quantity);
});

const electronicsTotal = cart
    .filter(function (item) {
        return item.category === "Electronics";
    })
    .reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

console.log("Electronics Total:", electronicsTotal);


console.log("\nTASK 2");

const inventory = new Map();

inventory.set(101, { name: "Laptop", quantity: 10 });
inventory.set(102, { name: "Mouse", quantity: 20 });
inventory.set(103, { name: "Keyboard", quantity: 15 });

console.log("Laptop:", inventory.get(101));

inventory.get(101).quantity = 8;

inventory.delete(103);

inventory.forEach(function (value, key) {
    console.log(key, value);
});

const emails = [
    "rahul@gmail.com",
    "priya@gmail.com",
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"
];

const uniqueEmails = new Set(emails);

console.log("Unique Emails:", uniqueEmails);

console.log("\nTASK 3");

const productConfig = {
    name: "Laptop",
    price: 50000,
    stock: 20
};

const frozenProduct = { ...productConfig };
Object.freeze(frozenProduct);

console.log("Frozen Product:", frozenProduct);
console.log("Is Frozen:", Object.isFrozen(frozenProduct));

const sealedProduct = { ...productConfig };
Object.seal(sealedProduct);

sealedProduct.price = 45000;

console.log("Sealed Product:", sealedProduct);
console.log("Is Sealed:", Object.isSealed(sealedProduct));