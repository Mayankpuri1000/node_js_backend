import express, {Request, Response} from "express";
import dotenv from "dotenv"
dotenv.config();


const app = express();
const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello Backend</h1>")
})

app.listen(port, () => {
    console.log(`Server is running successfully on http://localhost:${port}`)
})