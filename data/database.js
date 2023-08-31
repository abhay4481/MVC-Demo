import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backEndAPI",
    })
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log(e));
};
