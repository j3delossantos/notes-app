const userController = {};

userController.renderSignUpForm =(req,res) =>{
    res.render('users/signUp');
};

userController.signUp =(req,res)=>{
    res.send('signUp');
};

userController.renderLoginForm = (req,res) =>{
    res.render('users/login');

};

userController.login =(req,res) =>{
    res.send('login')

}

userController.logout =(req,res) =>{
    res.send('logout')

}


module.exports = userController;