import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class s_usuarios_perfiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_usuario_perfil: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 's_usuarios_perfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_perfil" },
        ]
      },
    ]
  });
  }
}
