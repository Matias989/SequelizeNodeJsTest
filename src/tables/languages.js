import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class languages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    language: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    default: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(30),
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
    tableName: 'languages',
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
