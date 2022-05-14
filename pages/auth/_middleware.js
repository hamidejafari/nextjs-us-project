import { NextResponse } from 'next/server'

export function middleware(req){
    const user = req?.cookies?.user ? JSON.parse(req.cookies.user) : false;

    if (!user) {
        return NextResponse.next();
    }
    return NextResponse.redirect("/panel/dashboard");
}