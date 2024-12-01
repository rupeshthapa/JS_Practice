//Dynamic greeting based on time
const heroSection = document.querySelector("#home");
const greeting = document.createElement("p");

const hours = new Date().getHours();
if(hours < 12){
    greeting.textContent = "Good Morning! Start your shopping now!";
}else if(hours < 18){
    greeting.textContent = "Good Afternoon! Deals are waiting for you!";
}else{
    greeting.textContent = "Good Evening! Relax and shop at your pace!";
}
heroSection.appendChild(greeting);

//Add to cart functionality
let cartCount = 0;
const cartCountDisplay = document.querySelector("#cart-count");

const addToCartButtons = document.querySelector(".add-to-cart");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
         cartCount++;
         cartCountDisplay.textContent = cartCount;
         alert("Item added to cart!");
    });
});