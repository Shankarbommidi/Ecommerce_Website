# Modern E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Vite. Features a clean UI design with Tailwind CSS and shadcn/ui components.

## 🚀 Features

- Responsive design that works on desktop and mobile
- Shopping cart functionality with context API
- Product grid with filterable categories
- Modern UI components using shadcn/ui
- Hero section with featured products
- Fast performance with Vite build tool

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ecommerce_Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

## 📁 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # React components
│   └── ui/        # shadcn/ui components
├── contexts/       # React Context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── pages/         # Page components
```

## 🧩 Components

- `Header` - Navigation and cart summary
- `Hero` - Featured products banner
- `ProductGrid` - Display products in a grid layout
- `ProductCard` - Individual product display
- `ShoppingCart` - Cart functionality
- `Footer` - Site footer with links

## 🔧 Development

To add new products, modify the product data in the appropriate data file. The site uses React Context for state management, particularly for the shopping cart functionality.

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](<repository-url>/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
