import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import user_route from '../src/app/modules/user/user.route'
// the 
const app:Application = express();
const port = 3000;


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
// router 
app.use('/api/v2/user', )

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});


export default app; 