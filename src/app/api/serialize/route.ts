import { Serializer } from "@/helpers/serializer";
import { Portfolio } from "@/helpers/types";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const body:Portfolio = await request.json();
        const base64 = Serializer.encode(JSON.stringify(body));
        const appUrl = process.env.NEXT_PUBLIC_URL;
        const url = `${appUrl}/you?data=${base64}`;
        return NextResponse.json({
            url
        });
    } catch (error) {
        return NextResponse.json(error)    
    }
    
}