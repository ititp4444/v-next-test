import React, { FC } from 'react'
import Header from '@pcm/ui/layout'
import RegisterForm from '../components/RegisterFrom'
import Login2 from '../components/Login2'
const fetchData = async () => {
    try {
        const header = {
            'X-Requested-With': 'XMLHttpRequest',
            referrer: 'https://fe-next-hono.pages.dev'
        }
        const res = await fetch(`${process.env.API_BASE}/admin/users`, { headers: header, cache: 'no-store' })
        const result = await res.json()
        return result
    } catch (error) {
        return error
    }
}

export default async function Users() {
    const list = await fetchData()
    return (
        <>
            <Header />
            <div>
                <h2>登録ブロック</h2>
                <RegisterForm />
            </div>
            <br />
            <div>
                <h2>ログインブロック</h2>
                <Login2 />
            </div>
            <div>
                <h2>リストブロック</h2>
                {list?.map((item: any, i: number) => {
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
