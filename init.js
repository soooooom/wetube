import "./db.js"
import app from "./app"
import dotenv from "dotenv"
dotenv.config();
import "./models/Video"
import "./models/Comment"

const PORT = process.env.PORT || 4000;
//dotenv 를 통해 찾지 못할 경우 4000으로 

const handleListening = () => console.log("Listening on: http://localhost:${PORT}") ;

app.listen(PORT, handleListening);
