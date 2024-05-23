import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [data] = useCart();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
    const navLinks = <>
        <li><NavLink className='uppercase' to={'/'}>Home</NavLink></li>
        <li><NavLink className='uppercase' to={'/contact'}>CONTACT US</NavLink></li>
        <li><NavLink className='uppercase' to={'/dashboard'}>DASHBOARD</NavLink></li>
        <li><NavLink className='uppercase' to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink className='uppercase' to={'/shop/salad'}>Our Shop</NavLink></li>
        <li>
            <Link to={'/dashboard'}>
                <div className=" bg-green-600 w-8 h-6 flex items-center justify-center rounded-badge text-white">
                    <TiShoppingCart className="text-lg"></TiShoppingCart>
                    <div className=" bg-red-500 text-xs text-black w-4 h-4 flex items-center justify-center rounded-badge absolute mt-4 ml-4 ">{data.length}</div>
                </div>
            </Link>
        </li>
        {
            user ? <>

                <button onClick={handleSignOut} className='uppercase btn-sm btn-ghost'>SignOut</button>
                <div className="dropdown dropdown-end text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{user?.displayName}</li>
                        <li>{user?.email}</li>
                    </ul>
                </div>
            </> : <>
                <li><NavLink className='uppercase' to={'/login'}>Login</NavLink></li>
            </>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-25 h-[100px] text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;