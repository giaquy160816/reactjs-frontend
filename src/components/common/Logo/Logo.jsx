import Image from '../Image/Image';

const Logo = () => {
    return (
        <div className="logo">
            <Image
                src="/logo.png"
                alt="Logo"
                link="/"
                className="h-10 w-auto"
            />
        </div>
    );
};

export default Logo;