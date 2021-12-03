import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/user.schema";
import logger from "../utils/logger";

export const createUserHandler = async (
	req: Request<{}, {}, CreateUserInput["body"]>,
	res: Response
) => {
	try {
		const user = await createUser(req.body);
		return res.send(omit(user.toJSON(), "password"));
	} catch (err: any) {
		logger.error(err);
		return res.status(409).send(err.message);
	}
};
