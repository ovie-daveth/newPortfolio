import mongoose from 'mongoose'

const portSchema = mongoose.Schema({
    title: {
        rquired: true,
        type: String,
    },
    imgUrl: {
        rquired: true,
        type: String,
    },
    desc: {
        rquired: true,
        type: String,
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    category: {
        type: String,
        required: true,
        enum: [
            'frontend-heavy',
            "Backend-heavy",
            "mobile-app",
        ]
    }
},{timestamps: true})

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portSchema)

export default Portfolio