# SSGMCE College Website

A full-stack web application for **Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon** built with the MERN stack. Features a public-facing portal and a CMS-powered admin panel with inline Markdown editing.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 7, Tailwind CSS 3, React Router 6 |
| Backend | Node.js, Express 4, Mongoose 7 |
| Database | MongoDB (Atlas or local) |
| Auth | JWT (bcryptjs) |
| Uploads | Multer |
| Charts | Chart.js, Recharts |
| Editor | React Markdown + React Quill (WYSIWYG) |

## Project Structure

```
website/
├── client/                     # React SPA
│   ├── src/
│   │   ├── components/         # Shared UI + admin components
│   │   ├── pages/              # Route-level pages
│   │   │   ├── about/          # 8 about pages
│   │   │   ├── academics/      # 11 academic pages
│   │   │   ├── activities/     # 17 student club pages
│   │   │   ├── admin/          # 22 admin panel pages
│   │   │   ├── admissions/     # 13 admission pages
│   │   │   ├── departments/    # 8 department pages
│   │   │   ├── documents/      # 12 document pages
│   │   │   ├── facilities/     # hostel / library / sports sub-pages
│   │   │   ├── iqac/           # 14 IQAC pages (CMS-editable)
│   │   │   ├── placements/     # 12 placement pages (CMS-editable)
│   │   │   └── research/       # 15 research pages (CMS-editable)
│   │   ├── contexts/           # EditContext, ThemeContext, PageDataContext
│   │   ├── hooks/              # useAuth, useFetch, usePageContent, useDepartmentData
│   │   ├── config/             # Admin access config
│   │   ├── constants/          # Nav config
│   │   └── data/               # Client-side seed/default data
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                     # Express API
    ├── server.js               # Entry point
    ├── config/db.js            # MongoDB connection
    ├── controllers/            # 14 route controllers
    ├── models/                 # 18 Mongoose models
    ├── routes/                 # 14 route files
    ├── middleware/              # JWT auth middleware
    ├── data/                   # Seed content (markdown pages)
    │   ├── allNavPages.js      # Master page definitions
    │   ├── researchMarkdownContent.js
    │   └── iqacMarkdownContent.js
    ├── scripts/                # Re-runnable sync utilities
    │   ├── syncResearchMarkdownContent.js
    │   └── syncIqacMarkdownContent.js
    ├── uploads/                # User-uploaded files (images, docs, NIRF PDFs)
    └── utils/                  # DB init, department map
```

## Getting Started

### Prerequisites

- Node.js v16+
- MongoDB (local or Atlas)

### 1. Clone

```bash
git clone https://github.com/gauravghatol/website.git
cd website
```

### 2. Server

```bash
cd server
npm install
cp .env.example .env   # then fill in MONGODB_URI, JWT_SECRET, ADMIN_JWT_SECRET
npm start              # or: npm run dev (nodemon)
```

Runs on `http://localhost:5000`.

### 3. Client

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173` (proxied to server).

### 4. Production Build

```bash
cd client
npm run build      # outputs to dist/
npm run preview    # preview locally
```

## Environment Variables

Create `server/.env` (see `.env.example`):

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>
JWT_SECRET=<random-string>
ADMIN_JWT_SECRET=<random-string>
```

## Admin Panel

1. Navigate to `/admin/login`
2. Log in with admin credentials
3. Dashboard at `/admin`

The admin panel provides:

- **Visual Page Editor** — Inline Markdown editing for all CMS pages (departments, placements, research, IQAC, admissions, etc.)
- **Department Management** — Faculty, curriculum, department-specific pages
- **Content Management** — News, events, notices, popup banners
- **Document Management** — Upload and organize college documents
- **NIRF / IQAC / Placement** — Dedicated management panels
- **Analytics & Edit Logs** — Track content changes

## API Routes

All routes are prefixed with `/api`:

| Route | Description |
|-------|-------------|
| `/api/auth` | Login, register, verify |
| `/api/departments` | Department CRUD |
| `/api/faculty` | Faculty CRUD |
| `/api/pages` | CMS page content (get/update by pageId) |
| `/api/news` | News articles |
| `/api/events` | College events |
| `/api/notices` | Notices & announcements |
| `/api/placements` | Placement stats & records |
| `/api/research` | Research data |
| `/api/iqac` | IQAC documents, members, news |
| `/api/nirf` | NIRF rankings & parameters |
| `/api/documents` | Document management |
| `/api/upload` | File uploads (images, PDFs) |

## Scripts

Re-runnable sync utilities (safe for fresh deployments or DB resets):

```bash
cd server
node scripts/syncResearchMarkdownContent.js   # Seed/update research pages
node scripts/syncIqacMarkdownContent.js        # Seed/update IQAC pages
```

## Key Patterns

- **GenericContentPage** — Single React component that renders any CMS page given a `pageId`. Used by all placement, research, and IQAC pages.
- **Sidebar components** — `PlacementSidebar`, `ResearchSidebar`, `IQACSidebar` etc. are auto-generated from DB section data.
- **MarkdownEditor** — Admin inline editor with live preview, smart rendering (tables, document grids, facility cards).
- **Auto-seeding** — On first server start, `allNavPages.js` seeds all page definitions into MongoDB via `dbInit.js`.

## Contact

- **GitHub**: [@gauravghatol](https://github.com/gauravghatol)

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- SSGMCE for the original design and content
- React and Node.js communities for excellent documentation
- Contributors and developers

---

**Made with ❤️ for SSGMCE | © 2026 SSGMCE College Website**
