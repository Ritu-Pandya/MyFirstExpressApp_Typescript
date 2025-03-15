import { Request, Response } from "express";
import { appointmentService } from "../service/appointment.service";

class appointmentController{
     createAppointment = async (req: Request, res: Response) => {
        try {
          const appointment = await appointmentService.createAppointment(req.body);
          res.status(201).json(appointment);
        } catch (error) {
          res.status(500).json({ message: 'Error creating appointment', error });
        }
      };
    
      getAppointments = async (req: Request, res: Response) => {
        try {
          const page = parseInt(req.query.page as string) || 1;
          const limit = parseInt(req.query.limit as string) || 10;
    
          const result = await appointmentService.getAllAppointments(page, limit);
          res.status(200).json(result);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching appointments', error });
        }
      };

    getAppointment= async (req:Request,res:Response)=>{
      const id = req.params.id
      const appointment = await appointmentService.getAppointment(id)
      res.send(appointment)
    }

    updateAppointment = async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const updatedAppointment = await appointmentService.updateAppointment(id, req.body);
        if (!updatedAppointment) {
          return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(updatedAppointment);
      } catch (error) {
        res.status(500).json({ message: 'Error updating appointment', error });
      }
    };
    deleteAppointment = async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const deletedAppointment = await appointmentService.deleteAppointment(id);
        if (!deletedAppointment) {
          return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully', deletedAppointment });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting appointment', error });
      }
    };
}

export const AppointmentController = new appointmentController()
 