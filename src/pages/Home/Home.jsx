import { useContext, useEffect } from "react";
import Category from "../Component/Category";
import CtaSection from "../Component/CtaSection";
import Featured from "../Component/Featured";
import Subscribe from "../Component/Subscribe";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Slider from "../Shared/Slider/Slider";
import './../../App.css';
import 'animate.css';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {

    const { loginSuccess, setLoginSuccess } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Concord | Home';
        }

        if (loginSuccess) {
            toast.success("Login Success");
            setLoginSuccess(false);
        }
    }, [location.pathname, loginSuccess, setLoginSuccess]);


    return (
        <div>
            <Toaster position="top-right" />

            <Header></Header>
            <Slider></Slider>
            <Category></Category>
            <Featured></Featured>
            <CtaSection></CtaSection>
            <Subscribe></Subscribe>
           <Footer></Footer>
        </div>
    );
};

export default Home;