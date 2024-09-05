'use client'
// import { Sacramento } from 'next/font/google';
import { useRouter } from 'next/navigation';
// import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Titillium_Web } from 'next/font/google';
const titillium = Titillium_Web({weight:['200','300','400','600','700','900'],subsets:['latin']})
// const sacramento = Sacramento({weight:'400',subsets:['latin']})
import { Great_Vibes } from 'next/font/google';
import '../globals.css';

const great = Great_Vibes({weight:['400'],subsets:['latin']})
const Envelope = () => {
    const router = useRouter()
    return (
        <div className="letter-image" >
            <div className="animated-mail">
                <div className="back-fold"></div>
                {/* <div className="letter"> */}
                    {/* <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div> */}
                    {/* <div className="">
                        <p className={titillium.className + ' text-gray-700 font-semibold '}>Hari Bahagia Kami Segera Tiba!</p>
                    </div> */}
                    {/* <div className="letter-stamp">
                        <div className="letter-stamp-inner"></div>
                    </div> */}
                {/* </div> */}
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
            </div>
            {/* <div className="shadow"></div> */}
        </div>
    );
};

export default function test () {
    return (
        <div className='flex flex-col items-center justify-start w-full h-screen pt-24 text-primary'>
            <p className={great.className + ' sm:text-5xl text-3xl text-center w-[80%]' } > Hari Bahagia Kami Segera Tiba! </p>
            {/* <p className={great.className + ' flex items-center sm:text-5xl text-xl justify-center w-full' } > Kukuh Iman Damaryanto & Pinaya Agustin </p> */}
            <Envelope/>
            <p className='absolute bottom-5 text-charcoal text-sm'>  </p>
        </div>
    )
};
