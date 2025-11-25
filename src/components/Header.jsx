import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHome } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

function Header() {
  const { getCartCount } = useCart()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            ShopHub
          </Link>

          <nav className="nav">
            <Link to="/" className="nav-link">
              <FaHome /> Home
            </Link>
            <Link to="/cart" className="cart-icon nav-link">
              <FaShoppingCart />
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
