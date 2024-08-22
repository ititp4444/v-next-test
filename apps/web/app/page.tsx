import Header from '@pcm/ui/layout'
import Button from '@pcm/ui/element'
import Link from 'next/link'
async function getIndex(num: number) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, { cache: 'force-cache' })
        const result = await res.json()
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}
async function getList() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`, { cache: 'force-cache' })
        const result = await res.json()
        return result.results
    } catch (e) {
        console.log(e)
        return []
    }
}
export default async function Home() {
    const num = Math.floor(Math.random() * (150 - 1) + 1)
    const list = await getList()
    const item = await getIndex(num)
    return (
        <>
            <Header />
            <div className='mt-12 text-center font-mono'>
                <h2 className='text-xl leading-10 text-emerald-300'>jsonplaceholder</h2>
                {item?.title}
            </div>
            {list.map((v: any) => {
                return (
                    <li key={`key_${v.name}`}>
                        <Button>
                            <Link href={`/product/${v.name}`}>{v.name}</Link>
                        </Button>
                    </li>
                )
            })}
        </>
    )
}
