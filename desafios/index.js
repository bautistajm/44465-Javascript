// Function to extract price from array of clothes.
const getPrice = () => {
    for (const clothing of clothes){
        if (product === clothing.item) {
            return clothing.price;
        }
    }
}


// Array of objects for the different products.
const clothes = [
    {item:"t-shirt", price:10, color:"white"},
    {item:"pants", price:15, color:"blue"},
    {item:"shoes", price:35, color:"black"},
    {item:"socks", price:35, color:"white"},
    {item:"coat", price:50, color:"black"},
]

// Initialization of variables.
// Initial total amount is equal to 0.
let totalAmount = 0;

// Makes variables global.
let product;
let backShop;
let backFilter;
let backStart;

// Do While where the user is prompted to insert a product name to get the price.


do {
    // Prompts the user to choose between buy an item or filter by color.
    userAction = prompt("Type 'buy' to select products or type 'filter' to filter products by color.").toLowerCase();
    // Starts 'do while' for shopping.
    if (userAction === "buy") {
        do {
            // User inserts product name
            product = prompt("Insert product name").toLowerCase();
            // Cheks if the product exists.
            if (getPrice()) {
                let price = getPrice();
                // Display the product name and price.
                alert(`The price of ${product} is $${price}`);
                // Adds price to total amount.
                totalAmount = totalAmount + price;
                // Asks user if they would continue shopping.
                backShop = confirm("Would you like to continue shopping?");
            } else {
                // Message if product is not found.
                alert("Unfortunately we don't have this product on stock at the moment.")
                // Asks user if they would continue shopping.
                backShop = confirm("Would you like to continue shopping?");
            }
        // Loop continues if the user wants to keep shopping.
        } while (backShop)
        // Display message with total amount once the loop is broken.
        alert(`The total amount of your cart is $${totalAmount}`);
    } else if (userAction === "filter") {
        // Starts 'do while' for color filter.
        do {
            // Prompts the user to type a color.
            colorSelection = prompt("Please type a color").toLowerCase();
            // Triggers the result of the filtering.
            const result = clothes.filter((e) => e.color.includes(colorSelection));
            // Checks if there is an item with color input by the user.
            const colorCheck = clothes.find((e) => e.color === colorSelection);
            if (colorCheck) {
                // Allows to show object properties in alert message.
                alert(JSON.stringify(result));
                // Asks user if they would like to check for another color.
                backFilter = confirm("Would you like to check another color?");
            } else {
                // Message when the color has not been found.
                alert(`Unfortunately there are no ${colorSelection} clothing items.`);
                // Asks user if they would like to check for another color.
                backFilter = confirm("Would you like to check another color?");
            }
        // Breaks the loop if the user doesn't want to look for another color.
        } while (backFilter)
    }
    // Asks the user if they would like to buy or filter again.
    backStart = confirm("Would you like to start over?");
// Breaks the loop when the user decides to quit.
} while (backStart)