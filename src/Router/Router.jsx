import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Main from '../Layout/Main';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Cart from '../Pages/Dashboard/Cart/Cart';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Menu from '../Pages/Menu/Menu/Menu';
import OurShop from '../Pages/OurShop/OurShop';
import SignUp from '../Pages/SignUp/SignUp';
import PriveteRoute from './PriveteRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element:
                    <Menu></Menu>

            },
            {
                path: '/shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    }
])

export default Router;