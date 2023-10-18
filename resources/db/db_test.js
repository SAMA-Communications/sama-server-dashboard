import mongoose from "mongoose";

const dbTest = await mongoose.connect(`${process.env.MONGODB_TEST_URL}`);

export default dbTest;
