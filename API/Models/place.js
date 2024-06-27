import mongoose from "mongoose";

const placeSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    address:String,
    photos:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuests:Number,
    price:Number,
    rate:Number,
    reviews:Number,
});

const PlaceModel=mongoose.model('Place',placeSchema);

export default PlaceModel;