import { memo } from 'react';
import styles from './TopBar.module.scss';
import { topBarConfig } from '@/model/config';

function TopBar() {
    if (!topBarConfig.isEnabled) return null;

    if (topBarConfig.showBanner) {
        return (
            <div className={styles.topBarBanner}>
                <a href={topBarConfig.banner.link}>
                    <img
                        src={topBarConfig.banner.imageUrl}
                        alt={topBarConfig.banner.alt}
                    />
                </a>
            </div>
        );
    }

    return (
        <div className={styles.topBar}>
            <div className="pageContainer">
                <div className={styles.topBarContent}>
                    <div className={styles.topBarLeft}>
                        <span>{topBarConfig.content.leftText}</span>
                    </div>
                    <div className={styles.topBarRight}>
                        {topBarConfig.content.rightLinks.map((link, index) => (
                            <a key={index} href={link.href}>{link.text}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(TopBar);
