import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(env.MONGO_URI);
    console.log(`MongoBD connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.listen(port, () => {
  console.log("server is hot and runing on : " + port);
});
