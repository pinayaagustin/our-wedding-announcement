'use client'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Great_Vibes } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
    };

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
    <div className="container mx-auto px-6 py-10 flex flex-col gap-10">
        <audio ref={audioRef} src="/music.mp3" loop className="hidden"></audio>
        <button onClick={toggleAudio} className="absolute top-4 right-4 bg-blue-300 hover:bg-blue-900 text-white p-3 rounded-full">
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="sm" />
        </button>
      
    
        <div className='flex flex-col gap-10 mt-12'>
            <p className="sm:text-lg text-sm text-gray-700 text-justify">
                Dengan penuh cinta dan sukacita, kami bermaksud membagikan kabar bahagia ini sekaligus memohon doa dan restu
                dari teman-teman sekalian untuk pernikahan kami :
            </p>
        </div>
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2 p-4">
            <p className={"sm:text-7xl text-2xl font-extrabold text-blue-900 text-left " + great.className}>
                Kukuh Iman Damaryanto
            </p>
            </div>
            <div className="w-1/2 p-2 flex justify-center items-center">
            <img src="/2.jpeg" className="max-w-xs h-auto w-full md:max-w-sm lg:max-w-md rounded-2xl opacity-95" />
            </div>
        </div>

            <p className={"sm:text-8xl text-2xl gap-32 font-extrabold text-blue-900 text-center " + great.className}>&</p>
            
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2 p-2 flex justify-center items-center">
            <img src="/2.jpeg" className="max-w-xs h-auto w-full md:max-w-sm lg:max-w-md rounded-2xl opacity-95" />
            </div>    
            
            <div className="w-1/2 p-4">
            <p className={"sm:text-7xl text-2xl font-extrabold text-blue-900 text-right " + great.className}>
                Pinaya Agustin
            </p>
            </div>
        </div>

            <p className="text-lg text-gray-700 text-center mt-10" >yang akan dilaksanakan pada :</p>
            <p className="text-2xl font-semibold text-blue-900 text-center ">Jum'at, 6 Desember 2024</p>
        
        <div>
            <p>
                Bingung ya? "Kok ga ada informasi lokasi dan waktu?"
            </p>
            <p>
                Yups! Kami memutuskan untuk mengadakan acara pernikahan kami secara sederhana, 
                yang hanya akan dihadiri oleh keluarga besar dan kerabat dekat kami saja. Meski 
                begitu, kehadiran kalian di hati kami serta doa dan dukungan dari kalian akan selalu
                berarti dan menjadi anugerah yang tak ternilai.
            </p>
        </div>
        {/* <div className="flex items-center justify-center"> */}
            <div className="flex sm:flex-row flex-col w-full gap-8 mt-20">
                <form onSubmit={handleSubmit} className="space-y-4 sm:w-1/2 w-full p-4 bg-orange-100 shadow-md rounded-2xl">
                <h3 className="text-center font-semibold text-gray-700">Tulis Ucapan Disini</h3>
                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Nama :</label>
                    <input 
                        type="text"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
                </div>

                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Ucapan Selamat :</label>
                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required>   
                    </textarea>
                </div>

                <div className="flex justify-center">
                <button type="submit" className="text-center bg-slate-200 text-gray-700 py-2 px-4 rounded-2xl hover:bg-orange-200 transition duration-300">Kirim</button>
                </div>
                </form>

                <div className="mx-auto flex-auto sm:w-1/2 w-full p-4 bg-orange-100 shadow-md rounded-2xl overflow-y-auto max-h-96">
                    <h3 className="text-center font-semibold text-gray-700 mb-4">Doa-doa dari kalian sangat berarti bagi kami, terima kasih!</h3>
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className="p-4 bg-white rounded-md shadow-sm">
                                <p className="font-bold text-gray-700">{msg.name}</p>
                                <p className="text-ray-600">{msg.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        {/* </div> */}
    </div>
  );
}
