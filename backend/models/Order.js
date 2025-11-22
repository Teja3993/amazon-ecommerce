const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true }
      }
    ],
    total: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    payment: { type: String, required: true },
    orderId: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
