const Note = require('../models/note.model.js');

exports.create=(req,res)=>{
	//console.log(req);
	if (!req.body.content) {
		return res.status(400).send({
			message:'Content can not be empty'
		})
	}

	const note=new Note({
		 title: req.body.title || "Untitled Note", 
        content: req.body.content
	})

 note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll=(req,res)=>{

};


exports.findOne=(req,res)=>{

};


exports.updateOne=(req,res)=>{

};


exports.deleteOne=(req,res)=>{

};

