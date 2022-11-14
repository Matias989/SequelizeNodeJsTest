import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class media_objects extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    directory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intern: {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    original_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    language_id: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    original_text: {
      type: DataTypes.INTEGER,
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'media_objects',
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
