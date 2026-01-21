# College Website Clone - MERN Stack

A professional clone of the SSGMCE (Shri Sant Gajanan Maharaj College of Engineering) website built using the MERN stack with a clean Client-Server architecture.

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library

## 📁 Project Structure

```
Web/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── App.jsx        # Main routing component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Tailwind CSS directives
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                # Backend Express application
    ├── config/            # Configuration files
    ├── controllers/       # Request handlers
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── server.js          # Server entry point
    └── package.json
```

## 🎨 Design Features

- **Professional Academic Design** - Blue and white color scheme matching SSGMCE branding
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Hover effects, transitions, and fade-in animations
- **Clean Architecture** - Strict separation between client and server
- **No Separate CSS Files** - All styling done with Tailwind CSS classes
- **Reusable Components** - StatCard, NewsCard, DepartmentCard, NewsTicker, PageHeader

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
cd "d:\Sem 7\Web"
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file (already exists, update if needed)
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key

# Start the server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🌐 Pages

1. **Home** - Hero section, statistics, news, events, and call-to-action
2. **About** - College information, vision, mission, achievements
3. **Departments** - Academic departments and programs offered
4. **Admissions** - Admission process, eligibility, programs, documents
5. **Faculty** - Faculty members with filtering by department
6. **Placements** - Placement statistics, top recruiters, training programs
7. **Research** - Research areas, publications, facilities, collaborations
8. **Events** - Campus events with category filtering
9. **Gallery** - Photo and video gallery with category filtering
10. **Contact** - Contact form, location map, department contacts

## 🔌 API Endpoints

### News
- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get single news item
- `POST /api/news` - Create news (admin)
- `PUT /api/news/:id` - Update news (admin)
- `DELETE /api/news/:id` - Delete news (admin)

### Faculty
- `GET /api/faculty` - Get all faculty members
- `GET /api/faculty/:id` - Get single faculty member
- `POST /api/faculty` - Add faculty (admin)
- `PUT /api/faculty/:id` - Update faculty (admin)
- `DELETE /api/faculty/:id` - Delete faculty (admin)

### Departments
- `GET /api/departments` - Get all departments
- `GET /api/departments/:id` - Get single department
- `POST /api/departments` - Add department (admin)
- `PUT /api/departments/:id` - Update department (admin)
- `DELETE /api/departments/:id` - Delete department (admin)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (admin)
- `PUT /api/events/:id` - Update event (admin)
- `DELETE /api/events/:id` - Delete event (admin)

### Notices
- `GET /api/notices` - Get all notices
- `GET /api/notices/:id` - Get single notice
- `POST /api/notices` - Create notice (admin)
- `PUT /api/notices/:id` - Update notice (admin)
- `DELETE /api/notices/:id` - Delete notice (admin)

## 🎨 Color Scheme

```javascript
colors: {
  'ssgmce-blue': '#003366',      // Primary blue
  'ssgmce-dark-blue': '#002244',  // Dark blue
  'ssgmce-light-blue': '#0066cc', // Light blue
  'ssgmce-orange': '#ff6600',     // Accent orange
  'ssgmce-light-orange': '#ff8533' // Light orange
}
```

## 📦 Key Components

### Reusable Components
- **Layout** - Wraps all pages with Navbar and Footer
- **Navbar** - Navigation with dropdown menus and mobile support
- **Footer** - Footer with links and contact information
- **StatCard** - Display statistics with icons
- **NewsCard** - Show news/announcements
- **DepartmentCard** - Display department information
- **NewsTicker** - Auto-rotating news ticker
- **PageHeader** - Page title banner

### Custom Hooks
- **useFetch** - Custom hook for API data fetching with loading and error states

## 🔧 Configuration Files

### Vite Config
- Proxy setup to forward API requests to backend
- Port configuration

### Tailwind Config
- Custom color palette for SSGMCE branding
- Extended theme configuration

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ssgmce
JWT_SECRET=your_secret_key_here
```

## 🚀 Production Deployment

### Backend
1. Set production environment variables
2. Deploy to services like Heroku, Railway, or Render
3. Ensure MongoDB Atlas connection

### Frontend
1. Build the production bundle: `npm run build`
2. Deploy to Vercel, Netlify, or similar services
3. Update API base URL to production backend

## 🤝 Contributing

This is an academic project. For any improvements or bug fixes, please follow standard Git workflow.

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as part of Web Development coursework - Semester 7

## 🙏 Acknowledgments

- Design inspiration from [SSGMCE Official Website](https://www.ssgmce.ac.in/)
- Built with modern MERN stack technologies
- Tailwind CSS for rapid UI development
