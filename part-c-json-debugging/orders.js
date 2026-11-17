
"use strict";

const orders = [
    {
        orderId: 101,
        customer: "Rahul",
        product: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        orderId: 102,
        customer: "Priya",
        product: "Mouse",
        price: 800,
        quantity: 2
    },
    {
        orderId: 103,
        customer: "Arjun",
        product: "Keyboard",
        price: 1500,
        quantity: 1
    }
];

console.log("TASK 1");

const jsonData = JSON.stringify(orders);
console.log("JSON Data:", jsonData);

const parsedData = JSON.parse(jsonData);
console.log("Parsed Data:", parsedData);

console.log("\nTASK 2");

const totalOrders = parsedData.length;

let totalAmount = 0;

for (let i = 0; i < parsedData.length; i++) {
    totalAmount = totalAmount + parsedData[i].price * parsedData[i].quantity;
}

console.log("Total Orders:", totalOrders);
console.log("Total Amount:", totalAmount);

console.log("\nTASK 3");

const orderJSON = '{"orderId":104,"customer":"Varsha","product":"Phone","price":20000,"quantity":1}';

try {
    const newOrder = JSON.parse(orderJSON);
    console.log("New Order:", newOrder);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
