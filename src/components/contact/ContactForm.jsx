import { useState } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form ở đây
        console.log('Form submitted:', formData);
        // Reset form sau khi gửi
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            message: ''
        });
        alert('Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể!');
    };
    
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Gửi thông tin liên hệ</h2>
            <p className={styles.formDescription}>
                Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">Họ và tên <span className={styles.required}>*</span></label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên của bạn"
                        required
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Số điện thoại <span className={styles.required}>*</span></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại của bạn"
                        required
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập địa chỉ email của bạn"
                        required
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="message">Nội dung liên hệ <span className={styles.required}>*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập nội dung liên hệ của bạn"
                        rows="5"
                        required
                    ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                    Gửi thông tin
                </button>
            </form>
        </div>
    );
}
