import { NextResponse } from "next/server";
import Friend from "../../../models/user.modl";
import connect from "../../../db/dbconfig";

export async function POST(req) {
  const { firstName, lastName, email, message } = await req.json();
  try {
    connect();
  } catch (error) {
    console.log(error.message);
  }
}
