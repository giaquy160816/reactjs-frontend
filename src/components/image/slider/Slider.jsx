import sliders from "@/model/sliders";
import styles from "./style.module.scss";
import Imagefull from "@/components/image/big/Imagefull";
export default function Slider() {
    return (
        <>
            <div className="mb-8 overflow-hidden w-full">
                <div className={styles.slidersWrapper}>
                    <div className={styles.sliders}>
                        {sliders.map((src, idx) => (
                            <div className={styles.slider} key={idx}>
                                <Imagefull image={src} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
