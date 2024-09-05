'use client'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import '../globals.css';
import '../envelope.css';
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

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

function Envelope({open}){
    return (
        <div className={open ? "letter-image open" : "letter-image"} >
            <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter text-xs text-charcoal">
                
                </div>
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
            </div>
            {/* <div className="shadow"></div> */}
        </div>
    );
}

function FirstPage() {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex flex-col items-center justify-start w-full h-svh pt-24 text-primary bg-white/80' onClick={e => setOpen(!open)}>
            <p className={great.className + ' sm:text-5xl text-3xl text-center w-[80%]' } > Hari Bahagia Kami Segera Tiba! </p>
            <Envelope open={open}/>
            <p className='absolute bottom-24 text-charcoal text-sm'> Klik untuk melanjutkan</p>
        </div>
    )
}

export default function Home() {

    // useEffect(() => {
    //     const sound = new Howl({
    //       src: ['/music.mp3'],
    //       autoplay: true,
    //       loop: true,
    //     });
    
    //     sound.play();
    //   }, []);
    
  return (
    <div className=' h-svh relative'>
    {/* <FirstPage/> */}
    <div className="container mx-auto px-6 py-10 flex flex-col gap-20 text-primary">
        <div className='flex flex-col gap-16  items-center px-6'>
            <p className="sm:text-2xl text-sm text-justify text-charcoal">
            Dengan penuh cinta dan sukacita, kami bermaksud membagikan kabar bahagia ini sekaligus memohon doa dan restu dari teman-teman sekalian untuk pernikahan kami:
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
            <div className='flex flex-col gap-2'>
                <p className="sm:text-lg text-sm text-center" >
                    yang akan dilaksanakan pada :
                </p>
                <p className="sm:text-2xl text-xl font-bold  text-center">
                    Jum'at, 6 Desember 2024
                </p>
            </div>
        </div>
        <p className={'text-3xl text-center ' + great.className}>Our Story</p>
        <div className='flex flex-col'>
            {story.map((data,index) => {
                if(index % 2 ==0)
                    return (
                        <div key={data.id} className='flex w-full items-center justify-between gap-3'>
                            <div className='flex items-center justify-center w-full aspect-[4/4] relative'>
                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-full'/>
                            </div>
                            <div className='flex items-center justify-center w-6'>
                                <svg viewBox="399.4353 -2250.0011 277.5024 5000.001" className='w-full h-full'>
                                    <path d="M 3025.065 246.67 L 1599.905 246.67 C 1588.586 221.54 1552.884 221.491 1541.541 246.67 C 1445.736 246.67 1453.267 246.575 1451.301 246.86 C 1439.247 212.068 
                                    1390.283 211.265 1377.084 245.641 C 1270.355 254.059 1187.345 215.444 1123.419 138.99 C 1120.173 135.108 1113.979 138.174 1115.12 143.104 C 1133.759 223.609 1129.683 
                                    284.424 1081.464 313.85 C 953.093 392.19 873.184 391.528 578.955 288.988 C 571.03 286.227 569.778 275.711 576.7 270.969 C 594.442 258.815 621.832 250.16 651.998 242.511 C 654.762 241.81 657.709 242.281 660.137 243.777 C 766.761 309.48 881.679 341.898 989.091 285.508 C 1058.064 249.298 1043.15 177.39 965.997 143.8 C 881.763 107.127 718.787 154.286 566.066 202.583 C 322.046 87.776 120.426 79.775 -35.578 186.682 C -45.716 193.629 -56.821 199.006 -68.542 202.701 C -136.233 224.045 -214.403 239.261 -299.173 250.614 C -303.317 233.21 -318.926 220.251 -337.598 220.251 C -354.899 220.251 -369.568 231.382 -374.93 246.859 C -376.842 246.582 -369.032 246.669 -465.17 246.669 C -476.492 221.531 -512.195 221.494 -523.534 246.669 L -1948.693 246.669 C -1955.94 246.67 -1961.814 252.544 -1961.814 259.791 C -1961.814 267.037 -1955.94 272.912 -1948.693 272.912 L -523.533 272.912 C -512.214 298.042 -476.51 298.091 -465.169 272.912 C -369.364 272.912 -376.895 273.007 -374.929 272.722 C -369.567 288.199 -354.899 299.329 -337.597 299.329 C -318.886 299.329 -303.249 286.317 -299.145 268.859 C -192.114 269.051 -105.167 298.933 -38.121 358.232 C -34.444 361.484 -28.843 357.75 -30.555 353.151 C -56.502 283.493 -63.287 220.249 -11.261 187.887 C 122.05 104.961 309.373 115.552 541.854 212.504 C 544.033 213.413 543.932 216.577 541.687 217.308 C 457.764 244.654 458.126 245.729 444.598 245.284 C 318.083 140.56 59.774 156.475 69.088 269.756 C 71.917 304.147 92.182 330.792 140.943 343.24 C 267.21 375.476 387.411 351.391 520.524 298.365 C 530.878 294.24 542.443 294.408 552.657 298.869 C 774.918 395.95 949.965 423.062 1091.961 336.942 C 1174.427 286.927 1271.688 270.097 1377.089 273.951 C 1390.293 308.308 1439.248 307.513 1451.302 272.721 C 1453.214 272.998 1445.404 272.911 1541.542 272.911 C 1552.862 298.04 1588.565 298.091 1599.906 272.911 L 3025.066 272.911 C 3032.313 272.911 3038.187 267.036 3038.187 259.79 C 3038.186 252.544 3032.311 246.67 3025.065 246.67 Z M 948.343 177.577 C 965.845 178.894 982.836 185.537 995.399 197.794 C 1014.424 216.356 1012.852 237.022 995.01 259.35 C 985.445 271.319 972.186 279.866 957.512 284.272 C 875.446 308.91 776.408 281.374 671.736 236.522 C 762.201 189.834 854.425 170.511 948.343 177.577 Z M 116.101 303.702 C 77.262 283.758 84.61 225.675 142.694 210.28 C 238.539 184.876 344.928 203.191 431.008 249.818 C 318.581 295.006 194.888 344.161 116.101 303.702 Z" 
                                    style={{
                                        transformOrigin: '538.187px 250px',
                                        transform: 'matrix(0, 1, -1, 0, -0.000015258789, -0.000167846679)'
                                    }}
                                    className='fill-accent-2'
                                    />
                                </svg>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 w-full'>
                                <p className='text-lg font-extrabold'>{data.date}</p>
                                <p className='text-sm text-justify text-charcoal'>{data.description}</p>
                            </div>
                        </div>
                    )
                else{
                    return (
                        <div key={data.id} className='flex w-full items-center justify-between gap-3'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full'>
                                <p className='text-lg font-extrabold'>{data.date}</p>
                                <p className='text-sm text-justify text-charcoal'>{data.description}</p>
                            </div>
                            <div className='flex items-center justify-center w-6'>
                                <svg viewBox="399.4353 -2250.0011 277.5024 5000.001" className='w-full h-full'>
                                    <path d="M 3025.065 246.67 L 1599.905 246.67 C 1588.586 221.54 1552.884 221.491 1541.541 246.67 C 1445.736 246.67 1453.267 246.575 1451.301 246.86 C 1439.247 212.068 
                                    1390.283 211.265 1377.084 245.641 C 1270.355 254.059 1187.345 215.444 1123.419 138.99 C 1120.173 135.108 1113.979 138.174 1115.12 143.104 C 1133.759 223.609 1129.683 
                                    284.424 1081.464 313.85 C 953.093 392.19 873.184 391.528 578.955 288.988 C 571.03 286.227 569.778 275.711 576.7 270.969 C 594.442 258.815 621.832 250.16 651.998 242.511 C 654.762 241.81 657.709 242.281 660.137 243.777 C 766.761 309.48 881.679 341.898 989.091 285.508 C 1058.064 249.298 1043.15 177.39 965.997 143.8 C 881.763 107.127 718.787 154.286 566.066 202.583 C 322.046 87.776 120.426 79.775 -35.578 186.682 C -45.716 193.629 -56.821 199.006 -68.542 202.701 C -136.233 224.045 -214.403 239.261 -299.173 250.614 C -303.317 233.21 -318.926 220.251 -337.598 220.251 C -354.899 220.251 -369.568 231.382 -374.93 246.859 C -376.842 246.582 -369.032 246.669 -465.17 246.669 C -476.492 221.531 -512.195 221.494 -523.534 246.669 L -1948.693 246.669 C -1955.94 246.67 -1961.814 252.544 -1961.814 259.791 C -1961.814 267.037 -1955.94 272.912 -1948.693 272.912 L -523.533 272.912 C -512.214 298.042 -476.51 298.091 -465.169 272.912 C -369.364 272.912 -376.895 273.007 -374.929 272.722 C -369.567 288.199 -354.899 299.329 -337.597 299.329 C -318.886 299.329 -303.249 286.317 -299.145 268.859 C -192.114 269.051 -105.167 298.933 -38.121 358.232 C -34.444 361.484 -28.843 357.75 -30.555 353.151 C -56.502 283.493 -63.287 220.249 -11.261 187.887 C 122.05 104.961 309.373 115.552 541.854 212.504 C 544.033 213.413 543.932 216.577 541.687 217.308 C 457.764 244.654 458.126 245.729 444.598 245.284 C 318.083 140.56 59.774 156.475 69.088 269.756 C 71.917 304.147 92.182 330.792 140.943 343.24 C 267.21 375.476 387.411 351.391 520.524 298.365 C 530.878 294.24 542.443 294.408 552.657 298.869 C 774.918 395.95 949.965 423.062 1091.961 336.942 C 1174.427 286.927 1271.688 270.097 1377.089 273.951 C 1390.293 308.308 1439.248 307.513 1451.302 272.721 C 1453.214 272.998 1445.404 272.911 1541.542 272.911 C 1552.862 298.04 1588.565 298.091 1599.906 272.911 L 3025.066 272.911 C 3032.313 272.911 3038.187 267.036 3038.187 259.79 C 3038.186 252.544 3032.311 246.67 3025.065 246.67 Z M 948.343 177.577 C 965.845 178.894 982.836 185.537 995.399 197.794 C 1014.424 216.356 1012.852 237.022 995.01 259.35 C 985.445 271.319 972.186 279.866 957.512 284.272 C 875.446 308.91 776.408 281.374 671.736 236.522 C 762.201 189.834 854.425 170.511 948.343 177.577 Z M 116.101 303.702 C 77.262 283.758 84.61 225.675 142.694 210.28 C 238.539 184.876 344.928 203.191 431.008 249.818 C 318.581 295.006 194.888 344.161 116.101 303.702 Z" 
                                    style={{
                                        transformOrigin: '538.187px 250px',
                                        transform: 'matrix(0, 1, -1, 0, -0.000015258789, -0.000167846679)'
                                    }}
                                    className='fill-accent-2'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center justify-center w-full aspect-[4/4] relative'>
                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-full'/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        <p className="sm:text-lg text-sm text-justify text-charcoal">
            Kami memohon maaf karena tidak mengundang teman-teman sekalian. Kami memutuskan untuk mengadakan acara pernikahan kami secara sederhana, 
            yang hanya akan dihadiri oleh keluarga besar dan kerabat dekat kami saja. Meski 
            begitu, kehadiran kalian di hati kami serta doa dan dukungan dari kalian akan selalu
            berarti dan menjadi anugerah yang tak ternilai.
        </p>
        <div className="flex sm:flex-row flex-col w-full gap-8">
            <form className="space-y-4 sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl">
                <h3 className="text-center font-semibold ">Tulis Ucapan Disini</h3>
                <div>
                    <label className="block text-left  text-sm font-medium mb-2">Nama :</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
                </div>

                <div>
                    <label className="block text-left  text-sm font-medium mb-2">Ucapan Selamat :</label>
                    <textarea className="w-full px-4 py-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required></textarea>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="text-center bg-slate-200  py-2 px-4 rounded-2xl hover:bg-slate-400 transition duration-300">Kirim</button>
                </div>
            </form>

            <div className="mx-auto flex-auto sm:w-1/2 w-full p-4 bg-white shadow-md rounded-2xl ">
                <h3 className="text-center font-semibold  mb-4">Ucapan Selamat yang Diterima</h3>
            </div>
        </div>
    </div>
    </div>
  );
}
