import { Timestamp } from 'bson'
import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  id:{
    type: Number,
    unique: true,
    required: true
  },
  name:{
    type: String,
    required : true
  },
  price:{
    type: Number,
    required: true,
    default: 0 
  },
  description:{
    type: String,
    required: true
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  productImage:{
    type: String
  },
  stock:{
    type: Number,
    default: 0
  }

},{timestamps: true})

export const Product = mongoose.Schema('Product', productSchema)