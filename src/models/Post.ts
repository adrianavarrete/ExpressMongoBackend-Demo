import { Schema, model } from "mongoose";
import { createTracing } from "trace_events";

const PostSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true, unique: true, lowercase: true},
    content: {type: String, requiered: true},
    image: String,
    createdAt: {type: Date, default: Date.now},
    updateAt: Date
    
});

export default model('Post', PostSchema);
