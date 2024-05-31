import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Error from "../pages/Component/Error";
import ForSale from "../pages/Component/ForSale";
import AboutUs from "../pages/Component/AboutUs";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/User/UpdateProfile";
import ContactUs from "../pages/Component/ContactUs";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-in',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Register></Register>
            },
            {
                path: '/for-sale',
                element: <ForSale></ForSale>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/property-details/:id', //PropertyDetails with ID parameter
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
            },
            {
                path: '/Update-Profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
        ]
    }
]);

export default router;