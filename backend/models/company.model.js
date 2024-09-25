// import mongoose from "mongoose";

// const companySchema = new mongoose.Schema({
//     companyName: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     description: {
//         type: String,
//     },
//     website: {
//         type: String,
//     },
//     location: {
//         type: String,
//     },
//     logo: {
//         type: String, // URL to company logo
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
// }, { timestamps: true });

// export const Company = mongoose.model("Company", companySchema);

import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Company name is required"],
        unique: true,
        trim: true // Ensure no leading or trailing spaces
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    logo: {
        type: String, // URL to company logo
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);