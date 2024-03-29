import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type DoctorDocument = Doctor & Document

@Schema()
export class Doctor {
  @Prop({ required: true, unique: true, type: String })
  userId: string

  @Prop({ required: true })
  firstName: string

  @Prop({ required: true })
  lastName: string

  @Prop({ required: false })
  address: string

  @Prop({ required: true, default: Date.now(), type: Date })
  createdAt: Date

  @Prop({ required: true, default: Date.now(), type: Date })
  updatedAt: Date

  @Prop({ required: true, unique: true, type: String })
  phoneNumber: string

  @Prop({ required: true, type: String })
  website: string

  @Prop({ required: true, type: String })
  specialization: string

  @Prop({ required: true, type: Number })
  experience: number

  @Prop({ required: true, type: Number })
  consultationFee: number

  @Prop({ required: true, type: Array })
  consultationSchedule: Array<any>

  @Prop({ required: true, default: 'pending', type: String })
  status: string
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)
