import Logo from "../../logo/Logo";
import Cart from "./Cart";
import Hotline from "./Hotline";
import TopBar from "../topbar/TopBar";
import Menu from "../menu/Menu";
import "./styles.scss";

export default function Header() {
    return (
        <header>
            <TopBar />
            <div className="headerPage">
                <div className="pageContainer">
                    <div className="headerLogo">
                        <Logo />
                    </div>
                    <div className="headerHotline">
                        <Hotline />
                    </div>
                    <div className="headerCart">
                        <Cart />
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    );
}
