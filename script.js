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
let cartCount = 0; // Initialize cart count
const cartCountDisplay = document.querySelector("#cart-count"); // Select cart counter

// Event delegation for dynamically added buttons
productsSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++; // Increment cart count
    cartCountDisplay.textContent = cartCount; // Update the cart display
    const productId = e.target.getAttribute("data-id"); // Get the product ID
    const product = products.find((item) => item.id === parseInt(productId)); // Find product
    alert(`Added to cart: ${product.name}`); // Notify user
  }
});



// Array of products
const products = [
  { id: 1, name: "Smartphone", price: 699, description: "Latest model with high-end features." },
  { id: 2, name: "Laptop", price: 999, description: "Lightweight and powerful." },
  { id: 3, name: "Headphones", price: 199, description: "Noise-cancelling, over-ear headphones." },
  { id: 4, name: "Smartwatch", price: 249, description: "Track your health and fitness." }
];
