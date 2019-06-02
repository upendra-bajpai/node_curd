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
	Note.find().then(data=>{
			//res.send(data)
			res.render('home',{data:data});
	}).catch(err=>{
		res.status(500).send({
			message:err.message
		});
	});
};


exports.findOne=(req,res)=>{
	Note.findById(req.params.noteId).then(data=>{
		console.log(data);
		if(data){
		res.send(data)
	}else{
		res.status(400).send({
		message:"Note Not Found"
	});
}
	}).catch(err=>{
		res.status(500).send({
			message:err.message
	});
});
};


exports.updateOne=(req,res)=>{
	Note.findByIdAndUpdate(req.params.noteId).then(data=>{
		if (data) {
			res.status(200).send(data)
		}else{
			res.status(404).send("not found")
		}
		}).catch(err=>{
			res.status(500).send(err.message)
		});

};
exports.deleteOne=(req,res,next)=>{
Note.findByIdAndRemove(req.params.noteId).then(data=>{
	if (!data) {
		next(404)
	}else{
		res.status(200).send(data)
	}
}).catch(err=>{
	next(err)
});

};

