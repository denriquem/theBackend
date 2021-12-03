import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../model/user.model";

export const createUser = async (
	input: DocumentDefinition<
		Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
	>
) => {
	try {
		return await UserModel.create(input);
	} catch (err: any) {
		throw new Error(err);
	}
};

export async function validatePassword({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	const user = await UserModel.findOne({ email });

	if (!user) {
		return false;
	}

	const isValid = await user.comparePassword(password);

	if (!isValid) return false;

	return omit(user.toJSON(), "password");
}
