import { NextResponse } from "next/server";
import Product from "../../../models/Product";
import connect from "../../../utils/db";

export const GET = async (request) => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 404 });
  }
};
