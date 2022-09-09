"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // category_id: {
      //   type:DataTypes.INTEGER,
      //   allowNull:false
      // },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: [[1]],
            msg: "must be a value greater than or equal to 1",
          },
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
