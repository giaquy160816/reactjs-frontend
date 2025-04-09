import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductDescription.module.scss';

export default function ProductDescription({ description, specifications }) {
    const [activeTab, setActiveTab] = useState('description');
    
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.tabsContainer}>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'description' ? styles.active : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Mô tả sản phẩm
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'specifications' ? styles.active : ''}`}
                    onClick={() => setActiveTab('specifications')}
                >
                    Thông số kỹ thuật
                </button>
            </div>
            
            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div 
                        className={styles.descriptionContent}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
                
                {activeTab === 'specifications' && (
                    <div className={styles.specificationsContent}>
                        <table className={styles.specTable}>
                            <tbody>
                                {specifications.map((spec, index) => (
                                    <tr key={index}>
                                        <td className={styles.specName}>{spec.name}</td>
                                        <td className={styles.specValue}>{spec.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

ProductDescription.propTypes = {
    description: PropTypes.string.isRequired,
    specifications: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired
};
