import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categories extends Model {
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
    father: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    query_identifier: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    attributes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outstanding: {
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
    cover_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_products: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    original_text: {
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
    tableName: 'categories',
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
        name: "idx_categories_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "father" },
        ]
      },
    ]
  });
  }
}
