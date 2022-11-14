import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class payments extends Model {
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
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payments_methods',
        key: 'id'
      }
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    user_shipment_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delivery_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'delivery_types',
        key: 'id'
      }
    },
    shipment_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    iva_percent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    iva_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    user_payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gateway_transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gateway_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    payment_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    courier_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    application_id: {
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
    tableName: 'payments',
    hasTrigger: true,
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
        name: "fk_users_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_payments_methods_t_idx",
        using: "BTREE",
        fields: [
          { name: "payment_method_id" },
        ]
      },
      {
        name: "fk_delivery_types_payments_idx",
        using: "BTREE",
        fields: [
          { name: "delivery_type_id" },
        ]
      },
    ]
  });
  }
}
