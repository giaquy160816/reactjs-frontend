import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';

const Image = ({ src, alt, link, className, onClick }) => {
    const imgElement = (
        <img
            className={`${styles.image} ${className}`}
            src={src}
            alt={alt}
            loading="lazy"
            onClick={onClick}
        />
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {imgElement}
            </a>
        );
    }

    return <div className={styles.wrapper}>{imgElement}</div>;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Image.defaultProps = {
    alt: '',
    className: '',
    onClick: () => {}
};

export default memo(Image);