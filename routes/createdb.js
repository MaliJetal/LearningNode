exports.create = function(req, res){
    nano.db.create(req.body.dbname, function(err, data){
        if(err){
            res.send("Error creating DB");
            return;
        }
        res.send("Database Created Successfully!");
    });
}