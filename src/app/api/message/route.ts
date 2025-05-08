import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const { name, email, message } = body
    console.log(body);
}