const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
*/
const IdeaSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Idea', IdeaSchema)