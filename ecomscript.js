
let cart = [];
cart.push({name:"watch",price:2000})

// Function that add items to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}
//the cart shouold be updated after ever addition
// Function tat update the cart 
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function UpdateClock()
{
    const time = new Date();
    var hour =time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    hour=(hour<10)? "0"+hour:hour;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    var out=`${hour} : ${min} : ${sec}`;
    document.getElementById("clock").innerHTML=out;
}
setInterval(UpdateClock,1000);
UpdateClock();

// Initialize cart when page loads
// document.addEventListener("DOMContentLoaded", () => {
//     updateCart();
// });
