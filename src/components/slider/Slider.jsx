import { memo, useState, useCallback } from 'react';
import Image from '@/components/common/Image';
import styles from './Slider.module.scss';

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    return (
        <div className={styles.slider}>
            <button onClick={prevSlide} className={styles.prevButton}>←</button>
            <div className={styles.slideContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        {Math.abs(currentSlide - index) <= 1 && (
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                link={slide.link}
                            />
                        )}
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className={styles.nextButton}>→</button>
        </div>
    );
};

export default memo(Slider);