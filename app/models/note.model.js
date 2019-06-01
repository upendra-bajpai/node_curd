const mongoose=require('mongoose');

const schema=mongoose.Schema({
	title: String,
	content: String
},{
	timestamps:true
}
)

module.exports=mongoose.model("Note",schema);