export default function Navbar({scrollToDivId}) {

    return (
        <div className="absolute w-full top-0 text-primary font-bold bg-[#fdffff] opacity-80 z-50 shadow-md flex justify-between px-5 py-1 items-center text-xs sm:text-base">
            <button className="hover:text-primary/70 cursor-pointer" onClick={() => window.location.reload()}>K & P</button>
            <div className="flex gap-2 sm:gap-3">
                <button className="hover:text-primary/70 cursor-pointer" onClick={()=>scrollToDivId('home')}>Home</button>
                <button className="hover:text-primary/70 cursor-pointer" onClick={()=>scrollToDivId('tgl')}>Date</button>
                <button className="hover:text-primary/70 cursor-pointer" onClick={()=>scrollToDivId('story')}>Our Story</button>
                <button className="hover:text-primary/70 cursor-pointer" onClick={()=>scrollToDivId('post')}>Post</button>
            </div>
        </div>
    );
}