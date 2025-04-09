import sliders from "@/model/sliders";
import styles from "./style.module.scss";

export default function Slider() {
    return (
        <div className="mb-8 overflow-hidden w-full">
            <div className={styles.slidersWrapper}>
                <div className={styles.sliders}>
                    {sliders.map((slider) => (
                        <div className={styles.slider} key={slider.id}>
                            <a href={slider.link}>
                                <img src={slider.src} alt={slider.alt} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
