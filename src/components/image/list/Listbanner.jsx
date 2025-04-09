
import styles from './style.module.scss';
const banners = [
    {
        id: 1,
        src: "https://hdradio.vn/upload/banner/thang-4-2025/chuong-trinh-km-thang-4-2025-anh-1.jpg",
        alt: "Camera ngoài trời",
        link: "/camera-ngoai-troi"
    },
    {
        id: 2,
        src: "https://hdradio.vn/upload/banner/thang-11/tra-gop/hdradio-ho-tro-tra-gop.jpg",
        alt: "Camera trong nhà",
        link: "/camera-trong-nha"
    }
];
export default function ListBanner() {
    return (
        <div className={styles.bannerWrapper}>
            {banners.map((banner) => (
                <div key={banner.id} className={styles.bannerItem}>
                    <a href={banner.link}>
                        <img src={banner.src} alt={banner.alt} />
                    </a>
                </div>
            ))}
        </div>
    );
}
