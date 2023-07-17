import mongoose from "mongoose";
import { loadType } from "@b_kun/mongoose-currency";

const { Schema } = mongoose;
loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
