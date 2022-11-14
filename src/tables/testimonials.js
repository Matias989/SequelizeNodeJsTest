import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class testimonials extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_archivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    directorio: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_media: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    interno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    testimony: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leyenda: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.TEXT,
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
    video_opt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    video_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    orden: {
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
    tableName: 'testimonials',
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
        name: "fk_t_idiomas_t_media_proyectos_idx",
        using: "BTREE",
        fields: [
          { name: "id_idioma" },
        ]
      },
      {
        name: "fk_t_media_proyectos_texto_original_idx",
        using: "BTREE",
        fields: [
          { name: "texto_original" },
        ]
      },
    ]
  });
  }
}
