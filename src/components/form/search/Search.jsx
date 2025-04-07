import styles from "./style.module.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Search() {
    return (
        <>
            <form action="" className={styles.searchForm}>
                <input type="text" placeholder="Nhập tên sản phẩm" />
                <button type="submit">
                    <MagnifyingGlassIcon 
                        className="search-icon" 
                        width={20}
                        height={20}
                        strokeWidth={1.5}
                    />
                </button>
            </form>
        </>
    );
}