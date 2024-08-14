'use client'
// import { Sacramento } from 'next/font/google';
import { useRouter } from 'next/navigation';
import './style.css';

import { Titillium_Web } from 'next/font/google';
const titillium = Titillium_Web({weight:['200','300','400','600','700','900'],subsets:['latin']})
// const sacramento = Sacramento({weight:'400',subsets:['latin']})
import { Great_Vibes } from 'next/font/google';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})
const Envelope = () => {
    const router = useRouter()
    return (
        <div className="letter-image" onClick={()=>{router.push('/')}}>
            <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-context-body">
                        <p className={titillium.className + ' text-gray-700 font-semibold '}>Hari Bahagia Kami Segera Tiba!</p>
                    </div>
                    <div className="letter-stamp">
                        <div className="letter-stamp-inner"></div>
                    </div>
                </div>
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
};

export default function test () {
    return (
        <div>
            <p className={great.className + ' flex items-center text-5xl text-blue-900 justify-center mt-28 w-full' } > The Wedding of </p>
            <p className={great.className + ' flex items-center text-5xl text-blue-900 justify-center mt-5 w-full' } > Kukuh Iman Damaryanto & Pinaya Agustin </p>
            <Envelope/>
        </div>
    )
};
