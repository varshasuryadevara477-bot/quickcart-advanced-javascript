
"use strict";

{
    function Product(productName, price, category) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    Product.prototype.displayProduct = function () {
        return this.productName + " - Rs." + this.price + " - " + this.category;
    };

    const p1 = new Product("Laptop", 50000, "Electronics");
    const p2 = new Product("Mouse", 800, "Accessories");
    const p3 = new Product("Monitor", 12000, "Electronics");

    console.log("TASK 1");
    console.log(p1.displayProduct());
    console.log(p2.displayProduct());
    console.log(p3.displayProduct());
}

class Product {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }

    getProductDetails() {
        return this.productName + " - Rs." + this.price;
    }
}

class ElectronicProduct extends Product {
    constructor(productName, price, warranty) {
        super(productName, price);
        this.warranty = warranty;
    }

    showWarranty() {
        return "Warranty: " + this.warranty + " years";
    }
}

class ClothingProduct extends Product {
    constructor(productName, price, size) {
        super(productName, price);
        this.size = size;
    }

    showSize() {
        return "Size: " + this.size;
    }
}

const laptop = new ElectronicProduct("Laptop", 50000, 2);
const shirt = new ClothingProduct("Shirt", 1000, "M");

console.log("\nTASK 2");
console.log(laptop.getProductDetails());
console.log(laptop.showWarranty());
console.log(shirt.getProductDetails());
console.log(shirt.showSize());

console.log("\nTASK 3");

const finalPrice = (price, discount) => {
    return price - (price * discount / 100);
};

console.log("Final Price:", finalPrice(50000, 10));

const customerName = "Rahul";
const productName = "Laptop";
const total = 50000;

console.log(`Hello ${customerName}, your order of ${productName} is confirmed. Total: ₹${total}`);

const customer = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Mumbai"
};

const { name, email } = customer;

console.log("Name:", name);
console.log("Email:", email);

function calculateTotal(...prices) {
    let sum = 0;

    for (let price of prices) {
        sum = sum + price;
    }

    return sum;
}

console.log("Total:", calculateTotal(1000, 2000, 3000));

const originalProduct = {
    name: "Laptop",
    price: 50000
};

const newProduct = {
    ...originalProduct,
    price: 45000
};

console.log("Original:", originalProduct);
console.log("New Product:", newProduct);
