import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sessions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    session_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    expires: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sessions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
  }
}
