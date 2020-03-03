import * as mongoose from "mongoose";
 
const CommentSchema = new mongoose.Schema({
    imdbID: String,
    text: String
});


const CommentModel = mongoose.model('Comment', CommentSchema);
 
export { CommentModel }

