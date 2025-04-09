import styles from './Contact.module.scss';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import GoogleMap from '../../components/contact/GoogleMap';

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <div className={styles.contactContainer}>
                <h1 className={styles.pageTitle}>Liên hệ với chúng tôi</h1>
                
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <ContactInfo />
                    </div>
                    <div className={styles.contactForm}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            
            <div className={styles.mapContainer}>
                <GoogleMap />
            </div>
        </div>
    );
}
