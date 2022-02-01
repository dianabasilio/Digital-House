function aprrovedAdmin(req,res,next){
    const listAdmins= ['Ada', 'Greta', 'Vim', 'Tim'];

    if ( req.query.user){

        if(listAdmins.includes(req.query.user)){
            next();

        } else{
            res.send('No eres Admin');
        }
    }
    else{
        res.send('No eres Admin');
    }
};

module.exports = aprrovedAdmin;