import express from "express";
import {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController.js";
import upload from "../middlewares/upload-middleware.js";
import {
  getAllInstructors,
  signin,
  signup,
} from "../controllers/instructorController.js";
import authenticateAdmin from "../middlewares/admin-middleware.js";

const instructorRouter = express.Router();

instructorRouter.post("/signup", signup);
instructorRouter.post("/signin", signin);

instructorRouter.get("/get-courses", getCourses);
instructorRouter.get("/get-instructors", getAllInstructors);

instructorRouter.post("/add-courses",authenticateAdmin, upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);

export default instructorRouter;