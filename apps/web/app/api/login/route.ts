import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    const body = await req.json()

    const res = await fetch(`${process.env.API_BASE}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
    })
    const result = await res.json()
    if (result?.token) {
        cookies().set({
            name: 'token',
            value: result?.token,
            httpOnly: true,
            path: '/',
            sameSite: 'lax',
            maxAge: 1 * 60
        })
        //
    }
    // return NextResponse.redirect(new URL('/admin', req.url))
    return Response.json(result)
}
