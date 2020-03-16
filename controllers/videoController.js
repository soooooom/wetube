import routes from "../routes.js";
import Video from "../models/Video";

export const home = async (req,res) => {
    try{
        const videos = await Video.find({});
        // db에 있는 모든 비디오를 찾을때까지 await, 끝나면(error 나더라도) async 하고 다음코드 실행.
        res.render("home", {pageTitle : "home", videos});
    }
    catch(error){
        console.log(error);
        res.render("home", {pageTitle: "home", videos : []});
    }
};
// render 함수가 views(데이터의 형태) 폴더의 파일명 home, 확장자명 pug 이라는 파일(html 과 동일)을 찾아서 보여준다
// 서버에서 클라이언트로 제공할 데이터를 효율적으로 제공,관리하기위해 쓰는 것이 템플릿
export const search = (req,res) => 
{   
    //const searchingFor = req.query.term
    const { 
        query : { term : searchingFor }
    } = req;
    res.render("search", {pageTitle : "search" , searchingFor, videos});
};

export const video = (req,res) => res.render("video", {pageTitle :"video"});
export const getUpload = (req,res) => {
    res.render("upload", {pageTitle : "upload"});
}
export const postUpload = async(req,res) => {
    const{
        body : {title, description},
        file : {path}
    } =req;
    const newVideo = await Video.create({
        fileUrl :path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
    //redirect to videoDetail/videos.id
    //id 는 create 시 mongoDB에서 자동생성
}

export const videoDetail = (req,res) => res.render("videodetail", {pageTitle:"video detail"});
export const editVideo = (req,res) => res.render("editvideo", {pageTitle : "edit video"});
export const delVideo = (req,res) => res.render("delvideo", {pageTitle : "del video"});

