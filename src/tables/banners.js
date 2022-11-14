import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class banners extends Model {
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
    directory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    media_type: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    intern: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    legend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    language_id: {
      type: DataTypes.STRING(5),
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
    order_banner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    father: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    banner_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data: {
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
    tableName: 'banners',
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
          { name: "language_id" },
        ]
      },
    ]
  });
  }
}
