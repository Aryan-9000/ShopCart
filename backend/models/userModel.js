import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,    // to automatically add createdAt and updatedAt fields..
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {   // defining methods on a schema .. can be used with corresponding models created
  return await bcrypt.compare(enteredPassword, this.password);
};

// defining mongoose middleware , which will be invoked before saving a User model (when User.create is called)
userSchema.pre("save", async function (next) { 
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
