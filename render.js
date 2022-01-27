const axios=require('axios');//is is to make a request



exports.index=(req,res)=>{
axios.get('http://localhost:3000/api/users')
    .then(function(response){
       // console.log("response is:",response);
        res.render('index',{users:response.data});
    })
    .catch(err =>{
        res.send(err);
    })

   
};

exports.add_user=(req,res)=>{
    res.render('add_user');
};

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})//we get the specific user data 
        .then(function(response){
            res.render("update_user", { user : response.data})//specific user data is render with update user file
        })
        .catch(err =>{
            res.send(err);
        })
}