import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    text : {
        type: String,
        required: "Text is required"
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
    /*  comment 에 해당하는 video id 를 저장하는 방법, ex)) video: 2
    video : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Video"
    } 
    */

})

const model = mongoose.model("Comment", CommentSchema);
export default model;