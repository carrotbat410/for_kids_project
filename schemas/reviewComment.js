const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = mongoose;

const reviewCommentSchema = new Schema(
    {
        reviewCommentId: { type: Number }, // 댓글 번호
        reviewPostId: { type: Number }, // 댓글 단 게시글 번호
        nickname: { type: String }, // 댓글 작성자
        profileUrl: { type: String }, // 댓글 작성자 프로필 이미지
        comment: { type: String, required: true }, // 댓글 내용
        createdAt : {type:String}
    },
    
);

reviewCommentSchema.plugin(AutoIncrement, { inc_field: "reviewCommentId" });

module.exports = mongoose.model("ReviewComment", reviewCommentSchema);