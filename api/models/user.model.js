import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    profilePicture:{
        type: String,
        default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727251499~exp=1727255099~hmac=be7b7c17bb359d23a6bd5bd40d3e3caf6eee8717793998dab9dc966ce6289f4c&w=740",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    {timestamps:true},

);

const User = mongoose.model('User', userSchema);

export default User;