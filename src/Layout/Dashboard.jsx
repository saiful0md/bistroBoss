import { FaBars, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbCalendarPlus } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [item] = useCart()
    const isAdmin = true
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[rgba(209,160,84,1)]">
                <div className="w-64 mt-10">
                    <div className="mb-12 pl-6">
                        <Link to={'/'} >
                            <h2 className="text-2xl font-extrabold uppercase">Bistro Boss</h2>
                            <p className="text-lg font-bold tracking-[6.7px]">Restaurant</p>
                        </Link>
                    </div>
                    <ul className="menu uppercase">
                        {
                            isAdmin ? <>
                            {/* admin dashboard */}
                                <li>
                                    <NavLink to={'/dashboard/adminHome'}
                                        className={'font-bold'}
                                    >
                                        <FaHome></FaHome> Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItems'}
                                        className={'font-bold'}
                                    >
                                        <FaUtensils></FaUtensils> add items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'}
                                        className={'font-bold'}
                                    >
                                        <FaList></FaList> manage items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageBookings'}
                                        className={'font-bold'}
                                    >
                                        <FaBook></FaBook> Manage bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}
                                        className={'font-bold'}
                                    >
                                        <FaUsers></FaUsers> all users</NavLink>
                                </li>
                            </>
                                :
                                // user Dashboard
                                <>
                                    <li>
                                        <NavLink to={'/dashboard/userHome'}
                                            className={'font-bold'}
                                        >
                                            <FaHome></FaHome> User Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/reservation'}
                                            className={'font-bold'}
                                        >
                                            <FaCalendar></FaCalendar> reservation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/paymentHistory'}
                                            className={'font-bold'}
                                        >
                                            <FaWallet></FaWallet> payment history</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/cart'}
                                            className={'font-bold'}
                                        >
                                            <FaShoppingCart></FaShoppingCart> My Cart ({item.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/addReview'}
                                            className={'font-bold'}
                                        >
                                            <FaMessage></FaMessage> Add Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/myBookings'}
                                            className={'font-bold'}
                                        >
                                            <TbCalendarPlus className="fill-black"></TbCalendarPlus> My Bookings</NavLink>
                                    </li>
                                </>
                        }


                        {/* dvider */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to={'/'}
                                className={'font-bold'}
                            >
                                <FaHome></FaHome>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/menu'}
                                className={'font-bold'}
                            >
                                <FaBars></FaBars>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shop/salad'}
                                className={'font-bold'}
                            >
                                <FaShop></FaShop>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}
                                className={'font-bold'}
                            >
                                <IoMdMail></IoMdMail>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* /dashboard contant */}
            <div className="flex-1 px-20 bg-slate-100">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;