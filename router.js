const express=require('express');
const render=require('/home/manick/Desktop/my-api/crud_app/server/services/render.js');
const router=express.Router();
const controller=require('/home/manick/Desktop/my-api/crud_app/server/controller/controller.js')

router.get('/',render.index);
router.get('/add-user',render.add_user);
router.get('/update-user',render.update_user);


//API
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);
// router.get('/api/users',controller.findUnique);


module.exports=router;