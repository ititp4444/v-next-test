import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
    const body = await req.json()
    const res = await fetch(`${process.env.API_BASE}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
    })
    const result = await res.json()
    return Response.json(result)
}
