import { Link, useNavigate } from 'react-router-dom';
import styles from './Error404.module.scss';

export default function Error404() {
    const navigate = useNavigate();

    return (
        <div className={styles.errorPage}>
            <div className={styles.errorContainer}>
                <h1 className={styles.errorCode}>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </h1>
                <h2 className={styles.errorTitle}>Oops! Trang không tồn tại</h2>
                <p className={styles.errorMessage}>
                    Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
                </p>
                <div className={styles.errorActions}>
                    <Link to="/" className={styles.homeButton}>
                        Về trang chủ
                    </Link>
                    <button 
                        onClick={() => navigate(-1)} 
                        className={styles.backButton}
                    >
                        Quay lại
                    </button>
                </div>
            </div>
        </div>
    );
}