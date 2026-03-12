# Changes Made — March 12, 2026

**Branch:** `adityaS`  
**Commit:** `3bca9da` — *Move YOGI-DIGI AIML Lab from ENTC to COE, fix PDF viewer, make facility report link optional*

---

> **Note:** The entire **Documents section** of the website is now **complete**. All document pages (Academic, Administrative, IQAC, NAAC, etc.) are fully functional — PDFs load, preview, and download correctly across all categories.

---

## 1. PDF Viewer & Document Fixes

### Problem
- PDFs were not loading, downloading, or previewing across all document pages.
- Root cause: PDF files stored via **Git LFS** were pointer files (~130 bytes) instead of actual PDFs.
- The `PDFDocumentViewer` component had hardcoded `http://localhost:5000` URLs instead of using the Vite proxy.

### Fix
- Ran `git lfs pull` to download all 288 real PDF files.
- **Simplified `PDFDocumentViewer.jsx`** — removed hardcoded localhost URLs; now uses paths directly (Vite proxy at `/uploads` forwards to the backend automatically).
- Re-enabled the iframe preview for all PDFs.

### Files Changed
- `client/src/components/PDFDocumentViewer.jsx`
- `client/src/components/DocumentsSidebar.jsx`

---

## 2. YOGI-DIGI AIML Laboratory Migration (ENTC → COE)

### What Changed
Moved the **YOGI-DIGI AIML Laboratory** entry from the **ENTC Department** page to the **Research COE (Centre of Excellence)** page under "Centres and Facilities".

### ENTC Side (Removed)
- Removed the AIML lab data entry and its image import from `client/src/data/entcDefaults.js`.

### COE Side (Added)
- Added the AIML lab as a new facility card in MongoDB for the `research-coe` page, `coe-facilities` section.
- The lab has no "Download Detailed Report" PDF, so it was added **without** a report link.
- Copied the lab image to `server/uploads/images/EXTC_AIMLLAB.jpg` so it's served locally.
- Updated the seed data file (`server/data/researchMarkdownContent.js`) to match.

### Database Update
The COE page content lives in **MongoDB** (collection: `pagecontents`, pageId: `research-coe`). The DB was updated directly using the native MongoDB driver (`updateOne` with `$set`) because Mongoose's `page.save()` silently fails on deeply nested subdocument changes.

### Files Changed
- `client/src/data/entcDefaults.js` — removed AIML lab entry + image import
- `server/data/researchMarkdownContent.js` — added AIML lab to seed data, updated image URL
- `server/uploads/images/EXTC_AIMLLAB.jpg` — new file (lab image)

---

## 3. Facility Grid Parser — Made Report Link Optional

### Problem
The `parseFacilityGridMarkdown()` function in `MarkdownEditor.jsx` **required** every facility entry to have both a `[View Detailed Report](url)` and `[Reference Image](url)` link. Entries missing either were silently skipped — so the AIML lab (which has no report PDF) wasn't rendering at all.

### Fix
- Made `[View Detailed Report]` optional in the parser — entries without it are no longer skipped.
- The "Download Detailed Report" button only renders if a report URL exists.

### File Changed
- `client/src/components/admin/MarkdownEditor.jsx` (3 lines changed in `parseFacilityGridMarkdown` + render block)

---

## Summary of All Files Changed

| File | Change |
|------|--------|
| `client/src/components/PDFDocumentViewer.jsx` | Simplified PDF loading, removed hardcoded URLs |
| `client/src/components/DocumentsSidebar.jsx` | Minor fixes for document sidebar |
| `client/src/components/admin/MarkdownEditor.jsx` | Made facility report link optional |
| `client/src/data/entcDefaults.js` | Removed AIML lab entry |
| `server/data/researchMarkdownContent.js` | Added AIML lab to COE seed data |
| `server/uploads/images/EXTC_AIMLLAB.jpg` | New — AIML lab reference image |

---

## ✅ Document Section — COMPLETED

The **entire Documents section** is now fully done:

- All **88+ PDF paths** across every document page have been corrected to use `/uploads/documents/{category}/` format.
- All **288 PDF files** are real content (Git LFS pull completed).
- Preview, view online, and download all work correctly.

### Document Pages (12 pages)

| Page | File |
|------|------|
| AICTE | `client/src/pages/documents/AICTE.jsx` |
| Audit Reports | `client/src/pages/documents/Audit.jsx` |
| Financial Statements | `client/src/pages/documents/Financial.jsx` |
| ISO Certificates | `client/src/pages/documents/ISO.jsx` |
| Mandatory Disclosure | `client/src/pages/documents/MandatoryDisclosure.jsx` |
| NAAC | `client/src/pages/documents/NAAC.jsx` |
| NBA | `client/src/pages/documents/NBA.jsx` |
| Newsletter | `client/src/pages/documents/Newsletter.jsx` |
| NIRF | `client/src/pages/documents/NIRF.jsx` |
| Policies | `client/src/pages/documents/Policies.jsx` |
| Student Forms | `client/src/pages/documents/StudentForms.jsx` |
| Tattwadarshi | `client/src/pages/documents/Tattwadarshi.jsx` |

### Document Components (6 components)

| Component | File | Purpose |
|-----------|------|---------|
| PDFDocumentViewer | `client/src/components/PDFDocumentViewer.jsx` | Renders PDF with iframe preview, view & download buttons |
| DocumentsSidebar | `client/src/components/DocumentsSidebar.jsx` | Sidebar navigation for document categories |
| EnhancedDocumentsLayout | `client/src/components/EnhancedDocumentsLayout.jsx` | Enhanced layout wrapper for document pages |
| DocumentsLayout | `client/src/components/DocumentsLayout.jsx` | Base layout wrapper for document pages |
| DocumentGrid | `client/src/components/DocumentGrid.jsx` | Grid layout for displaying multiple documents |
| DocumentCard | `client/src/components/DocumentCard.jsx` | Individual document card with title & actions |

### Admin Components (2 files)

| Component | File | Purpose |
|-----------|------|---------|
| AdminDocuments | `client/src/pages/admin/AdminDocuments.jsx` | Admin panel for managing documents |
| DocImportModal | `client/src/components/admin/DocImportModal.jsx` | Modal for importing/uploading documents |
- All **288 PDF files** are real content (Git LFS pull completed — no more pointer files).
- The `PDFDocumentViewer` component works correctly — **preview, view online, and download** all function properly.
- The Vite proxy handles routing to the backend seamlessly — no hardcoded URLs.
- Every document sub-page (Syllabus, Annual Reports, Academic Planner, Sessional Marks, Rules & Regulations, Incentive Marks, Rubrics, Student Notices, Time Table, etc.) loads and serves PDFs as expected.
