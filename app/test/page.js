'use client'
import React from 'react';
import './style.css'
import { Sacramento } from 'next/font/google';
import { useRouter } from 'next/navigation';

import { Titillium_Web } from 'next/font/google';
const titillium = Titillium_Web({weight:['200','300','400','600','700','900'],subsets:['latin']})
const sacramento = Sacramento({weight:'400',subsets:['latin']})

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
                        <p className={titillium.className}>Hallo Sayangku, <br/> Klik disini</p>
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
            <div className={sacramento.className + ' flex items-center text-5xl justify-center w-full' } > The Wedding of <br/> Kukuh Iman Damaryanto & Pinaya Agustin</div>
            <Envelope/>
        </div>
    )
};
