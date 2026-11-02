import express from "express";
import { getTasks, createNewTask, deleteExistentTask, toggleExistentTaskStatus } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createNewTask);
router.delete("/:id", deleteExistentTask);
router.patch("/:id", toggleExistentTaskStatus);

export default router;