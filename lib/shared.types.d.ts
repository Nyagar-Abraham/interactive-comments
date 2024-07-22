export interface CreateUserParams {
	clerkId: string;
	username: string;
	name?: string;
	email: string;
	picture: string;
}
export interface UPdateUserParams {
	clerkId: string;
	updateData: {
		username: string;
		name?: string;
		email: string;
		picture: string;
	};
	path: string;
}
