'use client'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
import './embla.css'
export default function Carousel(){
    return(
    <div className='w-full h-svh flex bg-primary'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
    )
}