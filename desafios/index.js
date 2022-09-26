// Function to extract price from array of clothes.
const getPrice = () => {
    for (const grocery of groceries){
        if (product === grocery.item) {
            return grocery.price;
        }
    }
}

// Array of objects for the different products.
const groceries = [
    {item:"Onion Flavour Potato", price: 3.99, category: "Snacks", image: "./images/product-img-4.jpg"},
    {item:"Blueberry Greek Yogurt", price: 5, category: "Dairy", image: "./images/product-img-6.jpg"},
    {item:"Salted Instant Popcorn", price: 2.50, category: "Instant Food", image: "./images/product-img-5.jpg"},
    {item:"Britannia Cheese Slices", price: 6.25, category: "Dairy", image: "./images/product-img-7.jpg"},
    {item:"Crushed Tomatoes", price: 4.99, category: "Fruits & Vegetables", image: "./images/product-img-12.jpg"},
]

// DOM to obtain the HTML element by Id where products will be added.
let container = document.getElementById("main");

// For loop to create the different cards for each product.
for (let i = 0; i < groceries.length; i++) {
    let card = document.createElement("div");
    card.classList = "col mb-5";
    console.log(card.classList)
    card.innerHTML = 
    `<div class="card h-100">
        <!-- Product image-->
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
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
    </div>`;
    container.appendChild(card);
}






// // Initialization of variables.
// // Initial total amount is equal to 0.
// let totalAmount = 0;

// // Makes variables global.
// let product;
// let backShop;
// let backFilter;
// let backStart;

