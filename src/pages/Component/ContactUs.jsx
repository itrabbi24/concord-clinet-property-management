import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const ContactUs = () => {

    return (
        <div>
            <Header />

            <section className="relative lg:py-24 py-16">
                <div className="container relative animate__animated animate__bounceInRight">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src="/contact.svg" alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

                                    <form>
                                        <p className="mb-0" id="error-msg"></p>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label className="font-medium">Your Name</label>
                                                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label className="font-medium">Your Email:</label>
                                                <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label className="font-medium">Your Question:</label><br />
                                                <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full" />
                                            </div>

                                            <div className="mb-5">
                                                <label className="font-medium">Your Comment:</label><br />
                                                <textarea className="textarea textarea-accent w-full" placeholder="Comment"></textarea>
                                            </div>
                                        </div>
                                        <button type="button" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative lg:mt-24 mt-16 animate__animated animate__bounceInLeft">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <FaPhone />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Phone</h5>
                                <div className="mt-1">
                                    <a href="tel:+88 01955109710" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">+88 01955109710</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <MdEmail />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Email</h5>
                                <div className="mt-1">
                                    <a href="mailto:contact@rabbi.com" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">contact@rabbi.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <IoLocationSharp />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Location</h5>
                                <p className="text-slate-400 mt-3">4 Noth,
                                    Kallyanpur,
                                    Mirpur, Dhaka-1207</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;