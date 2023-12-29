import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="w-full dark text-white p-2 flex justify-between px-4 no-print bg-neutral-900/90 backdrop-blur">
            <h1>DevTools</h1>
            <div className="flex gap-2">
                <Link className='underline text-base underline-offset-3' href={"/resume"}>Resume Builder</Link>
                <Link className='underline text-base underline-offset-3' href={"/"}>Code Snap</Link>
            </div>
        </header>
    )
}

export default Header