import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categories_media_objects extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "modulo o pantalla que contendra la imagen, es decir, si hay que mostrar imagenes de categorias en multiples lados y que sean distintas, poder indicar a que modulo va cada una."
    },
    cover: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    directory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    media_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    legend: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    alt: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    meta_data: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    language_id: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifier_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    original_text: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories_media_objects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
