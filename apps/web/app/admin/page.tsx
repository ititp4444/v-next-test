import React from 'react'
import Header from '@pcm/ui/layout'
import { cookies } from 'next/headers'
export const runtime = 'edge'
const fetchData = async () => {
    try {
        const cookieStore = cookies()
        const cookie = cookieStore
            .getAll()
            .map((cookie) => `${cookie.name}=${cookie.value}`)
            .join(';')
        const res = await fetch(`${process.env.API_BASE}/auth/page`, {
            headers: { cookie },
            cache: 'no-store',

            credentials: 'include'
        })
        const result = await res.json()
        console.log(result)
        if (result.status === 401) {
            return []
        }
        return result
    } catch (error) {
        console.log(error, 'error')
        return []
    }
}
export default async function New() {
    const list = (await fetchData()) || []
    return (
        <>
            <Header />
            <h1 className='title'>admin</h1>
            <div>
                {list.map((item: any, i: number) => {
                    return (
                        <div key={i}>
                            <p>{item.username}</p>
                            <p>{item.password}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
