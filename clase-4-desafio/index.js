// Function to assign prices to the different products.
const getPrice = (userInput) => {
    switch(userInput) {
        case "t-shirt":
            return 10;
        case "pants":
            return 15;
        case "shoes":
            return 35;
        case "socks":
            return 2;
        case "coat":
            return 50;
        default:
            return false;
    }
}

// Initialization of variables.
// Initial total amount is equal to 0.
let totalAmount = 0;

// Do While where the user is prompted to insert a product name to get the price.
do {
    // User inserts product name
    let product = prompt("Insert product name").toLowerCase();
    // Cheks if the product exists.
    if (getPrice(product)) {
        let price = getPrice(product);
        // Display the product name and price.
        alert(`The price of ${product} is $${price}`);
        // Adds price to total amount.
        totalAmount = totalAmount + price;
        // Asks user if they would continue shopping.
        shop = confirm("Would you like to continue shopping?");
    }else{
        // Message if product is not found.
        alert("Unfortunately we don't have this product on stock at the moment.")
        // Asks user if they would continue shopping.
        shop = confirm("Would you like to continue shopping?");
    }
// Loop continues if the user wants to keep shopping.
}while(shop)
// Display message with total amount once the loop is broken.
alert(`The total amount of your cart is $${totalAmount}`);