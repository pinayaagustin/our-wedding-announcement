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
        <div class={"letter-image"} onClick={()=>{router.push('/')}}>
            <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                    <div class="letter-border"></div>
                    <div class="letter-title"></div>
                    <div class="letter-context"></div>
                    <div class="letter-context-body">
                        <p className={titillium.className}>Hallo Sayangku, <br/> Klik disini</p>
                    </div>
                    <div class="letter-stamp">
                        <div class="letter-stamp-inner"></div>
                    </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
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
