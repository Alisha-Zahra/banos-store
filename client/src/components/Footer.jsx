import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" id="our-story">
      <div className="page-wrap footer-top">
        <div><Link to="/" className="footer-logo" aria-label="bano.store home"><img src="/bano-logo.png" alt="Bano’s logo" /></Link><p className="footer-note">Women’s clothing and bags, chosen for every version of you.</p></div>
        <div className="footer-column"><span className="footer-heading">Explore</span><Link to="/shop?category=Clothing">Women’s clothing</Link><Link to="/shop?category=Bags">Bags</Link><a href="/#new-arrivals">New arrivals</a></div>
        <div className="footer-column"><span className="footer-heading">Need help?</span><a href="mailto:hello@bano.store">Contact us</a><span>Shipping & returns</span><span>Size guide</span></div>
        <div className="footer-column"><span className="footer-heading">Our promise</span><p>Women’s clothing and beautiful bags for everyday confidence, special occasions, and personal style.</p></div>
      </div>
      <div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} bano.store. All rights reserved.</span><span>Designed with intention.</span></div>
    </footer>
  )
}
