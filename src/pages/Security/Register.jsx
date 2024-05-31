import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { useNavigate } from "react-router-dom";
import Header from '../Shared/Header/Header';
import toast from 'react-hot-toast';
import Footer from '../Shared/Footer/Footer';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";




const Register = () => {
    const { createUser, setLoginSuccess } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    document.title = 'Concord | Sign Up';


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (email === "") {
            toast.error("Please Enter Email Address !");
            return;
        } else if (name === "") {
            toast.error("Please Enter User Name !");
            return;
        } else if (password === "") {
            setPasswordError("Password cannot be empty!");
            toast.error("Password cannot be empty.");
            return;
        } else if (password.length <= 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        // Check password requirements
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must have at least one lowercase letter, one uppercase letter, and be at least 6 characters long.");
            toast.error("Password must have at least one lowercase letter, one uppercase letter, and be at least 6 characters long.");
            return;
        }

        // Clear previous password error message
        setPasswordError("");

        // Attempt to create user
        if (createUser) {
            createUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    form.reset();
                    setLoginSuccess(true);
                    navigate("/");
                })
                .catch(error => {
                    console.log(error);
                    toast.error(error.message);
                });
        } else {
            console.error("createUser function is not provided in AuthContext");
            toast.error("createUser function is not provided in AuthContext");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    return (
        <div>
            <Header></Header>

            <div className="bg-gradient-to-br via-green-200 to-yellow-50 flex flex-col justify-center">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <a className="btn btn-ghost text-xl flex items-center justify-center">
                        <img className="h-9" src="/concord-logo.png" alt="logo" />
                    </a>

                    <form onSubmit={handleRegister}>
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <div className="px-5 py-7">
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Name <span className='text-red-500'>*</span></label>
                                <input type="text" name="name" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail <span className='text-red-500'>*</span></label>
                                <input type="email" name="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Photo URL</label>
                                <input type="text" name="photoURL" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

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
                                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                                <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Sign Up</span>
                                </button>
                            </div>
                            <div className="py-5">
                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Already have an account ?</span>
                                    <NavLink to="/sign-in" className="text-black dark:text-white font-bold">Sign in</NavLink>
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

export default Register;
