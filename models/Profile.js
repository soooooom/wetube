import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
    fileUrl :{
        type: String,
        required : "FileURL is required"
    },
    name: {
        type: String,
        required : "Name is required"
    },
    email :{
        type: String,
        required: "Email is required"
    }
})

const model = mongoose.model("Profile",profileSchema );
export default model;

// edit-profile 의 html 에서 양식을 만듦
// edit-profile의 get(일반 접속)과 post(폼 제출) 로 라우터를 나눔
// post(폼 제출)시 일어나는 로직을 controller 에 구현
// controller 에서는 폼을 받은 미들웨어(ex: body parser)를 통해 정보 전달받고
// profile 을 만드는데, profile의 형식은 db 의 model 로서 정의
// 이 떄 서버의 이미지를 받아오기 위해 multer 라는 미들웨어를 한번 더 사용
// userdetail 화면으로 redirect 