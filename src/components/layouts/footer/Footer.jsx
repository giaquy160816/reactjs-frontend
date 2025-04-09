import styles from './Footer.module.scss';
import { 
    MapPinIcon, 
    PhoneIcon, 
    EnvelopeIcon,
    VideoCameraIcon,
    ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="pageContainer">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>Shop Camera</h3>
            <p>Chuyên cung cấp các giải pháp camera an ninh chất lượng cao</p>
            <div className={styles.contactInfo}>
              <p>
                <MapPinIcon className={styles.icon} />
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </p>
              <p>
                <PhoneIcon className={styles.icon} />
                <span>0906 366 023</span>
              </p>
              <p>
                <EnvelopeIcon className={styles.icon} />
                <span>info@shopcamera.com</span>
              </p>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h3>Sản phẩm</h3>
            <ul>
              <li><a href="/camera-trong-nha">Camera trong nhà</a></li>
              <li><a href="/camera-ngoai-troi">Camera ngoài trời</a></li>
              <li><a href="/camera-ip">Camera IP</a></li>
              <li><a href="/phu-kien">Phụ kiện camera</a></li>
              <li><a href="/dau-ghi-hinh">Đầu ghi hình</a></li>
              <li><a href="/bo-kit-camera">Bộ Kit Camera</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Chính sách</h3>
            <ul>
              <li><a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
              <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
              <li><a href="/chinh-sach-van-chuyen">Chính sách vận chuyển</a></li>
              <li><a href="/bao-mat">Chính sách bảo mật</a></li>
              <li><a href="/dieu-khoan">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Kết nối với chúng tôi</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.facebook}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
              <a href="#" className={styles.youtube}>
                <VideoCameraIcon className={styles.icon} />
                Youtube
              </a>
              <a href="#" className={styles.zalo}>
                <ChatBubbleLeftIcon className={styles.icon} />
                Zalo
              </a>
            </div>
            <div className={styles.certification}>
              <img src="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=071dd4fe-8208-4fb1-b1b7-922936329ae0" alt="DMCA Protected" />
              <img src="https://hdradio.vn/upload/dathongbao-hdradio.png" alt="Đã thông báo Bộ Công Thương" />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Shop Camera. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
