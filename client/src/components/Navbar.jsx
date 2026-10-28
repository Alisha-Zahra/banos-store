import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ cartCount }) {
  return (
    <header className="site-header">
      <div className="announcement">A considered wardrobe. Made for every day.</div>
      <nav className="navbar page-wrap">
        <button className="mobile-menu" aria-label="Menu" onClick={() => document.querySelector('.nav-links')?.classList.toggle('nav-open')}>☰</button>
        <Link to="/" className="brand-logo" aria-label="bano.store home"><img src="/bano-logo.png" alt="Bano’s luxury fashion logo" /></Link>
        <div className="nav-links">
          <NavLink to="/shop?category=Clothing">Women’s clothing</NavLink>
          <NavLink to="/shop?category=Bags">Bags</NavLink>
          <a href="/#new-arrivals">New arrivals</a>
          <a href="/#our-story">Our story</a>
        </div>
        <Link to="/cart" className="cart-link" aria-label={`Shopping bag, ${cartCount} items`}>Bag <span className="cart-count">{cartCount}</span></Link>
      </nav>
    </header>
  )
}
