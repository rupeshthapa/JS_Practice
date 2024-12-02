// Dynamic Greeting Based on Time
const heroSection = document.querySelector("#home"); // Selects the Hero Section in HTML
const greeting = document.createElement("p"); // Creates a new <p> tag

// Get the current hour
const hours = new Date().getHours();

// Determine the greeting based on time
if (hours < 12) {
  greeting.textContent = "Good Morning! Start your shopping now!";
} else if (hours < 18) {
  greeting.textContent = "Good Afternoon! Deals are waiting for you!";
} else {
  greeting.textContent = "Good Evening! Relax and shop at your pace!";
}

// Add the greeting to the Hero Section
heroSection.appendChild(greeting);









// Add to Cart Functionality
let cartCount = 0; // Initialize cart count to 0
const cartCountDisplay = document.querySelector("#cart-count"); // Selects the <span> for cart count

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Add click event to each button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++; // Increase cart count by 1
    cartCountDisplay.textContent = cartCount; // Update the cart count in the UI
    alert("Item added to cart!"); // Show a popup message
  });
});
