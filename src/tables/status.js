import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    lenguage_id: {
      type: DataTypes.STRING(5),
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
      allowNull: true
    },
    time_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'status',
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
        name: "fk_s_idiomas_s_estatus_idx",
        using: "BTREE",
        fields: [
          { name: "lenguage_id" },
        ]
      },
      {
        name: "fk_s_idiomas_texto_originas_idx",
        using: "BTREE",
        fields: [
          { name: "original_text" },
        ]
      },
    ]
  });
  }
}
