import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    {/* Sử dụng Link để điều hướng */}
                    <li>
                        <Link to="/home" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;