import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
export default function Layouts({ children }) {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}