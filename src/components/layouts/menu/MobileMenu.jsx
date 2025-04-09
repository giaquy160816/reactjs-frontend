import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';

const menuItems = [
    { id: 1, title: 'Trang chủ', link: '/' },
    { id: 2, title: 'Camera trong nhà', link: '/camera-trong-nha' },
    { id: 3, title: 'Camera ngoài trời', link: '/camera-ngoai-troi' },
    { id: 4, title: 'Camera IP', link: '/camera-ip' },
    { id: 5, title: 'Phụ kiện', link: '/phu-kien' },
    { id: 6, title: 'Tin tức', link: '/tin-tuc' },
    { id: 7, title: 'Liên hệ', link: '/lien-he' },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <div className={styles.mobileMenu}>
            <button
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Bars3Icon width={24} height={24} />
            </button>

            <div className={`${styles.menuOverlay} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}></div>

            <div className={`${styles.menuPanel} ${isOpen ? styles.active : ''}`}>
                <div className={styles.menuHeader}>
                    <button
                        className={styles.closeButton}
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <XMarkIcon width={24} height={24} />
                    </button>
                </div>

                <nav className={styles.menuContent}>
                    <ul className={styles.menuList}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} onClick={toggleMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.menuFooter}>
                        <a href="tel:0906366023" className={styles.hotlineButton}>
                            Gọi ngay: 0906 366 023
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
