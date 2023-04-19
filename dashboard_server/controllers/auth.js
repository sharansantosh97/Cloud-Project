
const User = require('../model/User');

//code to add user statically
exports.login = async (req,res,next)=>{
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password:req.body.password,
        email:req.body.email,
        isAdmin:req.body.isAdmin,
        status:"Onboarding",
        campusName:req.body.campusName,
        phoneNumber:req.body.phoneNumber
    });
    res.json({'status':200});
}

exports.deleteUser = async (req,res,next)=> {
    const userId = req.body.userId;

    await User.destroy({where: {id: userId}})
    res.json({'status':200});
}


//  insert into `users` (`id`, `firstName`,`lastName`,`password`,`email`,`isAdmin`) values (2,'Admin','A','Admin@123','admin@sjsu.edu,1);

// verify auth
exports.postLogin =async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    const records =  await User.findAll({
        where: { email: email }
    });

   if(records.length ==0){
       // no user
       res.json({"status":401,"message":"no user present"});
   }else{

       if(records[0].password == password){
           req.session.isLoggedIn = true;
            req.session.userId = records[0].id;
           res.json({"status":200,"message":"authorized","isAdmin":records[0].isAdmin, "userId":records[0].id
                   ,name:records[0].firstName+" "+records[0].lastName});
       }else{
           res.json({"status":401,"message":"wrong password"});
       }
   }



};


exports.getAllUsers = async (req,res,next)=>{
    const records =  await User.findAll({
        where: { isAdmin: false }
    });


   let arr = records.map(el=>{
       return {id:el.id,firstName:el.firstName,lastName:el.lastName,
           email:el.email,
           dateCreated : el.createdAt, status:el.status, campusName:el.campusName, phoneNumber:el.phoneNumber}
   })

    res.json({"status":200,"data":arr});
}


exports.logout = (req,res,next)=>{

    console.log("logout reached");
    req.session.destroy();
    res.json({status:200,"message":"user logged off"});
}

