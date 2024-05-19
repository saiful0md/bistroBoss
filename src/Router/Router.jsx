import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import OurShop from '../Pages/OurShop/OurShop';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/shop',
                element:<OurShop></OurShop>
            }
        ]
    }
])

export default Router;