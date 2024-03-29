import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string

  @Prop({ required: true })
  lastName: string

  @Prop({ required: true, unique: true, type: String })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true, default: false })
  isEmailVerified: boolean

  @Prop({ required: false })
  address: string

  @Prop({ required: true, default: Date.now(), type: Date })
  createdAt: Date

  @Prop({ required: true, default: Date.now(), type: Date })
  updatedAt: Date

  @Prop({ required: true, default: false })
  isDoctor: boolean

  @Prop({ required: true, default: false })
  isAdmin: boolean

  @Prop({ required: false, default: [] })
  seenNotifications: any[]

  @Prop({ required: false, default: [] })
  unseenNotifications: any[]
}

export const UserSchema = SchemaFactory.createForClass(User)
