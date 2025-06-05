const products = [
  { id: 1, name: "flower pot", image: "./assets/flower-img1.jpg", discount: "-10%", price: "$144.00", originalPrice: "$160.00" },
  { id: 2, name: "flower pot", image: "./assets/flower-img2.jpg", discount: "-15%", price: "$170.00", originalPrice: "$200.00" },
  { id: 3, name: "flower pot", image: "./assets/flower-img3.jpg", discount: "-5%", price: "$119.00", originalPrice: "$125.00" },
  { id: 4, name: "flower pot", image: "./assets/flower-img4.jpg", discount: "-20%", price: "$132.00", originalPrice: "$165.00" },
  { id: 5, name: "flower pot", image: "./assets/flower-img5.jpg", discount: "-17%", price: "$78.85", originalPrice: "$95.00" },
  { id: 6, name: "flower pot", image: "./assets/flower-img6.jpg", discount: "-3%", price: "$111.55", originalPrice: "$115." },
  { id: 7, name: "flower pot", image: "./assets/flower-img7.jpg", discount: "-18%", price: "$82.00", originalPrice: "$100.00" },
  { id: 8, name: "flower pot", image: "./assets/flower-img8.jpg", discount: "-20%", price: "$164.00", originalPrice: "$205.00" },
  { id: 9, name: "flower pot", image: "./assets/flower-img9.jpg", discount: "-5%", price: "$142.45", originalPrice: "$150.00" },
  { id: 10, name: "flower pot", image: "./assets/flower-img10.jpg", discount: "-9%", price: "$162.89", originalPrice: "$179.99" },
  { id: 11, name: "flower pot", image: "./assets/flower-img11.jpg", discount: "-12%", price: "$88.00", originalPrice: "$99.99" },
  { id: 12, name: "flower pot", image: "./assets/flower-img12.jpg", discount: "-16%", price: "$90.79", originalPrice: "$108.09" }
];

 // Function to check if the product is already in the cart
 function isProductInArray(product, array) {
  return array.some(item => item.id === product.id);
}

// Add product to localStorage cart
function addToCart(product) {
  // Get the current cart from localStorage or initialize an empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product is already in the cart
  if (!isProductInArray(product, cart)) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
  } else {
    alert(`${product.name} is already in your cart.`);
  }
}

// Add product to localStorage wishlist
function addToWishlist(product) {
  // Get the current wishlist from localStorage or initialize an empty array
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if product is already in the wishlist
  if (!isProductInArray(product, wishlist)) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${product.name} has been added to your wishlist.`);
  } else {
    alert(`${product.name} is already in your wishlist.`);
  }
}

// Add product to page dynamically
function renderProducts() {
  // Get the container element
  const container = document.getElementById('products-container');

  // Loop through each product and generate the HTML
  products.forEach(product => {
    const productHTML = `
    <div class="box">
      <span class="discount">${product.discount}</span>
      <div class="image">
        <img src="${product.image}" alt="${product.name}">
        <div class="icons">
          <button href="#" class="fas fa-heart" onclick='addToWishlist(${JSON.stringify(product)})'></button>
          <button href="#" class="cart-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
          <button href="#" class="fas fa-share"></button>
        </div>
      </div>
      <div class="content">
        <h3>${product.name}</h3>
        <div class="price">${product.price} <span>${product.originalPrice}</span></div>
      </div>
    </div>
  `;

    // Append the generated HTML to the container
    container.innerHTML += productHTML;
  });

}
renderProducts();