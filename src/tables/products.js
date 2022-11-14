import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class products extends Model {
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    offer_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    offer: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    characteristic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    identifier: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    total_sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_visits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    application_id: {
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
    tableName: 'products',
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
        name: "fk_brands_products_idx",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
    ]
  });
  }
}
