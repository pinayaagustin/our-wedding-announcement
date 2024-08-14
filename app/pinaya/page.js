import { Great_Vibes } from 'next/font/google';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col gap-10">
        
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

            <p className="text-sm text-gray-700 text-center" >yang akan dilaksanakan pada :</p>
            <p className="text-2xl font-bold text-blue-900 text-center ">Jum'at, 6 Desember 2024</p>
        
        
        {/* <div className="flex items-center justify-center"> */}
            <div className="flex sm:flex-row flex-col w-full gap-8 mt-20">
                <form className="space-y-4 sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl">
                <h3 className="text-center font-semibold text-gray-700">Tulis Ucapan Disini</h3>
                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Nama :</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
                </div>

                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Ucapan Selamat :</label>
                    <textarea className="w-full px-4 py-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required></textarea>
                </div>

                <div className="flex justify-center">
                <button type="submit" className="text-center bg-slate-200 text-gray-700 py-2 px-4 rounded-2xl hover:bg-slate-400 transition duration-300">Kirim</button>
                </div>
                </form>

                <div className="mx-auto flex-auto sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl ">
                    <h3 className="text-center font-semibold text-gray-700 mb-4">Ucapan Selamat yang Diterima</h3>
                </div>
            </div>
        {/* </div> */}
    </div>
  );
}
