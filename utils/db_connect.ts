import mongoose, { ConnectOptions } from "mongoose";


// Define the MongoDB connection URL
const dbUrl =
  "mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority";

const db_connect = async() =>{
try {
    await mongoose.connect(dbUrl);
    console.log('Db connection successful');
    
} catch (err) {
    console.log(err, "mongoose connection error");
    
}
}

export default db_connect;