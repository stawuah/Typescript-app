import dotenv from "dotenv";
dotenv.config();

const env = {
  JWT_SECRET: process.env.JWT_SECRET || "sddtfyguhijokp['pkj;lhkgujyfth",
  EXPIRES: process.env.EXPIRES || "1d",
};

export default env;
