import styles from './ContactInfo.module.scss';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
    return (
        <div className={styles.contactInfoContainer}>
            <h2 className={styles.sectionTitle}>Thông tin liên hệ</h2>
            
            <div className={styles.infoItem}>
                <BuildingOfficeIcon className={styles.icon} width={24} height={24} strokeWidth={1.5} />
                <div className={styles.infoContent}>
                    <h3>Công ty</h3>
                    <p>Công ty TNHH Thương mại Điện tử ABC</p>
                </div>
            </div>
            
            <div className={styles.infoItem}>
                <PhoneIcon className={styles.icon} width={24} height={24} strokeWidth={1.5} />
                <div className={styles.infoContent}>
                    <h3>Hotline</h3>
                    <p><a href="tel:1900123456">1900 123 456</a></p>
                </div>
            </div>
            
            <div className={styles.infoItem}>
                <EnvelopeIcon className={styles.icon} width={24} height={24} strokeWidth={1.5} />
                <div className={styles.infoContent}>
                    <h3>Email</h3>
                    <p><a href="mailto:contact@abc.com">contact@abc.com</a></p>
                </div>
            </div>
            
            <div className={styles.infoItem}>
                <MapPinIcon className={styles.icon} width={24} height={24} strokeWidth={1.5} />
                <div className={styles.infoContent}>
                    <h3>Địa chỉ</h3>
                    <p>Số 1 Đường Độc Lập, Quận Ba Đình, Hà Nội</p>
                </div>
            </div>
            
            <div className={styles.businessHours}>
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                <p>Thứ 7: 8:00 - 12:00</p>
                <p>Chủ nhật: Nghỉ</p>
            </div>
        </div>
    );
}
