import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class s_perfiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_perfil: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perfil: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_creado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    identificador: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    id_idioma: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    texto_original: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario_creador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario_modificador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 's_perfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_perfil" },
        ]
      },
    ]
  });
  }
}
