import mongoose from "mongoose";
import Kpi from "../models/Kpi";
import { kpis } from "../data/data";

export default async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB connected!")
    // await Kpi.insertMany(kpis)
  } catch (error) {
    throw new Error("Connection failed!", error);
  }
}
