import { useState } from 'react';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && message) {
            setMessages([...messages, { name, message }]);
            setName('');
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4">Wedding Announcement</h1>
                <p className="text-center mb-4">We are delighted to announce the wedding of</p>
                <h2 className="text-2xl font-semibold text-center mb-2">Kukuh Iman Damaryanto S.Kom & Pinaya Agustin</h2>
                <p className="text-center mb-4">on December 6, 2024</p>

                <h3 className="text-xl font-bold mb-4">Send Your Congratulations</h3>
                <form onSubmit={handleSubmit} className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    />

                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">Your Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    />

                    <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </form>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Messages</h3>
                    <ul className="list-disc list-inside">
                        {messages.map((msg, index) => (
                            <li key={index} className="mb-2">
                                <strong>{msg.name}:</strong> {msg.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}