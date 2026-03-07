import { Link } from "react-router-dom"
import { FaPlus, FaHistory, FaBars, FaTimes, FaSearch } from "react-icons/fa"
import { useState } from "react"

export default function Navbar() {

    const [open, setOpen] = useState(true)

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 transition"
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >

                <nav className="h-full mt-10 flex flex-col p-4">

                    {/* Search Input */}
                    <div className="relative mb-6">
                        <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full pl-9 pr-3 py-2 bg-gray-800 text-white rounded-md outline-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Menu */}
                    <ul className="space-y-2">

                        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer transition">
                            <FaPlus />
                            <Link to="/">New Chat</Link>
                        </li>

                        <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer transition">
                            <FaHistory />
                            <Link to="/history">Chats</Link>
                        </li>

                    </ul>

                    {/* Bottom Section */}
                    <div className="mt-auto text-xs text-gray-400 border-t border-gray-700 pt-3">
                        Content Creator AI
                    </div>

                </nav>

            </aside>
        </>
    )
}