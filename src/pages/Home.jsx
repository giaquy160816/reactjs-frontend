import React from "react";
import Slider from "@/components/image/slider/Slider";
import ListBanner from "@/components/image/list/Listbanner";
import ProductList from "@/components/products/Productlist";
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className="pageContainer">
            <div className={styles.homeTopSection}>
                <div className={styles.sliderSection}>
                    <Slider />
                </div>
                <div className={styles.bannerSection}>
                    <ListBanner />
                </div>
            </div>
            <div className={styles.productSection}>
                <h2 className={styles.sectionTitle}>Sản phẩm nổi bật</h2>
                <ProductList />
            </div>
        </div>
    );
}
