// Get the container element where cart items will be rendered
const container = document.getElementById('cart-items-container');
const emptyCartMessage = document.getElementById('empty-cart-message');

// Function to check if the product exists in the cart
function isProductInArray(product, array) {
  return array.some(item => item.id === product.id);
}

// Function to remove the product from the cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Filter out the product that needs to be removed
  cart = cart.filter(product => product.id !== productId);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Re-render the cart items
  renderCartItems();
}

// Function to render the cart items
function renderCartItems() {
  // Get the cart data from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // If the cart is empty, show the "Please add a product to the cart" message
  if (cart.length === 0) {
    emptyCartMessage.style.display = 'block';
    container.innerHTML = '';  // Clear the container
  } else {
    emptyCartMessage.style.display = 'none';

    // Clear the existing content in the container before rendering the updated list
    container.innerHTML = '';

    // Loop through each product and generate HTML
    cart.forEach(product => {
      const productHTML = `
      <div class="box">
        <span class="discount">${product.discount}</span>
        <div class="image">
          <img src="${product.image}" alt="${product.name}">
          <div class="icons">
            <button href="#" class="fas fa-trash" onclick="removeFromCart(${product.id})"></button>
            <button href="#" class="fas fa-share"></button>
          </div>
        </div>
        <div class="content">
          <h3>${product.name}</h3>
          <div class="price">${product.price} <span>${product.originalPrice}</span></div>
        </div>
      </div>
    `;

      // Append the generated HTML for each product to the container
      container.innerHTML += productHTML;
    });
  }
}

// Initially render the cart items
renderCartItems();
