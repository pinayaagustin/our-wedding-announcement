
export default function Navbar() {
    return (
        <nav className="sticky bottom-0 text-primary font-bold bg-[#fdffff] z-50 shadow-md flex justify-between px-5 py-1 sm:py-0 items-center text-xs sm:text-base">
            <p className="hover:text-primary/70 cursor-pointer">K & P</p>
            <div className="flex gap-1 sm:gap-3">
                <p className="hover:text-primary/70 cursor-pointer">Home</p>
                <p className="hover:text-primary/70 cursor-pointer">Date</p>
                <p className="hover:text-primary/70 cursor-pointer">Our Story</p>
                <p className="hover:text-primary/70 cursor-pointer">Post</p>
            </div>
        </nav>
    );
}