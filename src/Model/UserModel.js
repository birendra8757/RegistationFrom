const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    country: String,
    state: String,
    city: String,
    gender: String,
    dob: Date,
    
  },
  
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);

