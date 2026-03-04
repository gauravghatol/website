# SSGMCE College Website - MERN Stack

A comprehensive web application for **Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)** built with the MERN stack, featuring a full-fledged admin panel, dynamic content management, and modern UI/UX.

## 🌟 Features

### 🎓 Public Portal
- **Home Page** - Hero section, news ticker, events showcase, and testimonials
- **About** - College information, vision & mission, administration
- **Academics** - Programs, departments, faculty information
- **Departments** - CSE, IT, Electronics, Electrical, Mechanical, MBA, Applied Sciences
- **Placements** - Statistics, recruiters, placement records with charts
- **Research** - Publications, projects, and research initiatives
- **IQAC** - Quality assurance documents, members, and news
- **NIRF Rankings** - Interactive ranking visualizations and archives
- **Events & News** - Dynamic event listings and news updates
- **Documents** - Downloadable resources and official documents
- **Contact** - Contact information and inquiry form

### 🔐 Admin Panel
- **Dashboard** - Overview of all content management
- **Content Management** - Edit pages with rich text (Markdown/WYSIWYG)
- **Department Management** - CRUD operations for all departments
- **Faculty Management** - Add/edit faculty with images
- **Event Management** - Create and manage college events
- **News Management** - Publish and update news articles
- **Notice Management** - Post notices and announcements
- **Document Management** - Upload and organize documents
- **Placement Management** - Update placement statistics and records
- **IQAC Management** - Manage IQAC documents and members
- **NIRF Management** - Update ranking data and parameters
- **Research Management** - Add publications and projects
- **Popup Banners** - Manage homepage popup announcements
- **Authentication** - Secure JWT-based login system

## 🚀 Tech Stack

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js** - JavaScript runtime
- ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) **Express.js** - RESTful API framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication & authorization
- **Multer** - File upload handling
- **bcryptjs** - Password hashing

### Frontend
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) **React 18** - UI library
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - Build tool and dev server
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Comprehensive icon library
- **Framer Motion** - Smooth animations
- **Chart.js & Recharts** - Data visualization
- **React Quill** - Rich text editor
- **React Markdown** - Markdown rendering

## 📁 Project Structure

```
website/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── admin/              # Admin panel components
│   │   │   │   ├── AdminLayout.jsx
│   │   │   │   ├── AdminSidebar.jsx
│   │   │   │   ├── EditableText.jsx
│   │   │   │   ├── EditableImage.jsx
│   │   │   │   └── MarkdownEditor.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NIRFChart.jsx
│   │   │   ├── PlacementCharts.jsx
│   │   │   └── RecruiterSlider.jsx
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── admin/              # Admin pages
│   │   │   ├── departments/        # Department pages
│   │   │   ├── placements/
│   │   │   ├── iqac/
│   │   │   └── documents/
│   │   ├── contexts/               # React contexts
│   │   │   └── EditContext.jsx
│   │   ├── hooks/                  # Custom hooks
│   │   ├── utils/                  # Utility functions
│   │   ├── config/                 # Configuration
│   │   ├── App.jsx                 # Main routing
│   │   └── main.jsx                # Entry point
│   ├── public/                     # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                          # Backend Express application
    ├── config/
    │   └── db.js                   # MongoDB connection
    ├── controllers/                # Request handlers
    │   ├── authController.js
    │   ├── departmentController.js
    │   ├── facultyController.js
    │   ├── eventController.js
    │   ├── newsController.js
    │   ├── placementController.js
    │   ├── iqacController.js
    │   ├── nirfController.js
    │   └── ...
    ├── models/                     # Mongoose schemas
    │   ├── User.js
    │   ├── Department.js
    │   ├── Faculty.js
    │   ├── Event.js
    │   ├── PlacementRecord.js
    │   ├── NIRF.js
    │   └── ...
    ├── routes/                     # API routes
    │   ├── authRoutes.js
    │   ├── departmentRoutes.js
    │   └── ...
    ├── middleware/
    │   └── authMiddleware.js       # JWT verification
    ├── uploads/                    # Uploaded files
    ├── data/                       # Seed data
    ├── scripts/                    # Database scripts
    └── server.js                   # Server entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn** package manager
- **Git** for version control

### 1. Clone the Repository
```bash
git clone https://github.com/gauravghatol/website.git
cd website
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
# Add the following variables:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key

# Start the server
npm start

# For development with auto-restart
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Build for Production

```bash
# In client directory
npm run build

# Preview production build
npm run preview
```

## 🔑 Admin Access

To access the admin panel:

1. Navigate to `/admin/login`
2. Login with admin credentials (create admin user using MongoDB)
3. Access admin dashboard at `/admin/dashboard`

