import { cleanEnv } from "envalid";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { str, port } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  MONGO_URI: str(),
  PORT: port(),
});
