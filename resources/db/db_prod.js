import mongoose from "mongoose";

const dbProd = mongoose.createConnection(`${process.env.MONGODB_PROD_URL}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export const dbProdNavigation = {
  name: "PROD env",
};

export default dbProd;
