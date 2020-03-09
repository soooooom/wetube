import routes from "../routes";

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
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "editprofile"});
export const changePw = (req, res) => res.render("changePW", {pageTitle : "changePW"});

