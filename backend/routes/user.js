const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const wrapAsync = require("../middlewares/wrapAsync");
const { authorization } = require("../middlewares/authorization");
const { requireRoles } = require("../middlewares/rbac");

router.get("/profile", authorization, wrapAsync(userControllers.getAuthUser));
router.put("/update", authorization, wrapAsync(userControllers.updateUser));
router.get("/users", authorization, wrapAsync(userControllers.getAllUsers));
router.get(
	"/admin/users",
	authorization,
	requireRoles("admin"),
	wrapAsync(userControllers.getAllUsersForAdmin)
);
router.post("/board", authorization, wrapAsync(userControllers.updateBoard));

module.exports = router;
