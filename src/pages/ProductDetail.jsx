import { useParams, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaStar, FaArrowLeft } from 'react-icons/fa'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div className="container"><h2>Product not found</h2></div>
  }

  const handleAddToCart = () => {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <div className="container">
      <button className="btn-primary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
        <FaArrowLeft /> Back
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', background: 'white', padding: '2rem', borderRadius: '12px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', borderRadius: '12px' }}
        />

        <div>
          <div className="product-category">{product.category}</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <FaStar color="#fbbf24" size={20} />
            <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>{product.rating}</span>
            <span style={{ color: '#718096' }}>(128 reviews)</span>
          </div>

          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>
            ${product.price}
          </p>

          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '2rem' }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              <strong>Stock:</strong> {product.stock} available
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              <strong>Category:</strong> {product.category}
            </p>
          </div>

          <button className="btn-primary" onClick={handleAddToCart} style={{ width: '100%', padding: '1.25rem', fontSize: '1.25rem' }}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
