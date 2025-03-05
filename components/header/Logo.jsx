import Image from "next/image";

const Logo = ({ width, height, size }) => {
    return (
        <>
            <Image
                src={"/logo.svg"}
                alt="Your Company"
                width={width}
                height={height}
                className={`w-[${size}px]`}
            />
        </>
    );
};

export default Logo;
