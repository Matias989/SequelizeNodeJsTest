import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class transactions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    transaction_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'transactions_status',
        key: 'id'
      }
    },
    delivery_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_shipment_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    courier_id: {
      type: DataTypes.INTEGER,
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
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    time_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'transactions',
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
        name: "fk_users_transactions_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_transactions_status_transa_idx",
        using: "BTREE",
        fields: [
          { name: "transaction_status_id" },
        ]
      },
      {
        name: "fk_applications_transactions_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
  }
}
