import express from 'express';
import morgan from "morgan"; 
import helmet from "helmet"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser"; 
const app = express();

const handleProfile = (req, res) => res.send("LOVE from Moon");
const handleHome = (req, res) => res.send("Hi from HOME");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(morgan("dev"));
app.use(helmet());

app.get('/', handleHome);
app.get('/profile', handleProfile);



