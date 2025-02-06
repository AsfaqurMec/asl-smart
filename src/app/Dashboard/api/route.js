import { connectDB } from "../../../../lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  
  try {
    const db = await connectDB();
    const collection = db.collection("submit");
    
    const data = request.body;
    const result = await collection.insertOne(data);


    // Return the created user data along with the success message
    return NextResponse.json({ message: 'Data saved successfully!', data: result });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something Went Wrong", error: error.message },
      { status: 500 }
    );
  }
};