import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/contact/Contact';
import ProductDetail from '../pages/product/ProductDetail';
import Error404 from '../pages/error/Error404';
import BlogList from '../pages/blog/BlogList';

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
            },
            {
                path: 'blog',
                element: <BlogList />
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    }
]);

export default router;
