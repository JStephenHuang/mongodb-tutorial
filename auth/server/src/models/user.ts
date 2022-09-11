import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    unique: true,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };
