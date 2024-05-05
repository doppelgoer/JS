import { DataTypes, Model } from 'sequelize';
import sequelize from 'src/util/sequelize';

interface UploadModelBase {
  id: string;
  path: string;
  originalName: string;
  mimeType: string;
  size: number;
  status: FileStatus;
  type: FileType;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum FileType {
  PROFILE_IMAGE = 'PROFILE_IMAGE',
}

export enum FileStatus {
  TEMP = 'TEMP',
  SAVED = 'SAVED',
}

export class UploadModel extends Model<UploadModelBase> implements UploadModelBase {
  public id!: string;
  public path!: string;
  public originalName!: string;
  public mimeType!: string;
  public size!: number;
  public status!: FileStatus;
  public type!: FileType;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UploadModel.init(
  {
    id: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    originalName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'upload',
    sequelize,
    indexes: [{ fields: ['status'] }],
  }
);
