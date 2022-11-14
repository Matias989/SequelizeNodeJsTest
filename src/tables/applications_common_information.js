import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class applications_common_information extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    delivery_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'delivery_types',
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
    shipment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shipments_types',
        key: 'id'
      }
    },
    courier_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'couriers',
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
    tableName: 'applications_common_information',
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
        name: "fk_countries_app_com_info_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "fk_delivery_types_app_com_info_idx",
        using: "BTREE",
        fields: [
          { name: "delivery_type_id" },
        ]
      },
      {
        name: "fk_gateways_app_com_in_idx",
        using: "BTREE",
        fields: [
          { name: "gateway_id" },
        ]
      },
      {
        name: "fk_shipments_types_app_com_idx",
        using: "BTREE",
        fields: [
          { name: "shipment_type_id" },
        ]
      },
      {
        name: "fk_couriers_app_com_info_idx",
        using: "BTREE",
        fields: [
          { name: "courier_id" },
        ]
      },
    ]
  });
  }
}
