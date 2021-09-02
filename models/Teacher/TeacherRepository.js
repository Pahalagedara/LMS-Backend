let Teacher = require('./Teacher')


const createUser = async (data) => {

        let name = data.name;
        let mobileNumber = data.mobileNumber;
        let email = data.email;
        let subjects = data.subjects;

        let teacher = new Teacher({
            name,
            mobileNumber,
            email,
            subjects
        }); 
        await teacher.save();
}

const updateUser = async (uid,data) => {

        const options = { upsert: true };
        await Teacher.findByIdAndUpdate(uid,data,options);
}

const getUser = async (uid) => {
    
        let userData = await Teacher.findById(uid);
        return(userData);
        
}

const deleteUser = async (uid) => {

    await Teacher.findByIdAndDelete(uid);
}

module.exports = {createUser, updateUser, getUser, deleteUser};