const userModel = require('../Model/UserModel');


const createUser = async (req, res) => {
    try {
        
       
  
        let {firstname,email,lastname,country, state,city,gender,dob} = req.body;
       
        if (!firstname) {return res.status(400).send({ status: false, message: "Enter your  firstname" }); }
        if (!email) {return res.status(400).send({ status: false, message: "Enter your  email" }); }
        if (!lastname) {return res.status(400).send({ status: false, message: "Enter your  lastname" }); }
        if (!country) {return res.status(400).send({ status: false, message: "Enter your  country" }); }
        if (!state) {return res.status(400).send({ status: false, message: "Enter your  state" }); }
       
        if (!city) {return res.status(400).send({ status: false, message: "Enter your  city" }); }
        if (!gender) {return res.status(400).send({ status: false, message: "Enter your  gender" }); }

        
        if (!dob) {return res.status(400).send({ status: false, message: "Enter your  dob" }); }
        
        //-----------checking address is in right formate or not---------------/
       
      
        function getAge(dateString) {
            const today = new Date();
            const birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        let age = getAge(dob)
        if(age<14){
            return res.status(400).send({status:false,message:"your age is less than 14"})
        }
    
        const dataForCreation={firstname,email,lastname,country, state,city,gender,dob};
        
        const savedData = await userModel.create(dataForCreation);
        return res
            .status(201)
            .send({ status: true, message: "Success", data: savedData });
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
};

const getUser = async (req,res)=>{
let result = await userModel.find()
return res.status(200).send({status:true,message:"success",data:result})
}

module.exports = {createUser,getUser}