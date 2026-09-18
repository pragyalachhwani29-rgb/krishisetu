import mongoose,{Schema}from"mongoose";
const schema=new Schema({marketId:{type:String,required:true,unique:true},name:{type:String,required:true},price:Number,trend:String,arrival:Number,distance:Number,transport:Number,handling:Number,demand:String,city:String},{timestamps:true});
export default mongoose.model("Market",schema);
