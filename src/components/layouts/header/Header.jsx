import Logo from "@/components/logo/Logo";
import Cart from "@/components/layouts/header/Cart";
import Topbar from "@/components/topbar/Topbar";
import Search from "@/components/form/search/Search";
import Hotline from "@/components/layouts/header/Hotline";
import "./styles.scss";

export default function Header() {
    return (
        <>
            <Topbar />
            <header className="headerPage">
                <div className="pageContainer">
                    <div className="headerLogo">
                        <Logo />
                    </div>
                    <div className="headerSearch">
                        <Search />
                    </div>
                    <div className="headerHotline">
                        <Hotline />
                    </div>
                    <div className="headerCart">
                        <Cart />
                    </div>
                </div>
            </header>
        </>
    );
}