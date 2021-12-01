import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import logger from "../utils/logger";

export const createUserHandler = async (
	req: Request<{}, {}, CreateUserInput["body"]>,
	res: Response
) => {
	try {
		const user = await createUser(req.body);
		return user;
	} catch (err: any) {
		logger.error(err);
		return res.status(409).send(err.message);
	}
};
