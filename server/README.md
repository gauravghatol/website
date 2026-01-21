# SSGMCE Backend - Node.js + Express + MongoDB

Backend API server for the SSGMCE College Website built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (see .env file)

# Start the server
npm start

# Development mode with nodemon (optional)
npm run dev
```

## 📁 Directory Structure

```
server/
├── config/
│   └── db.js           # MongoDB connection
│
├── models/             # Mongoose schemas
│   ├── News.js
│   ├── Faculty.js
│   ├── Department.js
│   ├── Event.js
│   └── Notice.js
│
├── controllers/        # Request handlers
│   ├── newsController.js
│   ├── facultyController.js
│   ├── departmentController.js
│   ├── eventController.js
│   └── noticeController.js
│
├── routes/            # API routes
│   ├── newsRoutes.js
│   ├── facultyRoutes.js
│   ├── departmentRoutes.js
│   ├── eventRoutes.js
│   └── noticeRoutes.js
│
├── server.js          # Main server file
├── package.json
└── .env              # Environment variables
```

## 🗄️ Database Models

### News Model
- title, description, content
- category (News, Announcement, Achievement)
- publishDate, isActive
- timestamps

### Faculty Model
- name, designation, department
- qualification, specialization
- experience, email, phone
- isActive, timestamps

### Department Model
- name, code, description
- programs (array)
- isActive, timestamps

### Event Model
- title, description, eventDate
- location, category
- isActive, timestamps

### Notice Model
- title, description, priority
- category, publishDate, expiryDate
- isActive, timestamps

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### News Endpoints
```
GET    /api/news              # Get all news
GET    /api/news/:id          # Get single news
POST   /api/news              # Create news
PUT    /api/news/:id          # Update news
DELETE /api/news/:id          # Delete news
```

### Faculty Endpoints
```
GET    /api/faculty           # Get all faculty
GET    /api/faculty/:id       # Get single faculty
POST   /api/faculty           # Add faculty
PUT    /api/faculty/:id       # Update faculty
DELETE /api/faculty/:id       # Delete faculty
```

### Department Endpoints
```
GET    /api/departments       # Get all departments
GET    /api/departments/:id   # Get single department
POST   /api/departments       # Add department
PUT    /api/departments/:id   # Update department
DELETE /api/departments/:id   # Delete department
```

### Event Endpoints
```
GET    /api/events            # Get all events
GET    /api/events/upcoming   # Get upcoming events
GET    /api/events/:id        # Get single event
POST   /api/events            # Create event
PUT    /api/events/:id        # Update event
DELETE /api/events/:id        # Delete event
```

### Notice Endpoints
```
GET    /api/notices           # Get all notices
GET    /api/notices/:id       # Get single notice
POST   /api/notices           # Create notice
PUT    /api/notices/:id       # Update notice
DELETE /api/notices/:id       # Delete notice
```

## 📦 Dependencies

### Core
- express: ^4.18.2
- mongoose: ^7.6.0
- cors: ^2.8.5
- dotenv: ^16.3.1

### Security & Auth
- bcryptjs: ^2.4.3
- jsonwebtoken: ^9.0.2

### Dev Dependencies
- nodemon: ^3.0.1 (optional)

## ⚙️ Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ssgmce
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

### MongoDB Setup

#### Option 1: Local MongoDB
```bash
# Install MongoDB locally
# Start MongoDB service
mongod

# Database will be created automatically
```

#### Option 2: MongoDB Atlas
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ssgmce?retryWrites=true&w=majority
```

## 🛠️ Available Scripts

```bash
# Start server
npm start

# Development mode with auto-restart (requires nodemon)
npm run dev
```

## 🗄️ Database Schema Examples

### News Document
```javascript
{
  title: "Admissions Open 2024-25",
  description: "Online applications now open",
  content: "Full content here...",
  category: "Announcement",
  publishDate: "2024-01-15T00:00:00.000Z",
  isActive: true,
  createdAt: "2024-01-10T10:30:00.000Z",
  updatedAt: "2024-01-10T10:30:00.000Z"
}
```

### Faculty Document
```javascript
{
  name: "Dr. Rajesh Kumar",
  designation: "Professor & Head",
  department: "Computer Science",
  qualification: "Ph.D., M.Tech",
  specialization: "Machine Learning, Data Science",
  experience: "20 years",
  email: "rajesh.kumar@ssgmce.ac.in",
  phone: "+91-1234567890",
  isActive: true
}
```

### Department Document
```javascript
{
  name: "Computer Science & Engineering",
  code: "CSE",
  description: "Department focuses on...",
  programs: [
    "B.E. Computer Science & Engineering",
    "M.E. Computer Science & Engineering"
  ],
  isActive: true
}
```

## 🔐 Authentication (Future Enhancement)

Currently, the API is open. For production:
- Implement JWT authentication middleware
- Add admin authentication for POST, PUT, DELETE routes
- Secure sensitive endpoints

## 🔍 Error Handling

All controllers implement try-catch blocks:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## 📊 Testing API with Tools

### Using Postman
```
GET http://localhost:5000/api/news
POST http://localhost:5000/api/news
Content-Type: application/json

{
  "title": "Test News",
  "description": "Test description",
  "category": "News",
  "publishDate": "2024-01-15"
}
```

### Using cURL
```bash
# Get all news
curl http://localhost:5000/api/news

# Create news
curl -X POST http://localhost:5000/api/news \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","description":"Test desc","category":"News"}'
```

## 🚀 Production Deployment

### Hosting Platforms
- Heroku
- Railway
- Render
- DigitalOcean
- AWS EC2

### Pre-deployment Checklist
- [ ] Set production environment variables
- [ ] Update MongoDB URI to Atlas
- [ ] Enable CORS for frontend domain
- [ ] Add rate limiting
- [ ] Implement authentication
- [ ] Add logging (Morgan, Winston)
- [ ] Set up monitoring

## 📝 Sample Data

To populate the database with sample data, you can use MongoDB Compass or create seed scripts.

### Example: Adding Sample News
```javascript
// In MongoDB shell or using Mongoose
db.news.insertMany([
  {
    title: "Admissions Open 2024-25",
    description: "Applications now being accepted",
    category: "Admission",
    publishDate: new Date(),
    isActive: true
  },
  {
    title: "Placement Drive Completed",
    description: "85% students successfully placed",
    category: "Placement",
    publishDate: new Date(),
    isActive: true
  }
]);
```

## 🔧 Middleware

### Currently Implemented
- express.json() - Parse JSON bodies
- cors() - Enable CORS
- connectDB() - Database connection

### Future Enhancements
- Authentication middleware
- Request logging (Morgan)
- Rate limiting
- Input validation
- File upload handling

## 🐛 Debugging

```bash
# Check MongoDB connection
# Server logs will show: "MongoDB Connected: ..."

# Test API endpoints
curl http://localhost:5000/api/news

# Check for errors in terminal
# All errors are logged with console.error
```

## 📚 Learn More

- [Express.js Documentation](https://expressjs.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Node.js Documentation](https://nodejs.org)

## 🤝 Contributing

Follow the MVC pattern when adding new features:
1. Create model in `/models`
2. Create controller in `/controllers`
3. Create routes in `/routes`
4. Import routes in `server.js`
