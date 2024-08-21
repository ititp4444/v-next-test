import Link from 'next/link'
import type { FC } from 'react'
const Header: FC = () => {
    return (
        <header>
            <h1>header</h1>
            <div>
                <Link href={'/users/'}>users</Link>
            </div>
            <div>
                <Link href={'/admin/'}>admin</Link>
            </div>
            <div>
                <Link href={'/'}>home</Link>
            </div>
        </header>
    )
}
export default Header
