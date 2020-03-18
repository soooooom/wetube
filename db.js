import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {
    useNewUrlParser: true,
    useFindAndModify : false
    }
);

const db = mongoose.connection;
//new connection

const handleOpen =() => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection : ${error}`);

db.once("open", handleOpen);
//1번만 실행하므로
db.on("error", handleError);