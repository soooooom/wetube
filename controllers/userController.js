import routes from "../routes";
import Profile from "../models/Profile";

export const getJoin =(req,res) => {
    res.render("join", {pageTitle : "join"});
};
export const postJoin = (req,res) => {
    const {
        body : {
        name,
        email,
        password,
        password2
        }
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle : "join"});
    }
    else{
        // save user info, login
        console.log(req.body);
        res.redirect(routes.home);
    }
}
export const getLogin =  (req,res) => res.render("login", {pageTitle : "login"});
export const postLogin = (req,res) => {
    res.redirect(routes.home);
}
export const logout = (req,res) => {
    //todo: logout
    res.redirect(routes.home);
}
export const users =(req, res) => res.render("users", {pageTitle : "users"});
export const userDetail = (req, res) => res.render("usersDetail", {pageTitle : "usersdetail"});
export const getEditProfile = (req, res) => res.render("editProfile", {pageTitle : "editprofile"});
export const postEditProfile = async(req, res) => {
    const{
        body : { name, email }, 
        file : { path }
    } =req;
    const newAvatar = await Profile.create({
        name,
        email,
        fileUrl: path
    })
    res.redirect(routes.userDetail(newAvatar.id));
}
export const changePw = (req, res) => res.render("changePW", {pageTitle : "changePW"});

