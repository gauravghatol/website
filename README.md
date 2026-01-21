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
