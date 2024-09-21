'use client'
import { motion } from 'framer-motion';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Envel from './envel/envel';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Navbar from './navbar';
const great = Great_Vibes({ weight: ['400'], subsets: ['latin'] })
import { useRouter } from 'next/navigation';

export default function Index() {
    const router = useRouter();
    async function fetchData(setData) {
        const response = await fetch('/api/komentar');
        const data = await response.json();
        setData(data);
    }

    const postComment = async (name, message) => {
        try {
            const response = await fetch('/api/komentar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }),
            });

            if (!response.ok) {
                throw new Error('Failed to post comment');
            }

            return ('Comment posted successfully:');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [isOpen,setIsOpen] = useState(false)
    const [completeAnimation, setCompleteAnimation] = useState(false)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    // console.log('Audio playing');
                })
                .catch((error) => {
                    // console.error('Autoplay was prevented:', error);
                    setIsPlaying(false);
                });
        }
    }, []);

    useEffect(() => {
        fetchData(setMessages);
    }, []);

    const story = [
        {
            id: 1,
            image: '/our-story/4.jpg',
            description: 'Pertemuan kami terjadi secara tak terduga melalui sebuah platform media sosial. Sebuah momen sederhana, namun dari sanalah cerita kami dimulai.',
            date: 'Akhir 2022'
        },
        {
            id: 2,
            image: '/our-story/1.jpg',
            description: 'Setelah beberapa bulan saling mengenal dan menyelami hati satu sama lain, kami akhirnya mantap melangkah ke tahap yang lebih serius. Kami resmi menjadi pasangan kekasih, memulai perjalanan baru yang penuh harapan.',
            date: 'Januari 2024'
        },
        {
            id: 3,
            image: '/our-story/2.jpg',
            description: 'Dengan cinta yang semakin dalam, kami merasakan keyakinan penuh terhadap masa depan bersama. Kemudian sepakat menetapkan tujuan besar yaitu Menikah pada penghujung tahun 2024. Sebuah komitmen yang kami sambut dengan kebahagiaan dan keseriusan.',
            date: 'Desember 2023'
        },
        {
            id: 4,
            image: '/our-story/3.jpg',
            description: 'Di hadapan keluarga tercinta, kami menggelar acara lamaran yang penuh haru dan kebahagiaan. Momen ini menjadi simbol kuat akan keseriusan dan janji kami untuk melangkah ke jenjang pernikahan.',
            date: '20 Juli 2024'
        },
        {
            id: 5,
            image: '/our-story/9.jpg',
            description: 'Langkah berikutnya membawa kami ke Kantor Urusan Agama (KUA), di mana kami secara resmi mendaftarkan pernikahan kami. Akad akan dilaksanakan di sana, sebuah peristiwa yang akan menjadi titik awal dari kehidupan kami sebagai suami istri.',
            date: '20 September 2024'
        }
    ];

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSubmit = async  (e) => {
        e.preventDefault();
        if (name && message) {
            setLoading(true)
            await postComment(name,message)
            await fetchData(setMessages);
            setLoading(false)
        }
        setName('');
        setMessage('');
    };
    const vars = {
        open:{height:'100svh'},
        close:{height:'100svh'},
        staggerHidden: { opacity: 0 },
        staggerVisible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
            },
        },
        slideFromRight: {x: -10, opacity:0,},
        slideFromLeft: {x: 10,opacity:0,},
        standby: {x:0,y:0,opacity:1},
        slideFromBottom: {y: 10,opacity:0,},
        fadeFromBottom:{opacity:0,x:-100},
        fadeUp:{opacity:0.15,x:0},
        scaleFrom:{scale:0,opacity:0},
        scaleTo:{scale:1,opacity:1,transition:{type: 'spring', stiffness: 20, staggerChildren:0.6, delayChildren:0.8}},
    }
    const childVars = {
        staggerHidden: { opacity: 0, x: -10 },
        staggerVisible: { opacity: 1, x: 0 },
        scaleFrom:{scale:0,opacity:0},
        scaleTo:{scale:1,opacity:1}
    }
    const txtDengan = "Dengan penuh cinta dan sukacita, kami bermaksud membagikan kabar bahagia ini sekaligus memohon doa dan restu dari teman-teman sekalian untuk pernikahan kami:";
    const wrdDengan = txtDengan.split(" ");

    const txtTglLaksana = "yang akan dilaksanakan pada :"
    const txtTgl = "Jum'at, 6 Desember 2024"
    const txtTglDesc = "Kami memohon maaf karena tidak mengundang teman-teman sekalian. Kami memutuskan untuk mengadakan acara pernikahan kami secara sederhana, yang hanya akan dihadiri oleh keluarga besar dan kerabat dekat kami saja. Meski begitu, kehadiran kalian di hati kami serta doa dan dukungan dari kalian akan selalu berarti dan menjadi anugerah yang tak ternilai."
    const wrdTglLaksana = txtTglLaksana.split(" ");
    const wrdTgl = txtTgl.split(" ");
    const wrdTglDesc = txtTglDesc.split(" ");

    const scrollToDivId = (id) => {
        router.push(`/#${id}`, undefined, { scroll: true })
    }

    return (
        <div className="w-full h-svh overflow-hidden">
            <audio ref={audioRef} src="/music2.mp3" loop className="hidden"></audio>
            {!completeAnimation ?
                <motion.div className='snap-start h-svh' initial={'open'} variants={vars} animate={isOpen ? 'close':'open'} transition={{delay:5}} 
                onAnimationComplete={(animation)=>{
                    if(animation=='close'){
                        setCompleteAnimation(true)
                    }
                }}>
                    <Envel setOpenParent={setIsOpen} audioOn={toggleAudio}/>
                </motion.div>
            :
            <div>
                <Navbar scrollToDivId={scrollToDivId}/>
                <div className='overflow-y-scroll w-full h-svh snap-y snap-mandatory scroll-smooth'>
                    <div id='home' className='snap-center w-full h-svh flex flex-col justify-evenly gap-10 bg-primary text-secondary px-10 relative overflow-hidden'>
                        <motion.div className='absolute left-0 z-0 h-[99.9%] w-[70%] opacity-15 pointer-events-none' whileInView='fadeUp' initial='fadeFromBottom' variants={vars} transition={{duration:1}}>
                            <Image src='/flowerBorderFade.webp' alt='flower' fill sizes='1' className='object-cover'/>
                        </motion.div>
                        <button onClick={toggleAudio} className="fixed top-8 right-4 sm:right-10 z-50 text-[#16878E]">
                            <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} size="sm" className="w-full" />
                        </button>
                        <motion.div className="sm:text-xl sm:w-1/2 sm:mx-auto text-sm font-bold text-center" initial="staggerHidden" variants={vars} whileInView="staggerVisible">
                            {wrdDengan.map((word, index) => (
                                <motion.span key={index} variants={childVars} className="inline-block mr-1">
                                {word}
                                </motion.span>
                            ))}
                        </motion.div>
                        <div className=' flex flex-col w-full gap-4 items-center'>
                            <div className="flex flex-row justify-center w-full mx-auto gap-4 items-center">
                                <motion.div className="w-1/2 p-4 sm:w-fit" initial='slideFromRight' variants={vars} whileInView="standby" transition={{duration:0.5,delay:2}}>
                                    <p className={"sm:text-5xl text-3xl font-extrabold  text-left " + great.className}>
                                        Kukuh Iman Damaryanto
                                    </p>
                                </motion.div>
                                <motion.div className="w-1/2 sm:w-[13%] p-4 relative aspect-[4/4]" initial='slideFromLeft' variants={vars} whileInView="standby" transition={{duration:0.5,delay:2}}>
                                    <Image alt='kukuh' src='/our-story/Kukuh.jpg' fill sizes='1' className="rounded-full object-cover" />
                                </motion.div>
                            </div>
                            <motion.p className={"sm:text-8xl w-fit text-2xl gap-32 font-extrabold  text-center " + great.className} initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5,delay:2.5, type: 'spring', stiffness: 100}}>&</motion.p>
                            <div className="flex flex-row justify-center w-full mx-auto gap-4 items-center">
                                <motion.div className="w-1/2 sm:w-[13%] p-4 relative aspect-[4/4]" initial='slideFromLeft' variants={vars} whileInView="standby" transition={{duration:0.5,delay:3}}>
                                    <Image alt='pinaya' src='/our-story/Pinaya.jpg' fill sizes='1' className="rounded-full object-cover" />
                                </motion.div>
                                <motion.div className="w-1/2 p-4 sm:w-fit" initial='slideFromRight' variants={vars} whileInView="standby" transition={{duration:0.5,delay:3}}>
                                    <p className={"sm:text-5xl text-3xl font-extrabold  text-right " + great.className}>
                                        Pinaya Agustin
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div className='mx-auto' initial='slideFromBottom' variants={vars} whileInView="standby" transition={{duration:0.5,delay:3}}>
                            <FontAwesomeIcon icon={faAnglesDown} opacity={0.3} />
                        </motion.div>
                    </div>
                    <div id='tgl' className="snap-center bg-secondary text-primary flex flex-col items-center justify-center text-center w-full h-svh px-10 overflow-hidden">
                        <div className='flex flex-col items-center h-[65%] w-full justify-center gap-2 relative'>
                            <motion.div className='absolute h-full w-[150%] z-0' whileInView={{scale:1, opacity:1}} initial={{scale:0, opacity:0}} transition={{duration:0.5}}>
                                <Image src='/borderRoundedFlower.png' alt='flower' fill sizes='1' className='object-contain'/>
                            </motion.div>
                            <motion.p initial="staggerHidden" variants={vars} whileInView="staggerVisible" className="text-base z-20" >
                                {wrdTglLaksana.map((word, index) => (
                                    <motion.span key={index} variants={childVars} className="inline-block mr-1 z-40">
                                    {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                            <motion.p initial="staggerHidden" variants={vars} whileInView="staggerVisible"  className="sm:text-3xl text-xl font-bold">
                                {wrdTgl.map((word, index) => (
                                        <motion.span key={index} variants={childVars} className="inline-block mr-1">
                                        {word}
                                        </motion.span>
                                ))}
                            </motion.p>
                        </div>
                        <motion.p initial="staggerHidden" variants={vars} whileInView="staggerVisible"  className="text-sm sm:text-base sm:w-[40%]">
                            {wrdTglDesc.map((word, index) => (
                                    <motion.span key={index} variants={childVars} className="inline-block mr-1 z-10">
                                    {word}
                                    </motion.span>
                            ))}
                        </motion.p>
                    </div>
                    <div id='story' className='snap-center h-svh flex flex-col w-full justify-between sm:justify-evenly p-10 overflow-y-auto bg-primary text-secondary'>
                        <p className={'text-3xl text-center sm:text-5xl sm:font-extrabold ' + great.className}>Our Story</p>
                        <motion.div className='flex flex-col overflow-y-auto overflow-x-hidden sm:overflow-y-hidden sm:overflow-x-auto sm:flex-row' initial='scaleFrom' variants={vars} whileInView='scaleTo'>
                            {story.map((data, index) => {
                                if (index % 2 == 0)
                                    return (
                                        <div key={data.id} className='flex w-full sm:flex-col items-center justify-between gap-3'>
                                            <motion.div variants={childVars} className='flex items-center justify-center w-full aspect-[4/4] relative sm:w-[45%] sm:h-full'>
                                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-full' />
                                            </motion.div>
                                            <div className='flex items-center justify-center w-6 sm:hidden sm:h-0 sm:w-0'>
                                                <svg viewBox="399.4353 -2250.0011 277.5024 5000.001" className='w-full h-full'>
                                                    <path d="M 3025.065 246.67 L 1599.905 246.67 C 1588.586 221.54 1552.884 221.491 1541.541 246.67 C 1445.736 246.67 1453.267 246.575 1451.301 246.86 C 1439.247 212.068 
                                                1390.283 211.265 1377.084 245.641 C 1270.355 254.059 1187.345 215.444 1123.419 138.99 C 1120.173 135.108 1113.979 138.174 1115.12 143.104 C 1133.759 223.609 1129.683 
                                                284.424 1081.464 313.85 C 953.093 392.19 873.184 391.528 578.955 288.988 C 571.03 286.227 569.778 275.711 576.7 270.969 C 594.442 258.815 621.832 250.16 651.998 242.511 C 654.762 241.81 657.709 242.281 660.137 243.777 C 766.761 309.48 881.679 341.898 989.091 285.508 C 1058.064 249.298 1043.15 177.39 965.997 143.8 C 881.763 107.127 718.787 154.286 566.066 202.583 C 322.046 87.776 120.426 79.775 -35.578 186.682 C -45.716 193.629 -56.821 199.006 -68.542 202.701 C -136.233 224.045 -214.403 239.261 -299.173 250.614 C -303.317 233.21 -318.926 220.251 -337.598 220.251 C -354.899 220.251 -369.568 231.382 -374.93 246.859 C -376.842 246.582 -369.032 246.669 -465.17 246.669 C -476.492 221.531 -512.195 221.494 -523.534 246.669 L -1948.693 246.669 C -1955.94 246.67 -1961.814 252.544 -1961.814 259.791 C -1961.814 267.037 -1955.94 272.912 -1948.693 272.912 L -523.533 272.912 C -512.214 298.042 -476.51 298.091 -465.169 272.912 C -369.364 272.912 -376.895 273.007 -374.929 272.722 C -369.567 288.199 -354.899 299.329 -337.597 299.329 C -318.886 299.329 -303.249 286.317 -299.145 268.859 C -192.114 269.051 -105.167 298.933 -38.121 358.232 C -34.444 361.484 -28.843 357.75 -30.555 353.151 C -56.502 283.493 -63.287 220.249 -11.261 187.887 C 122.05 104.961 309.373 115.552 541.854 212.504 C 544.033 213.413 543.932 216.577 541.687 217.308 C 457.764 244.654 458.126 245.729 444.598 245.284 C 318.083 140.56 59.774 156.475 69.088 269.756 C 71.917 304.147 92.182 330.792 140.943 343.24 C 267.21 375.476 387.411 351.391 520.524 298.365 C 530.878 294.24 542.443 294.408 552.657 298.869 C 774.918 395.95 949.965 423.062 1091.961 336.942 C 1174.427 286.927 1271.688 270.097 1377.089 273.951 C 1390.293 308.308 1439.248 307.513 1451.302 272.721 C 1453.214 272.998 1445.404 272.911 1541.542 272.911 C 1552.862 298.04 1588.565 298.091 1599.906 272.911 L 3025.066 272.911 C 3032.313 272.911 3038.187 267.036 3038.187 259.79 C 3038.186 252.544 3032.311 246.67 3025.065 246.67 Z M 948.343 177.577 C 965.845 178.894 982.836 185.537 995.399 197.794 C 1014.424 216.356 1012.852 237.022 995.01 259.35 C 985.445 271.319 972.186 279.866 957.512 284.272 C 875.446 308.91 776.408 281.374 671.736 236.522 C 762.201 189.834 854.425 170.511 948.343 177.577 Z M 116.101 303.702 C 77.262 283.758 84.61 225.675 142.694 210.28 C 238.539 184.876 344.928 203.191 431.008 249.818 C 318.581 295.006 194.888 344.161 116.101 303.702 Z"
                                                        style={{
                                                            transformOrigin: '538.187px 250px',
                                                            transform: 'matrix(0, 1, -1, 0, -0.000015258789, -0.000167846679)'
                                                        }}
                                                        className='fill-secondary'
                                                    />
                                                </svg>
                                            </div>
                                            <div className='sm:flex items-center justify-center h-6 w-full hidden'>
                                                <svg viewBox="-2140.812 -41.4957 4999.999 277.5024" className='w-full h-full'>
                                                    <path d="M 2846.065 93.926 L 1420.906 93.926 C 1409.587 68.796 1373.885 68.747 1362.542 93.926 C 1266.737 93.926 1274.268 93.831 1272.302 
                                                94.116 C 1260.248 59.324 1211.284 58.521 1198.085 92.897 C 1091.356 101.315 1008.346 62.7 944.42 -13.754 C 941.174 -17.636 934.98 -14.57 
                                                936.121 -9.64 C 954.76 70.865 950.684 131.68 902.465 161.106 C 774.094 239.446 694.185 238.784 399.956 136.244 C 392.031 133.483 390.779 
                                                122.967 397.701 118.225 C 415.443 106.071 442.833 97.416 472.999 89.767 C 475.763 89.066 478.71 89.537 481.138 91.033 C 587.762 156.736 
                                                702.68 189.154 810.092 132.764 C 879.065 96.554 864.151 24.646 786.998 -8.944 C 702.764 -45.617 539.788 1.542 387.067 49.839 C 143.047 
                                                -64.968 -58.573 -72.969 -214.577 33.938 C -224.715 40.885 -235.82 46.262 -247.541 49.957 C -315.232 71.301 -393.402 86.517 -478.172 97.87 C 
                                                -482.316 80.466 -497.925 67.507 -516.597 67.507 C -533.898 67.507 -548.567 78.638 -553.929 94.115 C -555.841 93.838 -548.031 93.925 -644.169 
                                                93.925 C -655.491 68.787 -691.194 68.75 -702.533 93.925 L -2127.691 93.925 C -2134.938 93.926 -2140.812 99.8 -2140.812 107.047 C -2140.812 114.293 
                                                -2134.938 120.168 -2127.691 120.168 L -702.532 120.168 C -691.213 145.298 -655.509 145.347 -644.168 120.168 C -548.363 120.168 -555.894 120.263 
                                                -553.928 119.978 C -548.566 135.455 -533.898 146.585 -516.596 146.585 C -497.885 146.585 -482.248 133.573 -478.144 116.115 C -371.113 116.307 
                                                -284.166 146.189 -217.12 205.488 C -213.443 208.74 -207.842 205.006 -209.554 200.407 C -235.501 130.749 -242.286 67.505 -190.26 35.143 C -56.949 -47.783 130.374 -37.192 362.855 59.76 C
                                                365.034 60.669 364.933 63.833 362.688 64.564 C 278.765 91.91 279.127 92.985 265.599 92.54 C 139.084 -12.184 -119.225 3.731 -109.911 117.012 C -107.082 151.403 -86.817 178.048 -38.056 190.496 
                                                C 88.211 222.732 208.412 198.647 341.525 145.621 C 351.879 141.496 363.444 141.664 373.658 146.125 C 595.919 243.206 770.966 270.318 912.962 184.198 C 995.428 134.183 1092.689 117.353 1198.09
                                                121.207 C 1211.294 155.564 1260.249 154.769 1272.303 119.977 C 1274.215 120.254 1266.405 120.167 1362.543 120.167 C 1373.863 145.296 1409.566 145.347 1420.907 120.167 L 2846.066 120.167 C 2853.313 
                                                120.167 2859.187 114.292 2859.187 107.046 C 2859.186 99.8 2853.311 93.926 2846.065 93.926 Z M 769.344 24.833 C 786.846 26.15 803.837 32.793 816.4 45.05 C 835.425 63.612 833.853 84.278 816.011 106.606 
                                                C 806.446 118.575 793.187 127.122 778.513 131.528 C 696.447 156.166 597.409 128.63 492.737 83.778 C 583.202 37.09 675.426 17.767 769.344 24.833 Z M -62.898 150.958 C -101.737 131.014 -94.389 72.931 -36.305
                                                57.536 C 59.54 32.132 165.929 50.447 252.009 97.074 C 139.582 142.262 15.889 191.417 -62.898 150.958 Z"
                                                        style={{ transformOrigin: '359.188px 97.256px' }} 
                                                        className='fill-secondary'
                                                        />
                                                </svg>
                                            </div>
                                            <motion.div variants={childVars} className='flex flex-col items-center justify-evenly gap-4 w-full sm:justify-evenly sm:w-[45%] sm:h-full'>
                                                <p className='text-sm sm:text-lg font-extrabold'>{data.date}</p>
                                                <p className='text-xs sm:text-sm text-justify'>{data.description}</p>
                                            </motion.div>
                                        </div>
                                    )
                                else {
                                    return (
                                        <div key={data.id} className='flex w-full sm:flex-col items-center justify-between gap-3'>
                                            <motion.div variants={childVars} className='flex flex-col items-center justify-evenly gap-4 w-full sm:justify-evenly sm:w-[45%] sm:h-full'>
                                                <p className='text-sm sm:text-lg font-extrabold'>{data.date}</p>
                                                <p className='text-xs sm:text-sm text-justify'>{data.description}</p>
                                            </motion.div>
                                            <div className='flex items-center justify-center w-6 sm:hidden sm:h-0 sm:w-0'>
                                                <svg viewBox="399.4353 -2250.0011 277.5024 5000.001" className='w-full h-full'>
                                                    <path d="M 3025.065 246.67 L 1599.905 246.67 C 1588.586 221.54 1552.884 221.491 1541.541 246.67 C 1445.736 246.67 1453.267 246.575 1451.301 246.86 C 1439.247 212.068 
                                                1390.283 211.265 1377.084 245.641 C 1270.355 254.059 1187.345 215.444 1123.419 138.99 C 1120.173 135.108 1113.979 138.174 1115.12 143.104 C 1133.759 223.609 1129.683 
                                                284.424 1081.464 313.85 C 953.093 392.19 873.184 391.528 578.955 288.988 C 571.03 286.227 569.778 275.711 576.7 270.969 C 594.442 258.815 621.832 250.16 651.998 242.511 C 654.762 241.81 657.709 242.281 660.137 243.777 C 766.761 309.48 881.679 341.898 989.091 285.508 C 1058.064 249.298 1043.15 177.39 965.997 143.8 C 881.763 107.127 718.787 154.286 566.066 202.583 C 322.046 87.776 120.426 79.775 -35.578 186.682 C -45.716 193.629 -56.821 199.006 -68.542 202.701 C -136.233 224.045 -214.403 239.261 -299.173 250.614 C -303.317 233.21 -318.926 220.251 -337.598 220.251 C -354.899 220.251 -369.568 231.382 -374.93 246.859 C -376.842 246.582 -369.032 246.669 -465.17 246.669 C -476.492 221.531 -512.195 221.494 -523.534 246.669 L -1948.693 246.669 C -1955.94 246.67 -1961.814 252.544 -1961.814 259.791 C -1961.814 267.037 -1955.94 272.912 -1948.693 272.912 L -523.533 272.912 C -512.214 298.042 -476.51 298.091 -465.169 272.912 C -369.364 272.912 -376.895 273.007 -374.929 272.722 C -369.567 288.199 -354.899 299.329 -337.597 299.329 C -318.886 299.329 -303.249 286.317 -299.145 268.859 C -192.114 269.051 -105.167 298.933 -38.121 358.232 C -34.444 361.484 -28.843 357.75 -30.555 353.151 C -56.502 283.493 -63.287 220.249 -11.261 187.887 C 122.05 104.961 309.373 115.552 541.854 212.504 C 544.033 213.413 543.932 216.577 541.687 217.308 C 457.764 244.654 458.126 245.729 444.598 245.284 C 318.083 140.56 59.774 156.475 69.088 269.756 C 71.917 304.147 92.182 330.792 140.943 343.24 C 267.21 375.476 387.411 351.391 520.524 298.365 C 530.878 294.24 542.443 294.408 552.657 298.869 C 774.918 395.95 949.965 423.062 1091.961 336.942 C 1174.427 286.927 1271.688 270.097 1377.089 273.951 C 1390.293 308.308 1439.248 307.513 1451.302 272.721 C 1453.214 272.998 1445.404 272.911 1541.542 272.911 C 1552.862 298.04 1588.565 298.091 1599.906 272.911 L 3025.066 272.911 C 3032.313 272.911 3038.187 267.036 3038.187 259.79 C 3038.186 252.544 3032.311 246.67 3025.065 246.67 Z M 948.343 177.577 C 965.845 178.894 982.836 185.537 995.399 197.794 C 1014.424 216.356 1012.852 237.022 995.01 259.35 C 985.445 271.319 972.186 279.866 957.512 284.272 C 875.446 308.91 776.408 281.374 671.736 236.522 C 762.201 189.834 854.425 170.511 948.343 177.577 Z M 116.101 303.702 C 77.262 283.758 84.61 225.675 142.694 210.28 C 238.539 184.876 344.928 203.191 431.008 249.818 C 318.581 295.006 194.888 344.161 116.101 303.702 Z"
                                                        style={{
                                                            transformOrigin: '538.187px 250px',
                                                            transform: 'matrix(0, 1, -1, 0, -0.000015258789, -0.000167846679)'
                                                        }}
                                                        className='fill-secondary'
                                                    />
                                                </svg>
                                            </div>
                                            <div className='sm:flex items-center justify-center h-6 w-full hidden'>
                                                <svg viewBox="-2140.812 -41.4957 4999.999 277.5024" className='w-full h-full'>
                                                    <path d="M 2846.065 93.926 L 1420.906 93.926 C 1409.587 68.796 1373.885 68.747 1362.542 93.926 C 1266.737 93.926 1274.268 93.831 1272.302 
                                                94.116 C 1260.248 59.324 1211.284 58.521 1198.085 92.897 C 1091.356 101.315 1008.346 62.7 944.42 -13.754 C 941.174 -17.636 934.98 -14.57 
                                                936.121 -9.64 C 954.76 70.865 950.684 131.68 902.465 161.106 C 774.094 239.446 694.185 238.784 399.956 136.244 C 392.031 133.483 390.779 
                                                122.967 397.701 118.225 C 415.443 106.071 442.833 97.416 472.999 89.767 C 475.763 89.066 478.71 89.537 481.138 91.033 C 587.762 156.736 
                                                702.68 189.154 810.092 132.764 C 879.065 96.554 864.151 24.646 786.998 -8.944 C 702.764 -45.617 539.788 1.542 387.067 49.839 C 143.047 
                                                -64.968 -58.573 -72.969 -214.577 33.938 C -224.715 40.885 -235.82 46.262 -247.541 49.957 C -315.232 71.301 -393.402 86.517 -478.172 97.87 C 
                                                -482.316 80.466 -497.925 67.507 -516.597 67.507 C -533.898 67.507 -548.567 78.638 -553.929 94.115 C -555.841 93.838 -548.031 93.925 -644.169 
                                                93.925 C -655.491 68.787 -691.194 68.75 -702.533 93.925 L -2127.691 93.925 C -2134.938 93.926 -2140.812 99.8 -2140.812 107.047 C -2140.812 114.293 
                                                -2134.938 120.168 -2127.691 120.168 L -702.532 120.168 C -691.213 145.298 -655.509 145.347 -644.168 120.168 C -548.363 120.168 -555.894 120.263 
                                                -553.928 119.978 C -548.566 135.455 -533.898 146.585 -516.596 146.585 C -497.885 146.585 -482.248 133.573 -478.144 116.115 C -371.113 116.307 
                                                -284.166 146.189 -217.12 205.488 C -213.443 208.74 -207.842 205.006 -209.554 200.407 C -235.501 130.749 -242.286 67.505 -190.26 35.143 C -56.949 -47.783 130.374 -37.192 362.855 59.76 C
                                                365.034 60.669 364.933 63.833 362.688 64.564 C 278.765 91.91 279.127 92.985 265.599 92.54 C 139.084 -12.184 -119.225 3.731 -109.911 117.012 C -107.082 151.403 -86.817 178.048 -38.056 190.496 
                                                C 88.211 222.732 208.412 198.647 341.525 145.621 C 351.879 141.496 363.444 141.664 373.658 146.125 C 595.919 243.206 770.966 270.318 912.962 184.198 C 995.428 134.183 1092.689 117.353 1198.09
                                                121.207 C 1211.294 155.564 1260.249 154.769 1272.303 119.977 C 1274.215 120.254 1266.405 120.167 1362.543 120.167 C 1373.863 145.296 1409.566 145.347 1420.907 120.167 L 2846.066 120.167 C 2853.313 
                                                120.167 2859.187 114.292 2859.187 107.046 C 2859.186 99.8 2853.311 93.926 2846.065 93.926 Z M 769.344 24.833 C 786.846 26.15 803.837 32.793 816.4 45.05 C 835.425 63.612 833.853 84.278 816.011 106.606 
                                                C 806.446 118.575 793.187 127.122 778.513 131.528 C 696.447 156.166 597.409 128.63 492.737 83.778 C 583.202 37.09 675.426 17.767 769.344 24.833 Z M -62.898 150.958 C -101.737 131.014 -94.389 72.931 -36.305
                                                57.536 C 59.54 32.132 165.929 50.447 252.009 97.074 C 139.582 142.262 15.889 191.417 -62.898 150.958 Z"
                                                        style={{ transformOrigin: '359.188px 97.256px' }} 
                                                        className='fill-secondary'
                                                        />
                                                </svg>
                                            </div>
                                            <motion.div variants={childVars} className='flex items-center justify-center w-full aspect-[4/4] relative sm:w-[45%] sm:h-full'>
                                                <Image alt={data.id} src={data.image} fill sizes='1' priority className='object-cover rounded-full' />
                                            </motion.div>
                                        </div>
                                    )
                                }
                            })}
                        </motion.div>
                    </div>
                    <div id='post' className="snap-center min-h-svh max-h-svh flex flex-col w-full p-10 gap-2 bg-secondary items-center relative overflow-x-hidden">
                        <motion.div className='absolute left-0 top-0 z-0 h-[99.9%] w-[70%] opacity-15 pointer-events-none' whileInView='fadeUp' initial='fadeFromBottom' variants={vars} transition={{duration:1}}>
                            <Image src='/flowerBorderFade.webp' alt='flower' fill sizes='1' className='object-cover'/>
                        </motion.div>
                        <p className="text-center font-semibold text-primary">Tulis Ucapan Disini</p>
                        <form onSubmit={handleSubmit} className="space-y-4 w-full z-10 sm:w-[50%] sm:p-8 p-4 bg-slate-300 shadow-md rounded-2xl relative custom-after">
                            <div>
                                <label className="block text-left text-primary text-sm font-medium mb-2">Nama :</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400" required />
                            </div>

                            <div>
                                <label className="block text-left text-primary text-sm font-medium mb-2">Ucapan Selamat :</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400" required>
                                </textarea>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="text-center bg-slate-200 text-primary py-2 px-4 rounded-2xl hover:bg-slate-400 transition duration-300">Kirim</button>
                            </div>
                            <div className="sm:w-[15%] w-[50%] h-[50%] top-[20%] sm:-right-[8%] -right-[30%] absolute z-20">
                                <Image src="/3.png" fill alt="Dekorasi" sizes='1' className="object-contain" />
                            </div>
                        </form>

                        <p className="text-center font-semibold text-primary z-10 mt-4">Doa-doa dari kalian sangat berarti bagi kami, terima kasih!</p>

                        <div className="flex-col w-full sm:w-[50%] items-center z-10 justify-center p-4 sm:p-8 bg-slate-300 shadow-md rounded-2xl overflow-y-scroll">
                            {!loading ? 
                            <div className="space-y-4 w-full flex flex-col h-full">
                                {messages.map((msg, index) => (
                                    <div key={index} className="p-4 bg-white rounded-md shadow-sm ">
                                        <p className="font-bold text-primary">{msg.name}</p>
                                        <p className="text-ray-600">{msg.message}</p>
                                    </div>
                                ))}
                            </div> : 
                                <Image src="/spinner.gif" unoptimized width={100} height={100} alt="Loading" className='m-auto' />
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}


// scroll snap align untuk memposisikan foto selalu berada di tengah.
// belum ada navbar