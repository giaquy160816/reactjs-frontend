import styles from './Menu.module.scss';

const menuItems = [
    { id: 1, title: 'Trang chủ', link: '/' },
    { id: 2, title: 'Camera trong nhà', link: '/camera-trong-nha' },
    { id: 3, title: 'Camera ngoài trời', link: '/camera-ngoai-troi' },
    { id: 4, title: 'Camera IP', link: '/camera-ip' },
    { id: 5, title: 'Phụ kiện', link: '/phu-kien' },
    { id: 6, title: 'Tin tức', link: '/tin-tuc' },
    { id: 7, title: 'Liên hệ', link: '/lien-he' },
];

export default function Menu() {
    return (
        <nav className={styles.mainMenu}>
            <ul className={styles.menuList}>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}