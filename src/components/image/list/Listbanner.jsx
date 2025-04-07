
import Imagefull from "@/components/image/big/Imagefull";
import { Fragment } from "react";
const banners = [
    {
        id: 1,
        src: "https://hdradio.vn/upload/banner/thang-4-2025/chuong-trinh-km-thang-4-2025-anh-1.jpg",
        alt: "banner1",
        link: "#",
    },
    {
        id: 2,
        src: "https://hdradio.vn/upload/banner/thang-12-2024/thanh-ly-xa-kho-moi-nhat-anh-1.jpg",
        alt: "banner2",
        link: "#",
    }
];
export default function ListBanner() {
    return (
        <>
            {banners.map((banner) => (
                <Fragment key={banner.id}>
                    <Imagefull image={banner} />
                </Fragment>
            ))}
        </>
    );
}
