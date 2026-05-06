# PawnPal

PawnPal is a React web app for browsing products and deals, with a cart flow and basic pages like Home, Products, Cart, Checkout, Payment, Login, Seller Signup, and a user dashboard.

## Tech stack / tools

- **Frontend**: React 19
- **Routing**: React Router DOM
- **UI**: CSS (component/page CSS files) + `react-icons`
- **Carousels**: `react-slick` + `slick-carousel`
- **Build tooling**: Vite
- **Linting**: ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- **`npm run dev`**: start Vite dev server
- **`npm run build`**: production build
- **`npm run preview`**: preview the build locally
- **`npm run lint`**: run ESLint

## Project structure (high level)

- **`src/Pages/`**: route pages (Home, Products, Cart, Checkout, Payment, etc.)
- **`src/components/`**: reusable UI components (Navbar, Footer, sliders, etc.)
- **`src/assets/`**: images/icons used by the UI
