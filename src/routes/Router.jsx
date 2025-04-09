import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/contact/Contact';
import ProductDetail from '../pages/product/ProductDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'lien-he',
                element: <Contact />
            },
            {
                path: 'san-pham/:id',
                element: <ProductDetail />
            }
        ]
    }
]);

export default router;
