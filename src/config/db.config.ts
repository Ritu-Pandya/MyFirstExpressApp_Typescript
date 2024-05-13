import mongoose from 'mongoose'

const dbName="Post";
const url=`mongodb://127.0.0.1/${dbName}`

export const db = mongoose.connect(url)
.then(res => {
    if(res){
        console.log(`Database connection successfully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(err)
})