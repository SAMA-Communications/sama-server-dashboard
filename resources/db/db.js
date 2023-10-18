import mongoose from "mongoose";

const db = await mongoose.connect(`${process.env.MONGODB_URL}`);

export default db;
