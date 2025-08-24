import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const token = (await cookies()).get("token")?.value;
        if (!token) return NextResponse.json({}, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_AUTH_TOKEN);
        const { payload } = await jwtVerify(token, secret);
        return NextResponse.json(payload);
    }catch(error) {
        console.log(error)
    }
}