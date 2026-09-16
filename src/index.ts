import express, {Request, Response} from "express";
import dotenv from "dotenv"
dotenv.config();

import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
  }),
);

// Basic middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello Backend</h1>")
})

app.listen(port, () => {
    console.log(`Server is running successfully on http://localhost:${port}`)
    console.log("Postgres connected successfully ✅");
})