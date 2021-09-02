const express = require('express');
const {createUser, updateUser, getUser, deleteUser} = require('./TeacherRepository');
const router = express.Router();
router.use(express.json());

router.post('/',
    async (request, response) => {
        try{
            const data = request.body;
            await createUser(data);
            return response.status(200).send("add user");
        }catch(err){
            return response.status(404).json({error: err.message});
        }
});

router.put('/:id',
    async (request, response) => {
        try{
            const data = request.body;
            const uid = request.params.id;
            await updateUser(uid,data);
            return response.status(200).send({status:"update user", user:data});
        }catch(err){
            return response.status(441).json({error: err.message});
        }
});

router.get('/:id',
    async (request, response) => {
        try{
            const uid = request.params.id;
            const user = await getUser(uid);
            return response.status(200).send(user);
        }catch(err){
            return response.status(441).json({error: err.message});
        }
});


router.delete('/:id',
    async (request, response) => {
        try{
            const uid = request.params.id;
            await deleteUser(uid);
            return response.status(200).send("Delete user");
        }catch(err){
            return response.status(441).json({error: err.message});
        }
});



module.exports  = router;