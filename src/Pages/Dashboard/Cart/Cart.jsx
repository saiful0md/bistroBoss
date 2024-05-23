import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart, refatch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refatch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Cart</title>
            </Helmet>
            <div className="">
                <SectionTitle
                    subHeading={'My Cart'}
                    heading={'WANNA ADD MORE?'}
                ></SectionTitle>
                <div className="bg-white mb-9 py-10 px-8">
                    <div className="flex justify-evenly mb-8">
                        <h2 className="text-3xl">Total orders: {cart.length}</h2>
                        <h2 className="text-3xl">total price: ${totalPrice}</h2>
                        <button className="btn text-white bg-[rgba(209,160,84,1)] hover:bg-[#b98b45]">Pay</button>
                    </div>
                    <div className="overflow-x-auto rounded-t-2xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[rgba(209,160,84,1)] text-white ">
                                <tr>
                                    <th>
                                    </th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-ghost btn-md bg-red-600 text-white"><FaRegTrashAlt></FaRegTrashAlt>
                                            </button>
                                        </th>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;