import { Appointment } from "../models/appointment.model";


class AppointmentService {
    async createAppointment(data: any) {
      try {
        const appointment = new Appointment(data);
        return await appointment.save();
      } catch (error: any) {
        throw new Error(`Error creating appointment: ${error.message}`);
      }
    }

     async getAllAppointments(page:number,limit:number) {
        try {
          const skip=(page-1) * limit;
            const appointments = await Appointment.find().skip(skip).limit(limit);
            const total = await Appointment.countDocuments();

            return {
              appointments,
              total,
              currentPage: page,
              totalPages: Math.ceil(total / limit),
            };
          } catch (error) {
            console.log(error);
          }
  }
  //get a single post
  async getAppointment(id: string) {
        
      try {
          const appointment = await Appointment.findById({_id:id})
          if (!appointment) {
              return 'post not available'
          }
          return appointment
  
      } catch (error) {
          console.log(error)
      }
  }
  async updateAppointment(id: string, data: any) {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(id, data, { new: true });
      if (!updatedAppointment) {
        return 'Appointment not found';
      }
      return updatedAppointment;
    } catch (error: any) {
      throw new Error(`Error updating appointment: ${error.message}`);
    }
  }

  async deleteAppointment(id: string) {
    try {
      const deletedAppointment = await Appointment.findByIdAndDelete(id);
      if (!deletedAppointment) {
        return 'Appointment not found';
      }
      return deletedAppointment;
    } catch (error: any) {
      throw new Error(`Error deleting appointment: ${error.message}`);
    }
  }
  
}
export const appointmentService = new AppointmentService()