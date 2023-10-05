import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { connect } from "http2";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any , res : any) {
    const {fullname , email , company , website , message} = await req.json();
    try {
    const body = await req.json();
    await connectDB();
    await Contact.create(body);

    return NextResponse.json({ message: "Message Sent Successfully" }, { status: 200 });

} catch (e) {
        return NextResponse.json({ message: "Server Error, Please Try Again" }, { status: 500 })
    
}
}




