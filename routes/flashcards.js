const router = require("express").Router();
const {
  addFC,
  list,
  deleteOne,
  updateOne,
  deleteAllBySnack,
  undoMyLibraryFC,
  trackScore,
} = require("../app/controllers/flashcard");
const { auth, admin } = require("../middlewares/auth");
router.use(auth);
router.get("/:resourceId", list);
router.post("/undo-copy/:stackId", undoMyLibraryFC);
router.post("/track-score/:fcId", trackScore);
router.use(admin);
router.post("/", addFC);
router.delete("/:flashcardId", deleteOne);
router.put("/:flashcardId", updateOne);
router.delete("/delete-all/:snackId", deleteAllBySnack);

module.exports = router;
