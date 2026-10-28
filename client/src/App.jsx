import { useMemo, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { products as productsSeed, formatPrice } from './data/products'

function Home({ onAdd, products }) {
  return <>
    <section className="hero page-wrap">
      <div className="hero-copy"><p className="eyebrow">BANO’S WOMENSWEAR & BAGS</p><h1>Made for<br /><em>her moments.</em></h1><p className="hero-description">Elegant women’s clothing and beautiful bags for everyday confidence, special occasions, and everything in between.</p><div className="hero-actions"><Link to="/shop" className="button button-light">Explore the collection <span>↗</span></Link><a className="text-link" href="#our-story">Discover bano</a></div><div className="hero-footnote"><span className="tiny-dot"/> Women’s clothing · Bags · Everyday elegance</div></div>
      <div className="hero-visual"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=90" alt="Editorial fashion look from the bano.store collection"/><div className="hero-image-caption"><span>THE NEW UNIFORM</span><span>01 / 04</span></div><div className="hero-stamp">B<br/>.</div></div>
    </section>
    <section className="ticker" aria-label="Brand values"><div className="ticker-track"><span>WOMENSWEAR</span><b>✳</b><span>BEAUTIFUL BAGS</span><b>✳</b><span>EVERYDAY ELEGANCE</span><b>✳</b><span>WOMENSWEAR</span><b>✳</b><span>BEAUTIFUL BAGS</span><b>✳</b></div></section>
    <section className="section page-wrap" id="new-arrivals"><div className="section-heading"><div><p className="eyebrow">THE LATEST FROM BANO’S</p><h2>New arrivals <em>for her.</em></h2></div><Link className="underlined-link" to="/shop">Shop all pieces <span>↗</span></Link></div><div className="product-grid">{products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div></section>
    <section className="manifesto" id="our-story"><div className="page-wrap manifesto-inner"><p className="eyebrow">THE BANO’S POINT OF VIEW</p><h2>For every version<br />of the woman you are.<br /><em>Dress like yourself.</em></h2><Link to="/shop" className="button button-outline">Find your everyday <span>↗</span></Link></div></section>
    <section className="section page-wrap categories-section"><div className="section-heading"><div><p className="eyebrow">EXPLORE THE COLLECTION</p><h2>Your wardrobe, <em>your way.</em></h2></div></div><div className="category-grid"><Link to="/shop?category=Clothing" className="category-tile"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85" alt="Women’s clothing collection"/><span>01 / WOMEN’S CLOTHING <b>↗</b></span></Link><Link to="/shop?category=Bags" className="category-tile"><img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" alt="Women’s bags collection"/><span>02 / BAGS <b>↗</b></span></Link><Link to="/shop?category=Bags" className="category-tile"><img src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=85" alt="Occasion bags for women"/><span>03 / OCCASION BAGS <b>↗</b></span></Link></div></section>
    <section className="newsletter"><div className="page-wrap newsletter-inner"><div><p className="eyebrow">A NOTE FROM BANO</p><h2>Good things,<br /><em>occasionally.</em></h2><p>Be the first to hear about new clothing collections, beautiful bags, and exclusive launches.</p></div><form className="newsletter-form" onSubmit={e => {e.preventDefault(); alert('Thanks for your interest! Newsletter signup will be connected to the store backend before launch.')}}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required/><button type="submit" aria-label="Subscribe">↗</button><small>By subscribing, you agree to receive occasional updates.</small></form></div></section>
  </>
}

function Shop({ onAdd, products }) {
  const params = new URLSearchParams(window.location.search)
  const [category, setCategory] = useState(params.get('category') || 'All pieces')
  const [sort, setSort] = useState('featured')
  const [search, setSearch] = useState('')
  const categories = ['All pieces', ...new Set(products.map(p => p.category))]
  const shown = useMemo(() => {
    let list = products.filter(p => (category === 'All pieces' || p.category === category) && `${p.name} ${p.category} ${p.color}`.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'low') list = [...list].sort((a,b) => a.price-b.price)
    if (sort === 'high') list = [...list].sort((a,b) => b.price-a.price)
    return list
  }, [category, sort, search])
  return <main className="page-wrap shop-page"><div className="shop-intro"><p className="eyebrow">BANO’S WOMEN’S COLLECTION</p><h1>Style made <em>personal.</em></h1><p>Explore women’s clothing, statement bags, and finishing touches chosen for modern everyday style.</p></div><div className="shop-toolbar"><div className="category-filters">{categories.map(c => <button key={c} className={category===c?'filter-chip active':'filter-chip'} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="shop-controls"><input aria-label="Search products" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pieces…"/><select aria-label="Sort products" value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div><p className="results-count">{shown.length} {shown.length===1?'piece':'pieces'}</p>{shown.length ? <div className="product-grid">{shown.map(p => <ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div> : <div className="empty-state"><h2>No pieces found.</h2><p>Try another search or category.</p><button className="button button-light" onClick={() => {setSearch('');setCategory('All pieces')}}>Clear filters</button></div>}</main>
}

function ProductDetails({ onAdd, products }) {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const [size, setSize] = useState('')
  if (!product) return <main className="page-wrap not-found"><h1>Piece not found.</h1><Link className="button button-light" to="/shop">Back to shop</Link></main>
  return <main className="page-wrap detail-page"><div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}</div><div className="detail-layout"><div className="detail-image"><img src={product.image} alt={product.name}/></div><div className="detail-info"><p className="eyebrow">{product.category.toUpperCase()} / BANO ESSENTIALS</p><h1>{product.name}</h1><p className="detail-price">{formatPrice(product.price)}</p><p className="detail-description">{product.description}</p><div className="detail-rule"/><div className="detail-option-head"><span>Colour</span><span>{product.color}</span></div><div className="color-swatch" title={product.color}/><div className="detail-option-head size-head"><span>Select size</span><button onClick={() => alert('Add the client-approved size guide before launch.')}>Size guide +</button></div><div className="size-options">{product.sizes.map(s => <button key={s} className={size===s?'size-option selected':'size-option'} onClick={() => setSize(s)}>{s}</button>)}</div><button className="button button-light add-to-bag" onClick={() => {if(!size){alert('Please select a size first.');return}onAdd(product,size)}}>Add to bag — {formatPrice(product.price)}</button><p className="shipping-note">Thoughtfully selected. Packed with care. Shipping details will be confirmed at checkout.</p><div className="detail-rule"/><details><summary>Product details</summary><p>{product.description} Colour: {product.color}. Available sizes: {product.sizes.join(', ')}.</p></details><details><summary>Shipping & returns</summary><p>Client-approved shipping and return policies will be displayed here before launch.</p></details></div></div></main>
}

function Cart({ cart, setCart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const updateQty = (key, quantity) => setCart(old => quantity < 1 ? old.filter(i => `${i.id}-${i.size}` !== key) : old.map(i => `${i.id}-${i.size}` === key ? {...i, quantity} : i))
  return <main className="page-wrap cart-page"><p className="eyebrow">YOUR SELECTION</p><h1>Your <em>bag.</em></h1>{!cart.length ? <div className="empty-state"><p>Your bag is waiting for something good.</p><Link className="button button-light" to="/shop">Explore the collection</Link></div> : <div className="cart-layout"><div className="cart-items">{cart.map(item => {const key = `${item.id}-${item.size}`;return <article className="cart-item" key={key}><img src={item.image} alt={item.name}/><div className="cart-item-info"><Link to={`/product/${item.id}`} className="product-name">{item.name}</Link><p className="product-color">Colour: {item.color} · Size: {item.size}</p><div className="quantity-control"><button onClick={() => updateQty(key,item.quantity-1)} aria-label="Decrease quantity">−</button><span>{item.quantity}</span><button onClick={() => updateQty(key,item.quantity+1)} aria-label="Increase quantity">+</button></div></div><div className="cart-item-end"><strong>{formatPrice(item.price*item.quantity)}</strong><button className="remove-link" onClick={() => updateQty(key,0)}>Remove</button></div></article>})}</div><aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><div><span>Shipping</span><span>Calculated at checkout</span></div><div className="summary-total"><span>Total before shipping</span><strong>{formatPrice(subtotal)}</strong></div><button className="button button-light checkout-button" onClick={() => alert('Checkout is not connected yet. The next milestone will add validated orders and delivery details.')}>Continue to checkout <span>↗</span></button><p>Taxes and delivery charges will be confirmed before placing your order.</p></aside></div>}</main>
}

function NotFound() { return <main className="page-wrap not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Not all who wander<br/>find the page.</h1><Link className="button button-light" to="/">Back to home</Link></main> }

export default function App() {
  const [products] = useState(productsSeed)
  const [cart, setCart] = useState(() => {try{return JSON.parse(localStorage.getItem('bano-cart') || '[]')}catch{return []}})
  const addToCart = (product, size) => {
    setCart(old => {const key = `${product.id}-${size}`;const next = old.some(i => `${i.id}-${i.size}`===key) ? old.map(i => `${i.id}-${i.size}`===key ? {...i,quantity:i.quantity+1}:i) : [...old,{...product,size,quantity:1}];localStorage.setItem('bano-cart',JSON.stringify(next));return next})
  }
  const updateCart = (updater) => setCart(old => {const next = typeof updater==='function'?updater(old):updater;localStorage.setItem('bano-cart',JSON.stringify(next));return next})
  const cartCount = cart.reduce((sum,item)=>sum+item.quantity,0)
  return <><Navbar cartCount={cartCount}/><Routes><Route path="/" element={<Home onAdd={addToCart} products={products}/>} /><Route path="/shop" element={<Shop onAdd={addToCart} products={products}/>} /><Route path="/product/:id" element={<ProductDetails onAdd={addToCart} products={products}/>} /><Route path="/cart" element={<Cart cart={cart} setCart={updateCart}/>} /><Route path="*" element={<NotFound/>}/></Routes><Footer/></>
}
