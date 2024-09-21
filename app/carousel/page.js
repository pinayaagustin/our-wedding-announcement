'use client'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const listImages=['/our-story/1.jpg','/our-story/2.jpg','/our-story/3.jpg']

import './embla.css'
export default function Carousel(){
    return(
    <div className='w-full h-svh flex bg-primary'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} listImages={listImages}/>
    </div>
    )
}