import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'}, //link 2 db's
    title:String,
    address:String,
    photos:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuests:Number,
})

const Placemodel = mongoose.model('Place',PlaceSchema)
export default Placemodel;