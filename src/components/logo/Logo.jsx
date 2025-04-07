import Imagefull from "@/components/image/big/Imagefull";
const logo = {
    src: "https://phoaudio.com/upload/logo/logophoaudio-web%20(1).png",
    alt: "Logo",
    link: "https://phoaudio.com",
};

export default function Logo() {
    return (
        <div className="text-xl font-bold text-blue-600">
            <Imagefull image={logo} />
        </div>
    );
}