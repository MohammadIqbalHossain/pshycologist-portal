import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800"
                            href="/"
                        >
                            Pcsyic
                        </a>
                        <button
                            className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-red-200 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="red" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="/"
                                >
                                    <span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="/"
                                >
                                    <span className="ml-2">Blogs</span>
                                </a>
                            </li>


                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="/"
                                >
                                    <span className="ml-2">Inventory</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;