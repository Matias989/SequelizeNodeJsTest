import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class shipments_zones extends Model {
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
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'regions',
        key: 'id'
      }
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'provinces',
        key: 'id'
      }
    },
    commune_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    status_id: {
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
    product_delivery_data: {
      type: DataTypes.TEXT,
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
    tableName: 'shipments_zones',
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
        name: "fk_regions_shp_z_c_idx",
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "fk_countries_shp_z_c_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "fk_provinces_shp_z_c_idx",
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
      {
        name: "fk_applications_shi_zone_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
  }
}
