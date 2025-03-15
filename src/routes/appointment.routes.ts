import express from 'express';
import { AppointmentController } from '../controller/appointment.controller';

const appointmentRouter = express.Router();

appointmentRouter.post('/create', AppointmentController.createAppointment);
appointmentRouter.get('/get-appointments', AppointmentController.getAppointments);
appointmentRouter.get('/getAppointmentById/:id',AppointmentController.getAppointment);
appointmentRouter.put('/updateAppointment/:id',AppointmentController.updateAppointment);
appointmentRouter.delete('/delete/:id',AppointmentController.deleteAppointment)

export default appointmentRouter;