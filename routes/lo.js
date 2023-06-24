const router = require("express").Router();
const {
  create,
  deleteOne,
  updateOne,
  list,
  loOfChapter,
} = require("../app/controllers/lo");
const { auth, admin } = require("../middlewares/auth");
router.use(auth);
// its course id not chapterId - course syllabus
router.get("/chapterId/:chapterId", list);
router.get("/chapter/:chapterId", loOfChapter);
router.use(admin);
router.post("/", create);
router.delete("/:loId", deleteOne);
router.put("/:loId", updateOne);

module.exports = router;
