import { Options } from 'sequelize';

const sequelizeConfig: Options = {
  host: '192.168.0.7',
  port: 3306,
  username: 'gemstone',
  password: '22c9ad80c24e5a8bc9874ec1ee180cc9e4b33cbadd744a94ceb4ee387da7989c',
  database: 'gemstone4',
  logging: false,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    bigNumberStrings: true,
    supportBigNumbers: true,
  },
  pool: {
    min: 2,
    max: 10,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    charset: 'utf8',
  },
  timezone: '+09:00',
  sync: {
    force: false,
    alter: true,
  },
};

export default sequelizeConfig;
