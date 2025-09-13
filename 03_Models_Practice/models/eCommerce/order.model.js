import mongoose from 'mongoose';

const orderItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItems: {
    type: [orderItemSchema],
  },
  address: {
    type: String,
    required: true,
  },
  orderedProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  status: {
    type: String,
    enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
    default: 'PENDING',
  },

  // placed: {
  //   type: Boolean,
  //   default: false,
  // },
  // delivered: {
  //   type: Boolean,
  //   default: false,
  // },
  // cancel: {
  //   type: Boolean,
  //   default: false,
  // },
});

export const Order = mongoose.model('Order', orderSchema);
