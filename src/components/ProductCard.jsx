import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <FaStar color="#fbbf24" /> {product.rating}
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="btn-primary" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
