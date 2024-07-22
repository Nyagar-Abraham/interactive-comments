import mongoose, { Schema, models, model, Document } from 'mongoose';

export interface IReply extends Document {
	replyingTo: String;
	user: Schema.Types.ObjectId;
	createdAt: Date;
	content: string;
	upvotes?: Schema.Types.ObjectId[];
	downvotes?: Schema.Types.ObjectId[];
}

// Define the Reply schema
const ReplySchema: Schema<IReply> = new Schema<IReply>({
	replyingTo: {
		type: String,
		required: true,
	},
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
	upvotes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	downvotes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

// Create the Reply model
const Reply = models.Reply || model<IReply>('Reply', ReplySchema);

export default Reply;
