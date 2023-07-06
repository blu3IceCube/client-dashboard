import { NextResponse } from "next/server";
import Kpi from "../../../models/Kpi";
import connect from "../../../utils/db";

export const GET = async (request) => {
  try {
    await connect();
    const kpis = await Kpi.find();
    return new NextResponse(JSON.stringify(kpis), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 404 });
  }
};
