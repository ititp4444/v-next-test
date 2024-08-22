'use client'
import React from 'react'
// import { revalidatePath } from 'next/cache'
import { serverRevalidatePath } from '../lib/serverRevalidatePath'
import { useRouter } from 'next/navigation'
const Login2 = () => {
    const router = useRouter()
    async function createInvoice(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        // 'use server'
        // フォームデータを取得
        const formData = new FormData(event.currentTarget)
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        try {
            const res = await fetch(`/api/login`, { method: 'POST', body: JSON.stringify(rawFormData), credentials: 'include' })
            const result = await res.json()
            if (result) {
                await serverRevalidatePath()
                router.push('/admin')
            }
        } catch (error) {
            console.error(error)
        }
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
