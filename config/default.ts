require("dotenv").config();
const pword = process.env.PWORD;

export default {
	port: 1337,
	host: "localhost",
	dbUri: `mongodb+srv://shlomoLiquid:${pword}@thebackend.laolw.mongodb.net/theBackEnd?retryWrites=true&w=majority`,
	saltWorkFactor: 10,
};
