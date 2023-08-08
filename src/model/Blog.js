// models/Blog.js
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  desc: { type: String, required: true },
  imageUrl: { type: String,  required: true, }, // To store the actual image
  videoUrl: { type: String }, // To store the actual video
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  category: {
    type: String,
    required: true,
    enum: [
        'next',
        'html',
        'css',
        'react',
        'node',
        'express',
        "firebase",
        "mongo"
    ]
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: []
  },
  loves: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: []
  },
},{timestamps: true});

const Blog = mongoose.models?.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;


