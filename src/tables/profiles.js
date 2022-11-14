import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class profiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    language_id: {
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
    tableName: 'profiles',
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
        name: "fk_s_idiomas_s_perfiles_idx",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "fk_s_perfiles_texto_original_idx",
        using: "BTREE",
        fields: [
          { name: "original_text" },
        ]
      },
    ]
  });
  }
}
