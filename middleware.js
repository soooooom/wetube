import routes from "./routes"

export const localMiddleware=(req,res,next) => {
    res.locals.routes= routes;
    res.locals.siteName = "WeTube";
    res.locals.user = {
        isAuthenticated : true,
        id :48
    }
    next();
}