import db_connect from "../utils/db_connect";
import app from "./app";
let port = 5000;



// !ok? 
const connect = async () => {
  try {
    await db_connect();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {}
};

connect()