### Creating Admin User

Use MongoDB directly or create a seed script:

```javascript
// In server, create/run a script
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('your_password', 10);
  await User.create({
    username: 'admin',
    email: 'admin@ssgmce.ac.in',
    password: hashedPassword,
    role: 'admin'
  });
};
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new user
- `GET /api/auth/verify` - Verify JWT token

### Departments
- `GET /api/departments` - Get all departments
- `GET /api/departments/:slug` - Get department by slug
- `POST /api/departments` - Create department (admin)
- `PUT /api/departments/:id` - Update department (admin)
- `DELETE /api/departments/:id` - Delete department (admin)

### Faculty
- `GET /api/faculty` - Get all faculty
- `GET /api/faculty/department/:dept` - Get faculty by department
- `POST /api/faculty` - Add faculty (admin)
- `PUT /api/faculty/:id` - Update faculty (admin)
- `DELETE /api/faculty/:id` - Delete faculty (admin)

### Placements
- `GET /api/placements/stats` - Get placement statistics
- `GET /api/placements/records` - Get placement records
- `POST /api/placements/stats` - Create placement stats (admin)
- `PUT /api/placements/stats/:year` - Update placement stats (admin)

### NIRF
- `GET /api/nirf/rankings` - Get NIRF rankings
- `POST /api/nirf/rankings` - Add NIRF ranking (admin)
- `PUT /api/nirf/rankings/:year` - Update NIRF ranking (admin)

### Events & News
- `GET /api/events` - Get all events
- `GET /api/news` - Get all news
- `POST /api/events` - Create event (admin)
- `POST /api/news` - Create news (admin)

### Dynamic Pages
- `GET /api/pages/:pageKey` - Get page content
- `PUT /api/pages/:pageKey` - Update page content (admin)

*Full API documentation available in `/server/routes/`*

## 🎨 Design & UI Features

- **Responsive Design** - Mobile-first approach with breakpoints
- **Modern Animations** - Framer Motion powered smooth transitions
- **Interactive Charts** - Placement and NIRF data visualization
- **Rich Text Editing** - Markdown and WYSIWYG editors in admin panel
- **Image Upload** - Drag-and-drop file upload with Multer
- **Professional Color Scheme** - Blue (#1e40af) and white theme
- **Glassmorphism Effects** - Modern UI cards with backdrop blur
- **Skeleton Loading** - Loading states for better UX
- **Toast Notifications** - User feedback for actions

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcryptjs for secure password storage
- **Protected Routes** - Middleware to protect admin endpoints
- **CORS Configuration** - Cross-origin resource sharing setup
- **Input Validation** - Server-side validation for all inputs
- **File Upload Security** - File type and size restrictions

## 📖 Additional Documentation

- [Admin Panel Guide](./ADMIN_PANEL_GUIDE.md) - Comprehensive admin panel documentation
- [Admin Quick Start](./ADMIN_QUICK_START.md) - Quick setup guide
- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions
- [Admin Redesign Summary](./ADMIN_REDESIGN_SUMMARY.md) - Admin UI changes

## 🔧 Scripts & Utilities

The server includes several utility scripts for database management:

```bash
# Seed department data
node scripts/seedCSE.js
node scripts/seedElectrical.js
node scripts/seedMechanical.js

# Initialize database
node scripts/initDb.js

# Clear specific data
node scripts/clearPlacement2020_2021.js
```

## 🌐 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ssgmce
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### Client (.env - optional)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally or connection string is correct
- Check network access in MongoDB Atlas

**Port Already in Use**
- Change PORT in server .env file
- Kill process using `npx kill-port 5000`

**Module Not Found**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Build Errors**
- Clear Vite cache: `rm -rf node_modules/.vite`
- Rebuild: `npm run build`

## 📝 Development Guidelines

### Code Style
- Use ES6+ syntax
- Follow React best practices and hooks conventions
- Use Tailwind utility classes for styling
- Keep components modular and reusable

### Git Workflow
```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git add .
git commit -m "feat: your feature description"

# Push changes
git push origin feature/your-feature
```

## 🚀 Deployment

### Heroku Deployment (Backend)
```bash
heroku create ssgmce-api
git push heroku main
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret
```

### Vercel/Netlify (Frontend)
1. Connect repository to Vercel/Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

For questions or support, contact:
- **Email**: admin@ssgmce.ac.in
- **GitHub**: @gauravghatol

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- SSGMCE for the original design and content
- React and Node.js communities for excellent documentation
- Contributors and developers

---

**Made with ❤️ for SSGMCE | © 2026 SSGMCE College Website**
