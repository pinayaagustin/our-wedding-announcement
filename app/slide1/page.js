"use client"
import { useState } from 'react';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="relative w-full max-w-md">
                {/* Amplop Tertutup */}
                <div className={`envelope ${isOpen ? 'open' : ''}`}>
                    <div className="envelope-flap" onClick={handleOpen}></div>
                    <div className="envelope-body"></div>
                </div>

                {/* Konten Undangan */}
                {isOpen && (
                    <div className="invitation bg-white p-8 rounded shadow-md absolute w-full top-0 left-0 mt-10">
                        <h1 className="text-3xl font-bold text-center mb-4">Wedding Announcement</h1>
                        <p className="text-center mb-4">We are delighted to announce the wedding of</p>
                        <h2 className="text-2xl font-semibold text-center mb-2">Kukuh Iman Damaryanto & Pinaya Agustin</h2>
                        <p className="text-center mb-4">on December 6, 2024</p>

                        <h3 className="text-xl font-bold mb-4">Send Your Congratulations</h3>
                        <form className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                            />

                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                required
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                            />

                            <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}