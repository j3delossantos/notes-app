const helpers = {};

helpers.isAuthenticated =(req,res,next)=>{
    if (req.isAuthenticated()) {
        return next();        
    } else {
        req.flash('error', 'Not Authorized')
        res.redirect('/user/login');
    }
}

module.exports = helpers;