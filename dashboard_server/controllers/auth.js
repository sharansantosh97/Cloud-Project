
const users = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "vkjbfgIVBSivubdfvh4r38y4r3834Y34871@#y$*&"
//code to add user statically
exports.login = async (req,res,next)=>{
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    // Find user by email
    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Generate JWT
    const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
  
    // Return user details and token in response
    res.status(200).json({ status: 200, email, token , isAdmin: user.isAdmin});
  
}

exports.deleteUser = async (req,res,next)=> {
    const userId = req.body.userId;

    await User.destroy({where: {id: userId}})
    res.json({'status':200});
}

exports.signUp = async (req, res, next) => {
    try {
    const { email, password, name, isAdmin } = req.body;

    // Validate request body
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    console.log("SIGNUP@@@@", email, password)

    // Check if user already exists
    const userExists = await users.findOne({ where: { email } });
    console.log("@@@# userExists", userExists)
    if (userExists) {
        return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = { email, password: hashedPassword, firstName: req.firstName, lastName: req.lastName, status: req.status, campusName: req.campusName, phoneNumber: req.phoneNumber };
    await users.create({
        name,
        email,
        password: hashedPassword,
        isAdmin: isAdmin || false
      });

    // Generate JWT
    const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

    // Return user details and token in response
    return res.status(201).json({ status: 200, email, token, isAdmin });
    } catch(error) {
        console.log("error in signup :", error);
    }

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
    const records =  await users.findAll({
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

