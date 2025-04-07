import adstopbar from "@/model/adstopbar";
const banner = adstopbar;
import Imagefull from "@/components/image/big/Imagefull";
export default function Topbar() {
    return (
        <>
            <Imagefull image={banner} />
        </>
    );
}