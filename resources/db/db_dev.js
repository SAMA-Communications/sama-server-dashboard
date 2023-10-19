import mongoose from "mongoose";

const dbDev = mongoose.createConnection(`${process.env.MONGODB_DEV_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export const dbDevNavigation = {
  name: "DEV env",
};

export default dbDev;
