import mongoose, { Document, model, Schema } from "mongoose";

interface IAppointment extends Document {
    patientName: string;
    doctorName: string;
    date: Date;
    status: 'Pending' | 'Completed' | 'Cancelled';
  }

  const AppointmentSchema = new Schema<IAppointment>({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  });

  export const Appointment =model<IAppointment>('Appointment', AppointmentSchema)
//   export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
