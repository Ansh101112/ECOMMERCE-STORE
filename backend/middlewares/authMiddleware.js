// isko complete krna hein middlewares ko..... baad mein hee sahi but krna....

//protected routes token base
export const requireSignIn= async (req,res,next)=>{
 try{
    console.log("take care of yours middlewares are in developement!!!")
 }
catch(error){
    console.log(error);
}
};

//admin access
export const isAdmin = async(req,res,next)=>{
    try{
        const user = await userModels.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: "unauthorized access"
            })
        }else{
            next();
        }
    }catch(error){
        console.log(error)
    }
}