export default async function submitAction(formData: FormData) {
    // 'use server'
    console.log(process.env.API_BASE)
    const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    try {
        // const res = await fetch('/api/register', { method: 'POST', body: JSON.stringify(rawFormData), credentials: 'include' })
        // const result = await res.json()
        const res = await fetch(`/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawFormData),
            credentials: 'include'
        })
        const result = await res.json()
        console.log(result)
    } catch (error) {
        console.log(error)
    }

    // console.log(result)

    // mutate data
    // revalidate cache
}
