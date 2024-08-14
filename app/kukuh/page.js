import Image from 'next/image';
import '../globals.css';
import { Great_Vibes } from 'next/font/google';

const great = Great_Vibes({weight:['400'],subsets:['latin']})
const story = [
    {
        id:1,
        image:'/1.jpeg',
        description:'Telah lahir anak kecil lucu imut hitam menyebalkan bernama Kukuh Iman Damaryanto',
        date:'Desember 1997'
    },
    {
        id:2,
        image:'/2.jpeg',
        description:'Ceritanya anaknya udah gede',
        date:'Agustus 2024'
    }
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col gap-20">
        <p className={"sm:text-5xl text-2xl font-extrabold text-blue-900 text-center " + great.className}>Hari Bahagia Kami Segera Tiba!</p>
        <div className='flex flex-col gap-12 text-gray-700 items-center px-6'>
            <p className="sm:text-lg text-sm text-justify">
            Dengan penuh cinta dan sukacita, kami bermaksud mambagikan kabar bahagia ini sekaligus memohon doa dan restu dari teman-teman sekalian untuk pernikahan kami :
            </p>
            <div className='flex flex-col w-[70%]'>
                <p className={"sm:text-6xl text-2xl font-extrabold text-blue-900 text-left " + great.className}>Kukuh Iman Damaryanto</p>
                <p className={"sm:text-9xl text-5xl font-extrabold text-blue-900 text-center " + great.className}>&</p>
                <p className={"sm:text-6xl text-2xl font-extrabold text-blue-900 text-right " + great.className}>Pinaya Agustin</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className="sm:text-lg text-sm text-center" >
                    yang akan dilaksanakan pada :
                </p>
                <p className="sm:text-2xl text-xl font-bold text-blue-900 text-center">
                    Jum'at, 6 Desember 2024
                </p>
            </div>
        </div>
        <div className='flex item-center justify-evenly w-full'>
            <div className='flex flex-col items-center gap-4'>
                <div className='relative h-52 w-40'>
                    <Image src='/2.jpeg' fill className='object-cover rounded-lg'/>
                </div>
                <p className='text-sm'>Kukuh Iman Damaryanto</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='relative h-52 w-40'>
                    <Image src='/1.jpeg' fill className='object-cover rounded-lg'/>
                </div>
                <p className='text-sm'>Pinaya Agustin</p>
            </div>
        </div>
        <p className={'text-3xl text-center ' + great.className}>Our Story</p>
        <div className='flex flex-col'>
            {story.map((data,index) => {
                if(index % 2 ==0)
                    return (
                        <div key={data.id} className='flex w-full items-center justify-between'>
                            <div className='flex items-center justify-center h-52 w-40 relative'>
                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-lg'/>
                            </div>
                            <div className='w-1 border-2 border-blue-900 h-52 items-center justify-center flex'>
                                <div className='flex rounded-full bg-blue-900 p-2'/>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 h-52 w-40'>
                                <p className='text-lg'>{data.date}</p>
                                <p className='text-sm text-justify'>{data.description}</p>
                            </div>
                        </div>
                    )
                else{
                    return (
                        <div key={data.id} className='flex w-full items-center justify-between'>
                            <div className='flex flex-col items-center justify-center gap-4 h-52 w-40'>
                                <p className='text-lg'>{data.date}</p>
                                <p className='text-sm text-justify'>{data.description}</p>
                            </div>
                            <div className='w-1 border-2 border-blue-900 h-52 items-center justify-center flex'>
                                <div className='flex rounded-full bg-blue-900 p-2'/>
                            </div>
                            <div className='flex items-center justify-center h-52 w-40 relative'>
                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-lg'/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        <p className="sm:text-lg text-sm text-justify">
            Terima kasih telah meluangkan waktu untuk membaca kabar bahagia kami. Meskipun kami tidak dapat merayakan momen ini bersama secara langsung, doa dan restu dari teman-teman sangat berarti bagi kami. Semoga cinta dan kebahagiaan yang kami rasakan saat ini juga membawa kehangatan dan kedamaian dalam hidup Anda. Dengan penuh rasa syukur, kami menantikan hari-hari penuh berkah ke depan
        </p>
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
    </div>
  );
}
