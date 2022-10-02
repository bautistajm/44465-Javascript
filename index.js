// Function to extract price from array of clothes.
const getPrice = () => {
    for (const grocery of groceries){
        if (product === grocery.item) {
            return grocery.price;
        }
    }
}

const addToCart = () => {
    let line;
    if (selectedProducts.length === 0) {
        noProductsSelected.innerText = "You have not selected any product yet.";
    } else {
        for (let i = 0; i < selectedProducts.length; i++) {
            noProductsSelected.innerText = "";
            line = document.createElement("li");
            line.innerText = `${selectedProducts[i].item}, $${selectedProducts[i].price}`;
        }
    cartMessage.appendChild(line);
    productCounter.innerText = selectedProducts.length;
    }
}

// Array of objects for the different products.
const groceries = [
    {item:"Onion Flavour Potato", price: 3.99, category: "Snacks", image: "./images/product-img-4.jpg", id: "product0001"},
    {item:"Blueberry Greek Yogurt", price: 5, category: "Dairy", image: "./images/product-img-6.jpg", id: "product0002"},
    {item:"Salted Instant Popcorn", price: 2.50, category: "Instant Food", image: "./images/product-img-5.jpg", id: "product0003"},
    {item:"Britannia Cheese Slices", price: 6.25, category: "Dairy", image: "./images/product-img-7.jpg", id: "product0004"},
    {item:"Crushed Tomatoes", price: 4.99, category: "Fruits & Vegetables", image: "./images/product-img-12.jpg", id: "product0005"},
]

// DOM to obtain the HTML element by Id where products will be added.
let container = document.getElementById("main");
let productCounter = document.getElementById("product-counter");

// Array to push selected products to the cart.
const selectedProducts = [];

//DOM for modal elements (cart)
let cart = document.getElementById("modal");
let xButton = document.getElementById("x-close");
let closeButton = document.getElementById("close-button");
let cartMessage = document.getElementById("cart-message");
let noProductsSelected = document.getElementById("no-products-selected");
noProductsSelected.innerText = "You have not selected any product yet.";
let cartButton = document.getElementById("cart-button");

//Events for modal and its elements

cartButton.onclick = () => {
    cart.style.display = "block";
}

xButton.onclick = () => {
    cart.style.display = "none";
}

closeButton.onclick = () => {
    cart.style.display = "none";
}

// For loop to create the different cards for each product.
for (let i = 0; i < groceries.length; i++) {
    let card = document.createElement("div");
    card.classList = "col mb-5";
    let outerContainer = document.createElement("div");
    outerContainer.className = "card h-100";
    card.innerHTML = 
    `<!-- Product image-->
        <img class="card-img-top" src="${groceries[i].image}" alt="...">
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
            <!-- Product category-->
            <h6>${groceries[i].category}</h6>
            <!-- Product name-->
            <h5 class="fw-bolder">${groceries[i].item}</h5>
            <!-- Product price-->
            $${groceries[i].price}
            </div>
        </div>
        <!-- Product actions-->`;
        outerContainer.appendChild(card);
    // DOM to add an event to the "add to cart" button.
    let addToCartButton = document.createElement("div");
    addToCartButton.innerHTML = `<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div></div>`;
    addToCartButton.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";
    outerContainer.appendChild(addToCartButton);
    addToCartButton.onclick = () => {
        selectedProducts.push(groceries[i]);
        addToCart();
    }
    container.appendChild(outerContainer);
}

// // Initialization of variables.
// // Initial total amount is equal to 0.
// let totalAmount = 0;

// // Makes variables global.
// let product;
// let backShop;
// let backFilter;
// let backStart;