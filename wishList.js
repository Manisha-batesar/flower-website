// Get the container element where wishlist items will be rendered
const container = document.getElementById('wishlist-items-container');
const emptywishlistMessage = document.getElementById('empty-wishlist-message');

// Function to check if the product exists in the wishlist
function isProductInArray(product, array) {
  return array.some(item => item.id === product.id);
}

// Function to remove the product from the wishlist
function removeFromwishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Filter out the product that needs to be removed
  wishlist = wishlist.filter(product => product.id !== productId);

  // Save the updated wishlist back to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  // Re-render the wishlist items
  renderwishlistItems();
}

// Function to render the wishlist items
function renderwishlistItems() {
  // Get the wishlist data from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // If the wishlist is empty, show the "Please add a product to the wishlist" message
  if (wishlist.length === 0) {
    emptywishlistMessage.style.display = 'block';
    container.innerHTML = '';  // Clear the container
  } else {
    emptywishlistMessage.style.display = 'none';

    // Clear the existing content in the container before rendering the updated list
    container.innerHTML = '';

    // Loop through each product and generate HTML
    wishlist.forEach(product => {
      const productHTML = `
      <div class="box">
        <span class="discount">${product.discount}</span>
        <div class="image">
          <img src="${product.image}" alt="${product.name}">
          <div class="icons">
            <button href="#" class="fas fa-trash" onclick="removeFromwishlist(${product.id})"></button>
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

// Initially render the wishlist items
renderwishlistItems();
