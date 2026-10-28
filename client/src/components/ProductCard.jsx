import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image-link" aria-label={`View ${product.name}`}>
          <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        </Link>
        {product.label && <span className="product-label">{product.label}</span>}
        <button className="quick-add" onClick={() => onAdd(product, product.sizes[0])}>+ Quick add</button>
      </div>
      <div className="product-meta"><div><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><p className="product-color">{product.color}</p></div><span className="product-price">{formatPrice(product.price)}</span></div>
    </article>
  )
}
