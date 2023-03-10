import Image from "next/image";
import Link from "next/link"
import React from "react"
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
    return (
        <div className="h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="pt-8 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-row items-center justify-between">
                            <Link className={`text-[#e0eca8] text-3xl ${atma.className}`} href="#">Enviro</Link>
                            <div className="flex lg:hidden text-white">
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
                </header>
                {children}
            </div>
        </div>
    )
}