// create Token and saving it in cookie
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();   // User Schema must have getJWTTOKEN method
    // options for cookie
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000  // written in milliseconds
        ),
        httpOnly : true,
    };

    res.status(statusCode).cookie("token",token,options).json({
        success: true, user, token
    });

}

export default sendToken;  // must be written in util folder
