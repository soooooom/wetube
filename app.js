//스크립트는 위에서 아래로 한줄씩 실행된다
const express = require('express')
//express import 내 파일 내에->없으면 node module 내에
//import express(변수 명) from "express" 와 같다

import morgan from "morgan"; //request logger
import helmet from "helmet"; //security
import bodyParser from "body-parser"; //body로 부터 정보 얻을 수 있다
import cookieParser from "cookie-parser"; //cookie 에 유저 정보 저장 -> 세션관리

const app = express()
//express execute
const PORT = "4000";

function handleListening(){
    console.log("listening to ${PORT}");
}

const handleProfile = (req, res) => res.send("LOVE from Moon");
const handleHome = (req, res) => res.send("Hi from HOME");

/*
---------------middleware----------------------
const betweenHome =(req, res, next) => {
    console.log("I'm between");
    next(); //브라우저 요청 처리-> 마지막 함수로 넘어갈 수 있게
    //최종 함수는 유저에게 응답을 반환
    //next 함수 안 보내고 res.send() 응답 반환 시 연결을 끊을 수 있다
}
*/


//app.use 모든 최종함수에게 middleware 설정
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); //어떤 요청(text,json,urlenconded...)을 읽을지 결정
app.use(morgan("dev"));
app.use(helmet());

app.get('/', handleHome);
//get = 접속했을 때, '/' 는 이 서버, post = data 보낼 때
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);


