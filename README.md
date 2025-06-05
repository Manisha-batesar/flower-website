# 🌸 Flower Shop Website

A beautiful and responsive e-commerce website for a flower shop built with HTML, CSS, and JavaScript. The website features a modern UI with product listings, shopping cart functionality, and a wishlist feature.

## 🚀 Features

- Responsive design that works on desktop and mobile devices
- Beautiful product gallery with flower arrangements
- Shopping cart functionality
  - Add/remove items
  - View cart contents
  - Persistent cart data using localStorage
- Wishlist functionality
  - Add/remove items to wishlist
  - View wishlist items
  - Persistent wishlist data using localStorage
- Product features
  - Display product discounts
  - Show original and discounted prices
  - Quick action buttons (add to cart, wishlist, share)
- Interactive UI elements
  - Smooth scrolling
  - Hover effects
  - Responsive navigation menu
- About section with auto-playing video
- Contact information section
- Footer with quick links and location information

## 📁 Project Structure

```
flower-Web/
├── assets/                  # Images and media files
│   ├── background-img.jpg
│   ├── flower-*.jpg        # Product images
│   ├── flower-video.mp4    # About section video
│   ├── icons-img*.png      # Feature icons
│   └── review*.png/jpg     # Review section images
├── cart.html               # Shopping cart page
├── cart.js                 # Cart functionality
├── index.html             # Main landing page
├── script.js              # Main JavaScript file
├── style.css              # Global styles
├── wishList.html          # Wishlist page
└── wishList.js            # Wishlist functionality
```

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Local Storage API

## 🌟 Key Features Implementation

### Shopping Cart
- Products can be added to cart from the main product listing
- Cart data persists across sessions using localStorage
- Users can remove items directly from the cart
- Empty cart state handling

### Wishlist
- Products can be added to wishlist from the main product listing
- Wishlist data persists across sessions using localStorage
- Users can remove items directly from the wishlist
- Empty wishlist state handling

### Product Management
- Dynamic product rendering from JavaScript array
- Discount calculation and display
- Price formatting and original price display
- Interactive product cards with hover effects

## 🔧 Local Development

1. Clone the repository
2. Open the project folder in your code editor
3. Launch the `index.html` file in a web browser

No build process or dependencies required - this is a vanilla JavaScript project that runs directly in the browser.

## 🎨 Customization

### Adding New Products

To add new products, edit the `products` array in `script.js`:

```javascript
const products = [
  {
    id: [unique_id],
    name: "flower pot",
    image: "./assets/[image_name]",
    discount: "-XX%",
    price: "$XXX.XX",
    originalPrice: "$XXX.XX"
  },
  // Add more products...
];
```

### Styling

The project uses a CSS variables for easy theme customization. The primary color can be modified in `style.css`:

```css
:root {
  --primary-color: rgb(207, 50, 134);
}
```

## 👩‍💻 Author

Created by Manisha Batesar

## 📝 License

This project is free to use and does not contains any license.
