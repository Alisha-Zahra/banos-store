# Bano’s — Women’s clothing & bags storefront

A premium, dark customer-facing storefront for Bano’s women’s clothing and bags, built with React + Vite. An Express API scaffold is included for future backend work.

## Requirements
- Node.js (use a current LTS release)
- npm
- MongoDB Atlas account or a local MongoDB instance for the database milestone

## 1. Run the frontend
Open a terminal in `client`:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## 2. Run the API scaffold
Open a second terminal in `server`:

```bash
npm install
```

Copy `.env.example` to `.env`, then run:

```bash
npm run dev
```

Test `http://localhost:5000/api/health` and `http://localhost:5000/api/products`.

## Included now
- Responsive dark storefront for Bano’s women’s clothing and bags
- Homepage, collection grid, category filters, search and sorting
- Product detail pages with size selection
- Local cart with quantity controls and saved cart state
- Express health endpoint and temporary demo product API

## Important before launch
- Demo products, prices, image URLs, newsletter response and checkout are placeholders.
- The current checkout button does not create an order or accept payment.
- The included API uses demo product data, not MongoDB yet.
- Do not take real customer orders until database persistence, server-side price/stock validation, authentication where needed, payment verification, order notifications, policies and security testing are implemented.
- Replace demo imagery with client-approved product photography and confirm product details, currency, delivery charges and return policies.
- Keep `.env` private and never commit secrets to GitHub.

## Next implementation milestones
1. Connect MongoDB and add a Mongoose Product model.
2. Make the frontend load products from the API.
3. Implement checkout with server-side validation and persistent orders.
4. Add a secure product-management workflow when the client is ready for it.
5. Integrate the client's selected payment and delivery workflows, test and deploy.

## Brand notes

The supplied Bano’s logo is stored at `client/public/bano-logo.png` and displayed in the header and footer. The storefront is customer-facing only; no admin page or admin link is included. Sample catalog items are examples and must be replaced with client-approved products, prices, sizes, and photos.

## Run locally

Terminal 1:
```powershell
cd client
npm install
npm run dev
```

Terminal 2:
```powershell
cd server
npm install
copy .env.example .env
npm run dev
```

The storefront is a development prototype. Checkout is not yet connected to persistent order creation or a payment provider.
