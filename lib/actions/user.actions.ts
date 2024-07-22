import { revalidatePath } from 'next/cache';
import User from '../../database/userModal';
import { connectToDatabase } from '../mongoose';
import { CreateUserParams, UPdateUserParams } from '../shared.types';

export async function createUser(userData: CreateUserParams) {
	try {
		connectToDatabase();

		const user = await User.create({ userData });
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
export async function updateUser(params: UPdateUserParams) {
	try {
		connectToDatabase();
		const { path, updateData, clerkId } = params;

		const user = await User.findOneAndUpdate({ clerkId }, updateData, {
			new: true,
		});

		revalidatePath(path);
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function deleteUser(params: { clerkId: string }) {
	try {
		connectToDatabase();

		const { clerkId } = params;

		const user = await User.findOneAndDelete({ clerkId });
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
