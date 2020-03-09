//making URLs
// Global thing
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
// ex)) /users/1
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PW = "/change-pw";

// Videos
const VIDEOS ="/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
// ex)) /videos/2/edit
const DEL_VIDEO = "/:id/delete";


const routes = {
    home: HOME,
    join: JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search :SEARCH,
    users : USERS,
    userDetail: id => {
        if(id){
            return `/users/${id}`;
        }
        else{
            return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILE,
    changePw : CHANGE_PW, 
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : id =>{
        if(id){
            return `/videos/${id}`;
        }
        else{
            return VIDEO_DETAIL;
        }
    },
    editVideo : EDIT_VIDEO,
    delVideo : DEL_VIDEO
}

export default routes;