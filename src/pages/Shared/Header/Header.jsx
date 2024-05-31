import { Link, NavLink } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";




const Header = () => {


    const { user, logOut } = useContext(AuthContext);


    return (
        <>
            <Toaster position="top-right" />

            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/for-sale'>Sale</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact-us'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img className="h-9" src="/concord-logo.png" alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/for-sale'>Sale</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about-us'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us'>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end items-center space-x-2 hidden lg:flex">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" title={user?.displayName} className="w-10 rounded-full" />
                                    ) : (
                                        <img src="/avater.jpg" alt="Default Profile" className="w-10 rounded-full" />
                                    )}
                                </div>
                            </div>

                            {user.displayName ? (
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="badge badge-accent">{user.displayName}</div>
                                    <br />
                                    <li><Link to="/Update-Profile">Update Profile</Link></li>
                                    <hr />
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            ) : (
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="badge badge-accent" title={user.email}>{user.email}</div>
                                    <br />
                                    <li><Link to="/Update-Profile">Update Profile</Link></li>
                                    <hr />
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            )}


                        </div>
                    ) : (
                        <div className="navbar-end space-x-2">
                            <NavLink className="btn btn-outline btn-success" to="/sign-in">Sign In</NavLink>
                            <NavLink className="btn btn-outline btn-error" to="/sign-up">Sign Up</NavLink>
                        </div>
                    )}
                </div>

            </div>

        </>
    );
};

export default Header;