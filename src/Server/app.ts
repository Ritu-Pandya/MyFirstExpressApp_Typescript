import express from 'express'
import { db} from '../config/db.config'
import { router } from '../routes/posts.routes';
import appointmentRouter from '../routes/appointment.routes';
// import { router } from '../Routes/posts.routes'

const app =express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/posts',router)
app.use('/api/appointments',appointmentRouter)

db.then(() => {
    app.listen(8080, () => console.log('Server is listening on port 8080'))
})