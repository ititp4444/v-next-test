'use client'
import React from 'react'
const Login2 = () => {
    async function createInvoice(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        // 'use server'
        // フォームデータを取得
        const formData = new FormData(event.currentTarget)
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password')
        }
        // try {
        //     // const num = Math.floor(Math.random() * (150 - 1) + 1)
        //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`, { next: { revalidate: 3600 } })
        //     const result = await res.json()
        //     console.log(result)
        // } catch (e) {
        //     console.log(e)
        //     return {}
        // }

        try {
            const res = await fetch(`/api/login`, { method: 'POST', body: JSON.stringify(rawFormData), credentials: 'include' })
            const result = await res.json()
            console.log(result)
            if (result) {
                // location.href = '/admin'
            }
        } catch (error) {
            console.log(error)
        }

        // console.log(result)

        // mutate data
        // revalidate cache
    }
    return (
        <div>
            <form onSubmit={createInvoice}>
                <div>
                    <input className='text-black' type='text' name='username' placeholder='username' />
                </div>
                <div>
                    <input className='text-black' type='text' name='password' placeholder='password' />
                </div>
                <div>
                    <button>ログイン</button>
                </div>
            </form>
        </div>
    )
}

export default Login2
