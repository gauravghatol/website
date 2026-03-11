const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  docUpload,
  convertDocument,
} = require("../controllers/convertController");

// POST /api/convert/document — Upload a PDF or DOCX and receive Markdown
router.post(
  "/document",
  protect,
  adminOnly,
  docUpload.single("document"),
  convertDocument,
);

module.exports = router;
