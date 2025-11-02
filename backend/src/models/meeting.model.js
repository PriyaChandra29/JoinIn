import mongoose, { Schema } from "mongoose"

const meetingSchema = new Schema( 
    {
        user_id: { type: String },
        meetingSchema: { type: String, requied: true},
        date: { type: Date, default: Date.now, required: true}
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };