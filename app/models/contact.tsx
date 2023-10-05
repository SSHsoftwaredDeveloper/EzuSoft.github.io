import mongoose, { Schema} from "mongoose";

const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true , "Fullname Is Required"],
        trim: true,
        minLength: [3, "Name must be larger than 3 characters"],
        maxLength: [20, "Name must be smaller than 20 characters"],
    },

    email: {
        type: String,
        required: [true , "Email Is Required"]
    },

    time: {
        type: Number,
        required: [true , "TimeLine Is Required"],
    },

    company: {
        type: String,
        required: [true , "Company Name IS Required"]
    },

    website: {
        type: String,
        required: [true , "WebSite Is Required"]
    },

    message: {
        type: String,
        required: [true , "Message Is Required"]
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact" , contactSchema);

export default Contact;