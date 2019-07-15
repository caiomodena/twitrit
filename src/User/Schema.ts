import { Document, Schema } from 'mongoose'
import { IUser } from './Entity';

export interface IUserModel extends IUser, Document { }

export const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    collection: 'user',
    versionKey: false
  }
)