
export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-800 p-4 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* {Logo} */}
                <div className="text-white font-bold text-xl">
                    Kukuh + Pinaya
                </div>

                {/* {links} */}
                <div className="space-x-4">
                    <link href="/">
                    <a className="text-gray-300 hover:text-white">Our Story</a>
                    </link>
                    <link href="/social">
                    <a className="text-gray-300 hover:text-white">Social Media</a>
                    </link>
                </div>
            </div>
        </nav>
    );
}