import express, { Request, Response, urlencoded } from "express";
import cors from "cors";

const app = express();
const port = 3000;


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});


export default app; 