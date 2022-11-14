import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_payments_methods extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_gateway_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users_gateways',
        key: 'id'
      }
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payments_methods',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    application_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'applications',
        key: 'id'
      }
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
    tableName: 'users_payments_methods',
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
        name: "fk_paymen_methods_u_p_m_idx",
        using: "BTREE",
        fields: [
          { name: "payment_method_id" },
        ]
      },
      {
        name: "fk_user_u_p_m_idx",
        using: "BTREE",
        fields: [
          { name: "user_gateway_id" },
        ]
      },
      {
        name: "fk_applications_us_pa_me_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
  }
}
