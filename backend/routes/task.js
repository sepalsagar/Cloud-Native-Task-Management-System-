const express = require("express");
const router = express.Router();
const {
	getTask,
	getAllTask,
	addTask,
	updateTask,
	deleteTask,
	updateCategory,
} = require("../controllers/task");
const wrapAsync = require("../middlewares/wrapAsync");
const { authorization } = require("../middlewares/authorization");
const { canAccessTask } = require("../middlewares/taskAccess");

router.get("/all", authorization, wrapAsync(getAllTask));
router.get("/:id", wrapAsync(getTask));
router.post("/add", authorization, wrapAsync(addTask));
router.put("/:id", authorization, canAccessTask, wrapAsync(updateTask));
router.delete("/:id", authorization, canAccessTask, wrapAsync(deleteTask));
router.put(
	"/category/:id",
	authorization,
	canAccessTask,
	wrapAsync(updateCategory)
);

module.exports = router;
