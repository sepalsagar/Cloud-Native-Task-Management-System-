const Task = require("../models/task");
const wrapAsync = require("./wrapAsync");

const canAccessTask = wrapAsync(async (req, res, next) => {
	const { id } = req.params;
	const task = await Task.findById(id).populate({
		path: "userName",
		select: "name email",
	});

	if (!task) {
		return res.status(404).json({ message: "Task not found" });
	}

	const isOwner = task.userName && task.userName._id.toString() === req.user._id.toString();
	const isAssignee = Boolean(task.assign) && task.assign === req.user.email;
	const isAdmin = req.user.role === "admin";

	if (!isOwner && !isAssignee && !isAdmin) {
		return res.status(403).json({ message: "Forbidden" });
	}

	req.task = task;
	next();
});

module.exports = { canAccessTask };
