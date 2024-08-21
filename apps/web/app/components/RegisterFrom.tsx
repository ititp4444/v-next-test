'use client'
import React from 'react'
import submitAction from '../lib/action'
const RegisterForm = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // フォームデータを作成
        const formData = new FormData(e.currentTarget)
        // サーバーアクションを呼び出す
        await submitAction(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className='text-black' type='text' name='username' placeholder='username' />
                </div>
                <div>
                    <input className='text-black' type='text' name='password' placeholder='password' />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
