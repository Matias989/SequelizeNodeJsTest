import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class applications_payments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'applications',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    application_license_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'applications_licenses',
        key: 'id'
      }
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_renew_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gateway_transaction_id: {
      type: DataTypes.STRING(150),
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
    tableName: 'applications_payments',
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
        name: "fk_applications_app_payments_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_users_app_payments_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_application_licenses_app_payments_idx",
        using: "BTREE",
        fields: [
          { name: "application_license_id" },
        ]
      },
    ]
  });
  }
}
