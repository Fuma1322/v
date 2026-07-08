'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'

export default function Navbar () {

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Orders", path: "/orders" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-white w-full md:text-sm md:border-none m-0 p-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h2 className="font-extrabold text-2xl"><span className='text-[#25D366]'>Maseru</span>Plug</h2>
                    </Link>
                </div>
                <div className="hidden md:block flex-1 pb-3 mt-8 md:pb-0 md:mt-0">
                    <ul className="justify-end items-center space-y-10 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-black font-semibold hover:text-gray-600">
                                        <Link href={item.path} className="block mr-20">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <div className="flex flex-col gap-y-4 gap-x-6 md:flex-row md:space-y-0">
                            <Button className="inline-flex h-12 lg:w-[210px] animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#25D366_20%,#13a047_50%,#25D366_80%)] bg-[length:200%_100%] px-6 font-bold text-[#111111]">
                                <Link 
                                    href="/dashboard"
                                    >
                                    Dashboard
                                </Link>
                            </Button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}