import { Outlet } from 'react-router-dom';
import Header from '../components/layouts/header/Header';
import Footer from '../components/layouts/footer/Footer';

export default function MainLayout() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
