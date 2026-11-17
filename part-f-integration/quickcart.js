
"use strict";

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}

const products = [
    new Product(1, "Laptop", 50000, 1),
    new Product(2, "Mouse", 800, 2),
    new Product(3, "Keyboard", 1500, 1)
];

console.log("QUICKCART ORDER SUMMARY");

products.forEach(function (product) {
    console.log(
        product.name + " - Rs." + product.price +
        " x " + product.quantity +
        " = Rs." + product.getTotal()
    );
});

const totalAmount = products.reduce(function (sum, product) {
    return sum + product.getTotal();
}, 0);

console.log("Total Amount: Rs." + totalAmount);

const order = {
    customer: "Varsha",
    products: products,
    total: totalAmount
};

const jsonOrder = JSON.stringify(order);
console.log("JSON Order:", jsonOrder);

async function confirmOrder() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Order confirmed successfully!");
        }, 1000);
    });
}

async function main() {
    const message = await confirmOrder();
    console.log(message);
}

main();
