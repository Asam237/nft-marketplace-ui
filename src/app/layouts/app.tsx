"use client";
import Image from "next/image";
import Link from "next/link"
import React, { useState } from "react"
import MenuImg from "../../../public/square.png";
import { Atma } from "next/font/google"

interface MenuProps {
    name: String
    link?: String
}

const menus: MenuProps[] = [
    {
        name: "Marketplace",
        link: "#marketplace"
    },
    {
        name: "Artists",
        link: "#artists"
    },
    {
        name: "Community",
        link: "#community"
    },
    {
        name: "How It Works",
        link: "#howitworks"
    },
]

const atma = Atma({ subsets: ['latin'], weight: "400" })

export const AppLayout = ({ children }: any) => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className="h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="pt-8 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-row items-center justify-between">
                            <Link className={`text-[#e0eca8] text-3xl ${atma.className}`} href="#">Enviro</Link>
                            <div className="flex lg:hidden text-white nav__menu-bar"
                                onClick={() => {
                                    setNavbar(!navbar)
                                }}
                            >
                                <Image src={MenuImg} alt="image" className="w-8 h-8" />
                            </div>
                            <ul className="hidden lg:flex">
                                {
                                    menus.map((item: any, index) => {
                                        return (
                                            <li className="text-white lg:ml-8 text-sm mt-4 lg:mt-0" key={index}>
                                                <Link href={item.name}>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-white">
                            {
                                menus.map((item: any, index) => {
                                    return (
                                        <li key={index}>
                                            <Link className="text-white text-sm mt-4" href={item.name}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </header>
                {children}
            </div>
        </div>
    )
}