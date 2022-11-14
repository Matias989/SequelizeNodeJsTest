import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class s_usuarios extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identificador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_estatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ultima_sesion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    validacion: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_doc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    numero_doc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigo_recuperacion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    img_perfil: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    permission: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_usuario_creador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario_modificador: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 's_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  }
}
