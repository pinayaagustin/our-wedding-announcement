import { Great_Vibes } from 'next/font/google';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col gap-20">
        <p className={"sm:text-5xl text-2xl font-extrabold mb-32 mt-10 text-blue-900 text-center " + great.className}> ~ Hari Bahagia Kami Segera Tiba! ~</p>
        <div className='flex flex-col gap-5'>
            <p className="sm:text-lg text-sm text-gray-700 text-justify mb-20">
                Dengan penuh cinta dan sukacita, kami bermaksud mambagikan kabar bahagia ini sekaligus memohon doa dan restu
                dari teman-teman sekalian untuk pernikahan kami :
            </p>

            <p className={"sm:text-5xl text-2xl font-extrabold text-blue-900 text-center " + great.className}>Kukuh Iman Damaryanto</p>
            <p className={"sm:text-5xl text-2xl font-extrabold text-blue-900 text-center " + great.className}>&</p>
            <p className={"sm:text-5xl text-2xl font-extrabold text-blue-900 text-center " + great.className}>Pinaya Agustin</p>

            <p className="sm:text-lg text-sm text-gray-700 text-center mb-6 mt-16">yang akan dilaksanakan pada :</p>
            <p className="sm:text-2xl text-xl font-bold text-blue-900 text-center mb-32">
                Jum'at, 6 Desember 2024
            </p>
        </div>
        {/* <div className="flex items-center justify-center"> */}
            <div className="flex sm:flex-row flex-col w-full gap-8">
                <form className="space-y-4 sm:w-1/2 w-full p-4 bg-white shadow-md rounded-md">
                <h3 className="font-semibold text-gray-700">Tulis Ucapan Disini</h3>
                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Nama :</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
                </div>

                <div>
                    <label className="block text-left text-gray-700 text-sm font-medium mb-2">Ucapan Selamat :</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300">Kirim</button>
                </form>

                <div className="mx-auto flex-auto sm:w-1/2 w-full p-4 bg-white shadow-md rounded-md ">
                    <h3 className="font-semibold text-gray-700 mb-4">Ucapan Selamat yang Diterima</h3>
                </div>
            </div>
        {/* </div> */}
    </div>
  );
}
