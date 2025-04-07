import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Slider from "@/components/image/slider/Slider";
import ProductList from "@/components/products/List";
import ListBanner from "@/components/image/list/Listbanner";
export default function Home() {
    return (
        <Layouts>
            <div className="pageContainer">
                <div className="homeTopAds">
                    <div className="homeSlider">
                        <Slider />
                    </div>
                    <div className="homeBanner">
                        <ListBanner />
                    </div>
                </div>
                <ProductList />
            </div>
        </Layouts>
    );
}