import { NextResponse } from 'next/server'

export function middleware(req){
    const business = req?.cookies?.business ? JSON.parse(req.cookies.business) : false;

    if (!business) {
        return NextResponse.next();
    }
    return NextResponse.redirect("/business/panel");
}