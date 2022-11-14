import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_gateways extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    gateway_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gateways',
        key: 'id'
      }
    },
    user_gateway_id: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    time_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifier_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_gateways',
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
      {
        name: "fk_users_users_gateway_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_gateways_users_gateways_idx",
        using: "BTREE",
        fields: [
          { name: "gateway_id" },
        ]
      },
    ]
  });
  }
}
