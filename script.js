// Greeting according to the time
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

//Adding to the cart 

let cartCount = 0;
const cartCountDisplay = document.querySelector("#cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountDisplay.textContent = cartCount;
    alert("Items added to cart!");
  });
});
// Array of products
const products = [
  { id: 1, name: "Smartphone", price: 699, description: "Latest model with high-end features." },
  { id: 2, name: "Laptop", price: 999, description: "Lightweight and powerful." },
  { id: 3, name: "Headphones", price: 199, description: "Noise-cancelling, over-ear headphones." },
  { id: 4, name: "Smartwatch", price: 249, description: "Track your health and fitness." }
];
