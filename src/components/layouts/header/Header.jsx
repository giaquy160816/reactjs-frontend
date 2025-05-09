import Logo from "../../logo/Logo";
import Cart from "./Cart";
import Hotline from "./Hotline";
import TopBar from "../topbar/TopBar";
import Menu from "../menu/Menu";
import MobileMenu from "../menu/MobileMenu";
import Search from "../../form/search/Search";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useWindowSize from "../../../hooks/useWindowSize";
import "./styles.scss";

export default function Header() {
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <header>
            <TopBar />
            <div className="headerPage">
                <div className="pageContainer">
                    <div className="headerLogo">
                        <Logo />
                    </div>
                    {!isMobile && (
                        <>
                            <div className="headerSearch">
                                <Search />
                            </div>
                            <div className="headerHotline">
                                <Hotline />
                            </div>
                        </>
                    )}
                    {isMobile && (
                        <div className="headerMobileActions">
                            <div className="headerMobileSearch">
                                <button className="searchToggle" onClick={() => document.getElementById('mobileSearchForm').classList.toggle('active')}>
                                    <MagnifyingGlassIcon width={20} height={20} />
                                </button>
                            </div>
                            <div className="headerCart">
                                <Cart />
                            </div>
                            <div id="mobileSearchForm" className="mobileSearchForm">
                                <Search />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="menuWrapper">
                <div className="pageContainer menuContainer">
                    {isMobile ? (
                        <>
                            <MobileMenu />
                            <div className="mobileTitle">Shop Camera</div>
                        </>
                    ) : (
                        <>
                            <Menu />
                            <div className="headerCart">
                                <Cart />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
