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

let message = getPrice("t-shirt")
console.log(message)