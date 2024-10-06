'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
// const listImages=['/our-story/1.jpg','/our-story/2.jpg','/our-story/3.jpg']

import './embla.css'
export default function Carousel({listImages,setShowModal,setActivate,activate,lengthData}){
    return(
    <div className='w-full h-svh flex items-center justify-center bg-primary'>
        <div className='absolute top-4 right-4 cursor-pointer'>
            <FontAwesomeIcon icon={faXmark} size="sm" color='white' onClick={()=>{
                setShowModal(false)
                if(activate == lengthData - 1){
                    setActivate(0)
                }else{
                    setActivate(activate+1)
                }
                }}/>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} listImages={listImages}/>
    </div>
    )
}