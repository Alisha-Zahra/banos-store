import { Router } from 'express'

const router = Router()
// Temporary API response for development. Next milestone: replace with MongoDB/Mongoose.
const demoProducts = [
  { id: 'bn-001', name: 'The Everyday Shirt', category: 'Tops', price: 3490, color: 'Chalk', sizes: ['S','M','L','XL'] },
  { id: 'bn-002', name: 'Relaxed Tailored Trousers', category: 'Bottoms', price: 4290, color: 'Onyx', sizes: ['S','M','L','XL'] },
  { id: 'bn-003', name: 'Soft Structure Jacket', category: 'Outerwear', price: 6990, color: 'Stone', sizes: ['S','M','L'] },
]
router.get('/', (_req, res) => res.json({ products: demoProducts, source: 'demo' }))
router.get('/:id', (req, res) => {
  const product = demoProducts.find(item => item.id === req.params.id)
  if (!product) return res.status(404).json({ message: 'Product not found' })
  res.json({ product })
})
export default router
