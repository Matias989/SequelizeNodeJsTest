import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class applications_delivery_types extends Model {
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
    delivery_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'delivery_types',
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
    tableName: 'applications_delivery_types',
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
        name: "fk_applications_delivery_types_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_delivery_types_app_de_ty_idx",
        using: "BTREE",
        fields: [
          { name: "delivery_type_id" },
        ]
      },
    ]
  });
  }
}
