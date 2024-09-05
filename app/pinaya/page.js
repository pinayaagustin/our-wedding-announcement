'use client'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    console.log('Audio playing');
                })
                .catch((error) => {
                    console.error('Autoplay was prevented:', error);
                    setIsPlaying(false);
                });
        }
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
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
    <div className="w-full items-center justify-center flex flex-col">
        <audio ref={audioRef} src="/music.mp3" loop className="hidden"></audio>
        <button onClick={toggleAudio} className="fixed top-4 right-4 z-50 bg-[#FFCBCB] hover:bg-blue-900 text-white p-3 rounded-full">
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="sm" />
        </button>
      
    
        <div className='w-full h-svh flex flex-col justify-center gap-10 bg-primary text-secondary px-10 py-10'>
            <p className="sm:text-lg text-sm font-bold text-center">
                Dengan penuh cinta dan sukacita, kami bermaksud membagikan kabar bahagia ini sekaligus memohon doa dan restu
                dari teman-teman sekalian untuk pernikahan kami :
            </p>
        
            <div className='flex flex-col w-full gap-4'>
                <div className="flex flex-row justify-center w-full mx-auto gap-4 items-center">
                    <div className="w-1/2 p-4">
                        <p className={"sm:text-7xl text-2xl font-extrabold  text-left " + great.className}>
                            Kukuh Iman Damaryanto
                        </p>
                    </div>
                    <div className="w-1/2 sm:w-1/3 p-4 relative aspect-[4/4]">
                        <Image src='/2.jpeg' fill className="rounded-full object-cover" />
                    </div>
                </div>
                <p className={"sm:text-8xl text-2xl gap-32 font-extrabold  text-center " + great.className}>&</p>
                <div className="flex flex-row justify-center w-full mx-auto gap-4 items-center">
                    <div className="w-1/2 sm:w-1/3 p-4 relative aspect-[4/4]">
                        <Image src='/2.jpeg' fill className="rounded-full object-cover" />
                    </div>
                    <div className="w-1/2 p-4">
                        <p className={"sm:text-7xl text-2xl font-extrabold  text-right " + great.className}>
                            Pinaya Agustin
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#ffeae3]">
            <p className="text-lg text-[#121481] text-center mt-10" >yang akan dilaksanakan pada :</p>
            <p className="text-2xl font-bold text-[121481] text-center ">Jum'at, 6 Desember 2024</p>
        
        <div className="px-10">
            <p>
                Kami memohon maaf karena tidak mengundang teman-teman sekalian. Kami memutuskan untuk mengadakan acara pernikahan kami secara sederhana, 
                yang hanya akan dihadiri oleh keluarga besar dan kerabat dekat kami saja. Meski 
                begitu, kehadiran kalian di hati kami serta doa dan dukungan dari kalian akan selalu
                berarti dan menjadi anugerah yang tak ternilai.
            </p>
        </div>
        </div>
        {/* <div className="flex items-center justify-center"> */}
            <div className="flex sm:flex-row flex-col w-full p-10 gap-8 mt-20 bg-[#0a2858]">
                <form onSubmit={handleSubmit} className="space-y-4 sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl">
                <h3 className="text-center font-semibold text-[#121481]">Tulis Ucapan Disini</h3>
                <div>
                    <label className="block text-left text-[#121481] text-sm font-medium mb-2">Nama :</label>
                    <input 
                        type="text"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
                </div>

                <div>
                    <label className="block text-left text-[#121481] text-sm font-medium mb-2">Ucapan Selamat :</label>
                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required>   
                    </textarea>
                </div>

                <div className="flex justify-center">
                <button type="submit" className="text-center bg-slate-200 text-[#121481] py-2 px-4 rounded-2xl hover:bg-[#FFB1B1] transition duration-300">Kirim</button>
                </div>
                </form>

                <div className="mx-auto flex-auto sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl overflow-y-auto max-h-96">
                    <h3 className="text-center font-semibold text-[#121481] mb-4">Doa-doa dari kalian sangat berarti bagi kami, terima kasih!</h3>
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className="p-4 bg-white rounded-md shadow-sm">
                                <p className="font-bold text-[#121481]">{msg.name}</p>
                                <p className="text-ray-600">{msg.message}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-full h-svh">lalallaa</div>
        {/* </div> */}
    </div>
  );
}
