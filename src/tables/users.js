import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    last_session: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    validation: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    names: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    doc_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    recovery_code: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    profile_img: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
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
    client_type_id: {
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
    },
    creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifier_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
    ]
  });
  }
}
