import mongoose, { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
	clerkId: string;
	name: string;
	username: string;
	email?: string;
	picture: string;
	reputation?: Number;
	comments?: Schema.Types.ObjectId[];
	replies?: Schema.Types.ObjectId[];
	joinedAt: Date;
}

// Define the User schema
const UserSchema = new Schema({
	clerkId: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: false,
		unique: true,
	},
	picture: {
		type: String,
		required: true,
	},
	reputation: {
		type: Number,
		required: false,
		default: 0,
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
	replies: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Reply',
		},
	],
	joinedAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

// Create the User model
const User = models.User || model('User', UserSchema);

export default User;
