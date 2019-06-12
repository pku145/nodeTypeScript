'use strict'
import mongoose, {Schema, Document} from "mongoose"

export interface ITask extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const TaskSchema: Schema = new Schema({
    name: {
        type: String,
        required: "Enter the name of task"
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'complete'],
        default: 'pending'
    }
})
export default mongoose.model<ITask>('Tasks', TaskSchema);