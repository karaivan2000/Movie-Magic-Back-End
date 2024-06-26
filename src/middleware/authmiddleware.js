const jwt = require(`../lib/jwt`);
const { SECRET } = require(`../config/config`);

exports.auth = (req, res, next) => {
    const token = req.cookies[`auth`];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, SECRET);

        req.user = decodedToken;

        next();
    } catch (error) {
        res.clearCookie(`auth`);
        res.redirect(`/auth/login`);
    } 
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        res.redirect(`/auth/login`);
    }

    next();
}