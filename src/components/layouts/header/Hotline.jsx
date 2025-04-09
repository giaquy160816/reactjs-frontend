import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Hotline() {
    return (
        <div className="hotlineWrapper">
            <div className="hotlineIcon">
                <PhoneIcon className="phoneIcon" />
            </div>
            <div className="hotlineInfo">
                <p className="hotlineNumber">0906 366 023</p>
                <p className="hotlineText">Tư vấn miễn phí 24/7</p>
            </div>
        </div>
    );
}
