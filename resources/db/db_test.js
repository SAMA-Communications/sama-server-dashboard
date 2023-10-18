import mongoose from "mongoose";

const dbTest = mongoose.createConnection(`${process.env.MONGODB_TEST_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default dbTest;
