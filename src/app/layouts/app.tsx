import Link from "next/link"
import React from "react"

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

export const AppLayout = ({ children }: any) => {
    return (
        <div className="bg-black h-screen px-10 md:px-12 lg:px-16">
            <header className="pt-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <Link className="text-[#e0eca8] text-3xl" href="#">Enviro</Link>
                        <ul className="flex">
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
    )
}