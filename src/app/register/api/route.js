

import { connectDB } from "../../../../lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });

    if (exist) {
      // Use 409 Conflict instead of 304
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const resp = await userCollection.insertOne({ ...newUser });

    // Return the created user data along with the success message
    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something Went Wrong", error: error.message },
      { status: 500 }
    );
  }
};
