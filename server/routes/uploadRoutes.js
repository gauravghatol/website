const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  upload,
  uploadDoc,
  uploadSingleImage,
  uploadSingleFile,
  getUploadedFiles,
  deleteFile,
} = require("../controllers/uploadController");

// Protected routes - admin or coordinator (coordinators need upload for faculty images)
const { adminOrCoordinator } = require("../middleware/authMiddleware");
router.post("/image", protect, adminOrCoordinator, upload.single("image"), uploadSingleImage);
router.post("/file", protect, adminOrCoordinator, uploadDoc.single("file"), uploadSingleFile);
router.get("/files", protect, adminOrCoordinator, getUploadedFiles);
router.delete("/files/:filename", protect, adminOrCoordinator, deleteFile);

module.exports = router;
