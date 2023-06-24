const router = require("express").Router();
const { create, list, update, removeTag } = require("../app/controllers/tag");
const { auth, admin } = require("../middlewares/auth");

router.use(auth);
router.get("/", list);

router.use(admin);
router.put("/:tagId", update);
router.delete("/:tagId", removeTag);
router.post("/", create);

module.exports = router;
