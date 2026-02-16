# 🚀 Quick Setup Guide - SSGMCE Website

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** (optional) - [Download](https://git-scm.com/)

## 📋 Step-by-Step Installation

### Step 1: Navigate to Project Directory

```bash
cd "d:\Sem 7\Web"
```

### Step 2: Backend Setup

```bash
# Navigate to server folder
cd server

# Install all dependencies
npm install

# Verify .env file exists with these settings:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/ssgmce
# JWT_SECRET=your_secret_key_here

# Start the backend server
npm start
```

✅ You should see: `Server running on port 5000` and `MongoDB Connected`

**Keep this terminal running!**

### Step 3: Frontend Setup

Open a **NEW terminal window** and run:

```bash
# Navigate to client folder
cd "d:\Sem 7\Web\client"

# Install all dependencies
npm install

# Start the development server
npm run dev
```

✅ You should see: `Local: http://localhost:5173/`

**Keep this terminal running too!**

### Step 4: Open in Browser

Open your browser and go to: **http://localhost:5173**

🎉 **Your SSGMCE website is now running!**

---

## 🔧 Troubleshooting

### Problem: MongoDB Connection Error

**Solution 1: Local MongoDB**
```bash
# Make sure MongoDB is running
# Windows: Check Services or run:
mongod
```

**Solution 2: Use MongoDB Atlas (Cloud)**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get connection string
3. Update `server/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ssgmce
```

### Problem: Port Already in Use

**Backend (Port 5000)**
```bash
# Windows - Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Frontend (Port 5173)**
```bash
# Vite will automatically try the next available port
# Or update vite.config.js to use different port
```

### Problem: Module Not Found

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: CORS Error

Ensure your `server/server.js` has:
```javascript
app.use(cors());
```

And `client/vite.config.js` has proxy:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true
  }
}
```

---

## 📦 What Gets Installed?

### Backend Dependencies (~50MB)
- express, mongoose, cors, dotenv
- bcryptjs, jsonwebtoken

### Frontend Dependencies (~350MB)
- react, react-dom, react-router-dom
- vite, tailwindcss
- axios, react-icons

**Total size: ~400MB**

---

## 🎯 Testing the Application

### 1. Check Backend API

Open browser or Postman:
```
http://localhost:5000/api/news
http://localhost:5000/api/departments
http://localhost:5000/api/faculty
```

You should see JSON responses (empty arrays initially).

### 2. Navigate the Website

Visit all pages:
- Home: http://localhost:5173/
- About: http://localhost:5173/about
- Departments: http://localhost:5173/departments
- Admissions: http://localhost:5173/admissions
- Faculty: http://localhost:5173/faculty
- Placements: http://localhost:5173/placements
- Research: http://localhost:5173/research
- Events: http://localhost:5173/events
- Gallery: http://localhost:5173/gallery
- Contact: http://localhost:5173/contact

### 3. Test Responsive Design

- Resize browser window
- Open DevTools (F12) and toggle device toolbar
- Test on mobile, tablet, and desktop views

---

## 🗄️ Adding Sample Data (Optional)

### Option 1: Using MongoDB Compass

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to `mongodb://localhost:27017`
3. Select database: `ssgmce`
4. Manually add documents to collections

### Option 2: Using API (Postman/Thunder Client)

**Add News:**
```
POST http://localhost:5000/api/news
Content-Type: application/json

{
  "title": "Admissions Open 2024",
  "description": "Applications now being accepted",
  "category": "Admission",
  "publishDate": "2024-01-15"
}
```

**Add Faculty:**
```
POST http://localhost:5000/api/faculty

{
  "name": "Dr. Rajesh Kumar",
  "designation": "Professor & Head",
  "department": "Computer Science",
  "qualification": "Ph.D., M.Tech",
  "specialization": "Machine Learning",
  "experience": "20 years",
  "email": "rajesh@ssgmce.ac.in"
}
```

---

## 🎨 Customization Tips

### Change Colors

Edit `client/tailwind.config.js`:
```javascript
colors: {
  'ssgmce-blue': '#your-color',
  'ssgmce-orange': '#your-color'
}
```

### Add New Page

1. Create file: `client/src/pages/NewPage.jsx`
2. Add route in `client/src/App.jsx`:
```javascript
<Route path="/newpage" element={<NewPage />} />
```
3. Add link in `client/src/components/Navbar.jsx`

### Modify Backend

1. Create model: `server/models/NewModel.js`
2. Create controller: `server/controllers/newController.js`
3. Create routes: `server/routes/newRoutes.js`
4. Import in `server/server.js`

---

## 🚀 Production Build

### Frontend Build
```bash
cd client
npm run build
# Output in client/dist folder
```

### Deploy Options
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, Render, DigitalOcean
- **Database**: MongoDB Atlas (free tier)

---

## 📱 Mobile Testing

### Using Your Phone

1. Find your computer's IP address:
```bash
# Windows
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.100)
```

2. Update `client/vite.config.js`:
```javascript
server: {
  host: '0.0.0.0',
  port: 5173
}
```

3. On your phone, visit:
```
http://YOUR_IP:5173
```

---

## 💡 Development Tips

### Auto-Restart Backend (Optional)

Install nodemon globally:
```bash
npm install -g nodemon
```

Update `server/package.json`:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Run with:
```bash
npm run dev
```

### VS Code Extensions

Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- MongoDB for VS Code
- Thunder Client (API testing)
- Prettier - Code formatter

---

## 🎓 Learning Resources

- **React**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Express.js**: https://expressjs.com/en/guide/routing.html
- **MongoDB**: https://university.mongodb.com/

---

## ✅ Success Checklist

- [ ] Node.js and MongoDB installed
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] All pages loading correctly
- [ ] Responsive design working
- [ ] API endpoints responding
- [ ] No console errors

---

## 🆘 Need Help?

If you encounter issues:
1. Check terminal for error messages
2. Open browser DevTools console (F12)
3. Verify all dependencies installed
4. Ensure MongoDB is running
5. Check firewall/antivirus settings

---

## 🎉 You're All Set!

Your SSGMCE website clone is now running successfully!

**Next Steps:**
- Add sample data to database
- Customize colors and content
- Add more features
- Deploy to production

Happy coding! 🚀
