import mongoose from "mongoose";

const db = mongoose.createConnection(`${process.env.MONGODB_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default db;
