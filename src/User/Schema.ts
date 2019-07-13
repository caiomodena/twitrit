import { Document, Schema, VirtualType } from 'mongoose'
import { ObjectId } from 'bson';

export interface IUserModel extends IUser, Document {
}

export const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  collection: 'user',
  versionKey: false
})

export interface IUser {
  name: String,
  email: String
}
