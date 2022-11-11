// Function to extract price from array of groceries.
const getPrice = () => {
    for (const grocery of groceries){
        if (product === grocery.item) {
            return grocery.price;
        }
    }
}

//Function to delete a product from the cart.
const deleteItem = () => {
    let indexOfProductToBeDeleted = selectedProducts.findIndex(pr => pr.item === productToBeDeleted);
    selectedProducts.splice(indexOfProductToBeDeleted,1);
}

//Function to add a product to the cart.
const addToCart = () => {
    let line;
    //I check if there are any products in the cart or not.
    if (selectedProducts.length === 0) {
        noProductsSelected.innerText = "You have not selected any product yet.";
    } else {
        //I create a line item for each of the products added.
        for (let i = 0; i < selectedProducts.length; i++) {
            noProductsSelected.innerText = "";
            line = document.createElement("li");
            line.classList.add("line");
            line.innerText = `${selectedProducts[i].item}, $${selectedProducts[i].price}`;
            containerOfProducts.appendChild(line);
            selectionOfProducts.push(selectedProducts[i]);
            //I create a button to remove each of the products added.
            let removeCrossButton = document.createElement("div");
            removeCrossButton.classList.add("removecross");
            removeCrossButton.innerText = "❌";
            removeCrossButton.onclick = () => {
                productToBeDeleted = selectionOfProducts[i].item;
                console.log(productToBeDeleted);
                deleteItem();
                localStorage.setItem("selectedproducts", JSON.stringify(selectedProducts));
                cartMessage.removeChild(line);
                productCounter.innerText = selectedProducts.length;
                localStorage.setItem("productcounter", selectedProducts.length);
                if (selectedProducts.length === 0) {
                    noProductsSelected.innerText = "You have not selected any product yet.";
                }
                if (selectedProducts.length === 0) {
                    buyButton.style.display = "none";
                }
            }
            line.appendChild(removeCrossButton);
            if (selectedProducts.length > 0) {
                buyButton.style.display = "block";
            } 
            }
        }
        let lastProductAdded = selectedProducts.length - 1;
        //Tostify to show which product has been added to the cart.
        Toastify({

        text: `You added ${selectedProducts[lastProductAdded].item}  to the cart.`,

        duration: 3000

        }).showToast();
        cartMessage.appendChild(line);
        localStorage.setItem("selectedproducts", JSON.stringify(selectedProducts));
        productCounter.innerText = selectedProducts.length;
        localStorage.setItem("productcounter", selectedProducts.length);
    }



const renderizeProducts = () => {
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
}

//Asynchronic function to read the objects.json file and obtain the objects to renderize the products as cards.
async function getJsonObjects() {
    const URLJSON = "products.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    groceries = data;
    renderizeProducts();
}

window.onload = () => {
    getJsonObjects();
}

// DOM to obtain the HTML element by Id where products will be added.
let container = document.getElementById("main");
let productCounter = document.getElementById("product-counter");

//Make global variable for local api
let groceries = [];

// Array to push selected products to the cart.
const selectedProducts = [];

// Array to push deleted products from the cart
let selectionOfProducts = [];

//DOM for modal elements (cart)
let cart = document.getElementById("modal");
let xButton = document.getElementById("x-close");
let closeButton = document.getElementById("close-button");
let cartMessage = document.getElementById("cart-message");
let noProductsSelected = document.getElementById("no-products-selected");
noProductsSelected.innerText = "You have not selected any product yet.";
let cartButton = document.getElementById("cart-button");
let containerOfProducts = document.createElement("div");
let buyButton = document.getElementById("buy-button");

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

buyButton.onclick = () => {
    sum = 0;
    selectedProducts.forEach(element => {
    sum += element.price;
    });
    swal ( "Success" ,  "Your purchase is complete. The total amount is $" + sum.toFixed(2) ,  "success");
    selectedProducts.splice(0,(selectedProducts.length-1));
    localStorage.clear();
    let okButton = document.getElementsByClassName("swal-button--confirm");
    console.log(sum);
    okButton[0].id = "finished";
    let finished = document.getElementById("finished");
    finished.onclick = () => {
        document.location.reload(true);
    }
}

//I retrieve the products stored in local storage.
let productsInStorage = JSON.parse(localStorage.getItem("selectedproducts"));
if ((productsInStorage !== null)) {
    for (let i = 0; i < productsInStorage.length; i++) {
        selectedProducts.push(productsInStorage[i]);
    }
    for (let i = 0; i < selectedProducts.length; i++) {
        productCounter.innerText = localStorage.getItem("productcounter");
        noProductsSelected.innerText = "";
        let line = document.createElement("li");
        line.classList.add("line");
        line.innerText = `${selectedProducts[i].item}, $${selectedProducts[i].price}`;
        cartMessage.appendChild(line);
        selectionOfProducts.push(selectedProducts[i]);
        let removeCrossButton = document.createElement("div");
        removeCrossButton.classList.add("removecross");
        removeCrossButton.innerText = "❌";
        removeCrossButton.onclick = () => {
            productToBeDeleted = selectionOfProducts[i].item;
            console.log(productToBeDeleted);
            deleteItem();
            localStorage.setItem("selectedproducts", JSON.stringify(selectedProducts));
            cartMessage.removeChild(line);
            productCounter.innerText = selectedProducts.length;
            localStorage.setItem("productcounter", selectedProducts.length);
            if (selectedProducts.length === 0) {
                noProductsSelected.innerText = "You have not selected any product yet.";
            }
            if (selectedProducts.length === 0) {
                buyButton.style.display = "none";
            }
        }
        line.appendChild(removeCrossButton);
        if (selectedProducts.length > 0) {
            buyButton.style.display = "block";
        } 
    };
}



//Total amount sum
let sum;

