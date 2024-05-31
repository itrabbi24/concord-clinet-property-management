import { useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    const scrollFunction = () => {
        const button = document.getElementById('back-to-top');
        if (button) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        }
    };

    useEffect(() => {
        window.onscroll = () => scrollFunction();
    }, []);

    return (
        <div className="rounded-lg">
            <footer className="footer p-10 bg-neutral text-neutral-content mt-8">
                <aside>
                    <p>
                        Concord is one of Bangladeshi’s leading Real Estate &amp;
                        <br />
                        Construction conglomerates. We have completed more than 1200
                        <br /> well-known projects and handed over more than 10,000 <br />
                        units in the last 47 years.
                    </p>
                </aside>
                <nav className="mt-4 sm:mt-0">
                    <h6 className="footer-title">Services</h6>
                    <Link to='/about-us' className="link link-hover">About Us</Link>
                    <Link to='/for-sale' className="link link-hover">Sales</Link>
                    <a className="link link-hover">How It Works</a>
                </nav>
                <nav className="mt-4 sm:mt-0">
                    <h6 className="footer-title">Company</h6>
                    <Link to='/about-us' className="link link-hover">About Us</Link>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className="mt-4 sm:mt-0">
                    <h6 className="footer-title">Contact Info</h6>
                    <div className="flex mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin w-5 h-5 text-green-600 me-3">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div className="">
                            <h6 className="text-gray-300 mb-2">4 Noth, <br /> Kallyanpur, <br /> Mirpur, Dhaka-1207</h6>
                        </div>
                    </div>
                    <div className="flex mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-5 h-5 text-green-600 me-3">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div className="">
                            <a href="mailto:contact@rabbi.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@rabbi.com</a>
                        </div>
                    </div>

                    <div className="flex mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone w-5 h-5 text-green-600 me-3">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div className="">
                            <a href="tel:+8801955109710" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+8801955109710</a>
                        </div>
                    </div>

                </nav>
            </footer>

            <div className="footer-bottom bg-neutral text-neutral-content py-4">
                <div className="auto-container">
                    <div className="inner-box grid grid-cols-1 lg:grid-cols-1 justify-center">
                        <figure className="footer-logo">
                            <a className="btn btn-ghost text-xl">
                                <img className="h-9" src="/concord-white-logo.png" alt="logo" />
                            </a>
                        </figure>

                        <div className="inner-box flex flex-col lg:flex-row justify-between items-center">
                            <div className="text-gray-300 text-center lg:text-left">
                                <p>Concord © {year}</p>
                            </div>
                            <div className="footer-nav flex justify-center lg:justify-end">
                                <ul className="flex flex-wrap justify-center lg:justify-start">
                                    <li><a href="#" className="text-gray-300">Terms of Service</a></li>
                                    <li><a href="#" className="text-gray-300">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" onClick={topFunction} id="back-to-top"
                className="back-to-top fixed text-3xl rounded-full z-10 bottom-5 end-5 h-8 w-8 text-center bg-green-600 text-white justify-center items-center flex">
                <FaArrowAltCircleUp />
            </a>

        </div>

    );
};

export default Footer;
