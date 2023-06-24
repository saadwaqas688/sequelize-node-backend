"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("userProfiles", "curriculumId", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("userProfiles", "curriculumId", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
