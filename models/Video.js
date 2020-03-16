import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema( {
    fileUrl: {
        type: String,
        required : "file URL is required"
    },
    title : {
        type: String,
        required : "file Title is required"
    },
    description: String,
    views : {
        type : Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default :Date.now
    },
    // [연결]video 에 달린 comment id 집합을 연결하는 방법 ex) video = [1,2,4,7]
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]

})
const model = mongoose.model("Video", VideoSchema);
export default model;