import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
    const { signIn, setLoginSuccess, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    document.title = 'Concord | Sign In';



    const handleLogin = async event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email == "") {
            toast.error("Please Enter Valid Email");
            return;
        } else if (password == "") {
            toast.error("Please Enter Valid Password !");
            return;
        } else if (email === "" && password === "") {
            toast.error("Please Enter email and password both for login !");
            return;
        }

        try {
            const result = await signIn(email, password);
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            // Redirect to home page after login success
            navigate(location?.state ? location.state : '/' );
            // Show toastr login success
            // toast.success("Login Success");
            setLoginSuccess(true);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Show toastr login success
                // Redirect to home page after login success
                navigate(location?.state ? location.state : '/' );
                // toast.success("Login Success With G-Mail");
                setLoginSuccess(true);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Redirect to home page after login success
                navigate(location?.state ? location.state : '/' );
                // Show toastr login success
                // toast.success("Login Success With Github");
                setLoginSuccess(true);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };


    return (
        <div>
            <Header></Header>

            <Toaster position="top-right" />
            <div className="bg-gradient-to-br via-green-200 to-yellow-50 flex flex-col justify-center ">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <a className="btn btn-ghost text-xl flex items-center justify-center">
                        <img className="h-9" src="/concord-logo.png" alt="logo" />
                    </a>

                    <form onSubmit={handleLogin}>
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <div className="px-5 py-7">
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail <span className='text-red-500'>*</span></label>
                                <input type="text" name="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password <span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        name="password"
                                        className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 transform -translate-y-1/2 right-3 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <FaEye />
                                        ) : (
                                            <IoIosEyeOff />
                                        )}
                                    </button>
                                </div>
                                <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Login</span>
                                </button>
                            </div>
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-1">
                                    <button type="button" onClick={handleGoogleSignIn} className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                        Google
                                    </button>
                                    <button type="button" onClick={handleGitHubSignIn} className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                        GitHub
                                    </button>
                                </div>
                            </div>
                            <div className="py-5">
                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Don't have an account ?</span>
                                    <NavLink to="/sign-up" className="text-black dark:text-white font-bold">Sign Up</NavLink>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <NavLink to="/" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <span className="inline-block ml-1">Back to Home Page</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
