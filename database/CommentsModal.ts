import mongoose, { Schema, models, model, Document } from 'mongoose';

export interface IComment extends Document {
  replies?: Schema.Types.ObjectId[];
  user: Schema.Types.ObjectId;
  createdAt: Date;
  content: string;
  upvotes?: Schema.Types.ObjectId[];
  downvotes?: Schema.Types.ObjectId[]
}


const CommentSchema: Schema<IComment> = new Schema<IComment>({
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply',
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  downvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

// Create the Comment model
const Comment =models.Comment || model<IComment>('Comment', CommentSchema);

export default Comment;