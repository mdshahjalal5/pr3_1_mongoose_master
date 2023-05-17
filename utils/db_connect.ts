import mongoose, { ConnectOptions } from "mongoose";


// Define the MongoDB connection URL
const dbUrl =
  "mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority";
  
  
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
  dbName: "DataBase-change-2",
};

const db_connect = async() =>{
try {
    await mongoose.connect(dbUrl, options);
    console.log('Db connection successful');
    
} catch (err) {
    console.log(err, "mongoose connection error");
    
}
}

export default db_connect;