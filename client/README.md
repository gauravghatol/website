# SSGMCE Frontend - React + Vite + Tailwind CSS

Frontend application for the SSGMCE College Website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Directory Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── StatCard.jsx
│   │   ├── NewsCard.jsx
│   │   ├── DepartmentCard.jsx
│   │   ├── NewsTicker.jsx
│   │   └── PageHeader.jsx
│   │
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Departments.jsx
│   │   ├── Admissions.jsx
│   │   ├── Faculty.jsx
│   │   ├── Placements.jsx
│   │   ├── Research.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   │
│   ├── hooks/          # Custom React hooks
│   │   └── useFetch.js
│   │
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind directives
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Components Overview

### Layout Components
- **Layout** - Wrapper component with Navbar and Footer
- **Navbar** - Responsive navigation with dropdown menus
- **Footer** - Footer with quick links and contact info

### Reusable Components
- **StatCard** - Display statistics with icons and hover effects
- **NewsCard** - News/announcement cards with date and category
- **DepartmentCard** - Department information cards
- **NewsTicker** - Auto-rotating news ticker
- **PageHeader** - Page title banner with gradient background

### Pages
All pages use the Layout wrapper and are styled exclusively with Tailwind CSS.

## 🎨 Styling

- **Framework**: Tailwind CSS 3.3
- **Strategy**: Utility-first approach
- **Colors**: Custom SSGMCE color palette
- **Responsive**: Mobile-first design
- **Animations**: Hover effects, transitions, fade-in

### Custom Colors
```javascript
'ssgmce-blue': '#003366'
'ssgmce-dark-blue': '#002244'
'ssgmce-light-blue': '#0066cc'
'ssgmce-orange': '#ff6600'
'ssgmce-light-orange': '#ff8533'
```

## 🔌 API Integration

- **Base URL**: `http://localhost:5000/api` (proxied in Vite config)
- **HTTP Client**: Axios
- **Custom Hook**: `useFetch` for data fetching with loading/error states

### Usage Example
```javascript
import useFetch from '../hooks/useFetch';

const { data, loading, error } = useFetch('/news');
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 📦 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0

### UI & Styling
- tailwindcss: ^3.3.0
- react-icons: ^4.12.0

### HTTP & Data
- axios: ^1.6.0

### Dev Dependencies
- @vitejs/plugin-react: ^4.2.0
- vite: ^5.0.0
- eslint: ^8.55.0
- autoprefixer: ^10.4.16
- postcss: ^8.4.32

## ⚙️ Configuration

### Vite Config
```javascript
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true
    }
  }
}
```

### Tailwind Config
- Custom colors for SSGMCE branding
- Extended theme configuration
- Custom animations and transitions

## 🌐 Routing

```javascript
/ → Home
/about → About
/departments → Departments
/admissions → Admissions
/faculty → Faculty
/placements → Placements
/research → Research
/events → Events
/gallery → Gallery
/contact → Contact
```

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and fully responsive.

## 🎯 Features

- ✅ Clean component architecture
- ✅ No separate CSS files (Tailwind only)
- ✅ Reusable component library
- ✅ Custom hooks for data fetching
- ✅ Responsive navigation with mobile menu
- ✅ Smooth animations and transitions
- ✅ Professional academic design
- ✅ SEO-friendly routing

## 🔍 Performance

- Code splitting with React Router
- Lazy loading for images
- Optimized Vite build
- Minimal bundle size with tree-shaking

## 🐛 Debugging

```bash
# Check for errors
npm run lint

# View in browser
http://localhost:5173
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

Follow the component structure and Tailwind-only styling approach when adding new features.
