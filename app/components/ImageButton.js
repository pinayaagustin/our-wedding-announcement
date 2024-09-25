import Image from 'next/image';

const ImageButton = ({ src, alt, onClick }) => {
    return (
        <button
            className="relative inline-block overflow-hidden rounded-2xl p-2 hover:scale-105 transition-transform duration-300 focus:outline-none"
            onClick={onClick}
        >
            <Image
                src={src}
                alt={alt}
                width={50}
                height={50}
                className="rounded-2xl object-cover"
            />
        </button>
    );
};

export default ImageButton;