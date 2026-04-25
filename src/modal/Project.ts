import mongoose, { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },

}, { timestamps: true });

const Project = models.Project || model('Project', projectSchema);

export default Project;