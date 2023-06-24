const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const subject = await models.subject.save(data);

      return res.json({
        data: subject,
        error: false,
        response: "Subject  added successfully.",
      });
    } catch (error) {
      console.log({ error });
      next(error);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const { subjectId } = req.params;
      await models.subject.deleteSubject(subjectId);
      return res.json({
        data: null,
        error: false,
        response: "Subject   deleted successfully.",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateOne: async (req, res, next) => {
    try {
      const {
        params: { subjectId },
        body,
      } = req;
      const subject = await models.subject.updateSubject(subjectId, body);

      return res.json({
        data: subject,
        error: false,
        response: "Subject updated successfully.",
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const subjects = await models.subject.findAndCountAll({
        order: [["id", "ASC"]],
      });

      return res.json({
        data: subjects,
        error: false,
      });
    } catch (error) {
      console.log(error);

      next(error);
    }
  },
};
