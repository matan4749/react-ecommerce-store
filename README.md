# 🛍️ ShopHub - Modern E-commerce Store

Professional e-commerce application built with **React 18**, featuring shopping cart, product filtering, and checkout flow.

![React](https://img.shields.io/badge/React-18.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🛒 Shopping Cart
- **Add to Cart** - Quick add from product cards
- **Quantity Management** - Increase/decrease quantities
- **Remove Items** - Easy item removal
- **Persistent Storage** - Cart saved to localStorage
- **Real-time Updates** - Instant cart count updates

### 📦 Products
- **12+ Products** - Diverse product catalog
- **Category Filtering** - Filter by Electronics, Sports, Home, Accessories
- **Product Details** - Detailed product pages
- **Ratings & Reviews** - Star ratings display
- **Stock Information** - Real-time stock availability

### 🎨 User Experience
- **Responsive Design** - Works on all devices
- **Toast Notifications** - User-friendly feedback
- **Smooth Animations** - Hover effects and transitions
- **Modern UI** - Clean, professional interface

### 💳 Checkout
- **Order Summary** - Clear pricing breakdown
- **Shipping Form** - Complete shipping information
- **Payment Form** - Card payment simulation
- **Order Confirmation** - Success notifications

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/matan4749/react-ecommerce-store.git
cd react-ecommerce-store

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
react-ecommerce-store/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx     # Navigation header
│   │   └── ProductCard.jsx # Product card component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage with products
│   │   ├── ProductDetail.jsx # Product details page
│   │   ├── Cart.jsx       # Shopping cart
│   │   └── Checkout.jsx   # Checkout form
│   ├── context/           # React Context
│   │   └── CartContext.jsx # Cart state management
│   ├── data/              # Static data
│   │   └── products.js    # Product catalog
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Components

### CartContext

Manages global cart state using React Context:

```jsx
import { useCart } from './context/CartContext'

function MyComponent() {
  const {
    cartItems,      // Array of cart items
    addToCart,      // Add product to cart
    removeFromCart, // Remove product
    updateQuantity, // Update item quantity
    getCartTotal,   // Get total price
    getCartCount    // Get total items
  } = useCart()
}
```

### Product Data

Products defined in `src/data/products.js`:

```js
{
  id: 1,
  name: 'Product Name',
  category: 'Electronics',
  price: 199.99,
  description: 'Product description',
  image: 'image-url',
  rating: 4.5,
  stock: 25
}
```

## 🎨 Styling

- **CSS Variables** for theming
- **Gradient Backgrounds** for visual appeal
- **Responsive Grid Layout** for products
- **Flexbox** for component layouts
- **Hover Effects** for interactivity

### Color Scheme

```css
--primary: #667eea;    /* Primary brand color */
--secondary: #764ba2;  /* Secondary accent */
--success: #06d6a0;    /* Success messages */
--danger: #ef476f;     /* Danger/Remove actions */
```

## 📱 Pages

### Home (`/`)
- Product grid with filtering
- Category buttons
- Quick add to cart

### Product Detail (`/product/:id`)
- Full product information
- Large product image
- Ratings and reviews
- Add to cart with quantity

### Cart (`/cart`)
- Cart items list
- Quantity controls
- Order summary
- Proceed to checkout

### Checkout (`/checkout`)
- Shipping form
- Payment information
- Order review
- Place order

## 🔧 Technologies

- **React 18** - UI library
- **React Router** - Navigation
- **React Icons** - Icon library
- **React Toastify** - Notifications
- **Vite** - Build tool
- **localStorage** - Cart persistence

## 💡 Features Breakdown

### Cart Management

```jsx
// Add item
addToCart(product)

// Update quantity
updateQuantity(productId, newQuantity)

// Remove item
removeFromCart(productId)

// Clear cart
clearCart()
```

### Category Filtering

```jsx
const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(p => p.category === selectedCategory)
```

### LocalStorage Persistence

Cart automatically saves to localStorage and restores on page load.

## 🎓 Learning Points

This project demonstrates:
- **React Context API** for state management
- **React Router** for multi-page apps
- **Component composition** patterns
- **Hooks** (useState, useEffect, useContext, useNavigate)
- **Event handling** in React
- **Conditional rendering**
- **Array methods** (map, filter, reduce)
- **localStorage** API
- **CSS Grid & Flexbox** layouts

## 🚀 Potential Enhancements

- [ ] User authentication
- [ ] Product search functionality
- [ ] Wishlist feature
- [ ] Product reviews & ratings
- [ ] Order history
- [ ] Admin panel
- [ ] Payment gateway integration
- [ ] Image zoom on product detail
- [ ] Related products suggestions
- [ ] Dark mode toggle

## 📝 License

MIT License - free to use for learning and projects

## 👨‍💻 Author

**Matan Amar**
- GitHub: [@matan4749](https://github.com/matan4749)
- Portfolio: Modern React Developer

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

---

**⭐ Star this repository if you find it useful!**
