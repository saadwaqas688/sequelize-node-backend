const router = require("express").Router();
const {
  create,
  list,
  deleteOne,
  updateOne,
} = require("../app/controllers/chapter");
const { auth, admin } = require("../middlewares/auth");
router.get("/:id", list);
router.use([auth, admin]);
router.post("/", create);
router.delete("/:chapterId", deleteOne);
router.put("/:chapterId", updateOne);

module.exports = router;
