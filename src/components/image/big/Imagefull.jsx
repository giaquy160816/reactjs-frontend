import styles from "./style.module.scss";

export default function Image({ image }) {
    const {
        src,
        alt = `Ảnh sản phẩm #${Math.floor(Math.random() * 9999)}`,
        link,
        ...rest
    } = image || {};

    const imgElement = (
        <img
            className={styles.image}
            src={src}
            alt={alt}
            {...rest}
        />
    );

    return (
        <div className={styles.wrapper}>
            {link ? (
                <a href={link} target="_blank">
                    {imgElement}
                </a>
            ) : (
                imgElement
            )}
        </div>
    );
}