import express from "express";
import multer from "multer";
import {
  createCourse,
  deleteCourse,
  getCourse,
  listCourses,
  updateCourse,
  //getUploadVideoUrl,
} from "../controllers/courseController";
import { requireAuth } from "@clerk/express";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // store videos temprorary until uploaded on AWS S3 bucket

router.get("/", listCourses);
router.post("/", requireAuth(), createCourse);

router.get("/:courseId", getCourse);
router.delete("/:courseId", requireAuth(), deleteCourse);
router.put("/:courseId", requireAuth(), upload.single("image"), updateCourse); // image not implemented yet

// router.post("/:courseId/sections/:sectionId/chapters/:chapterId/get-upload-url", requireAuth(), getUploadVideoUrl);

export default router;