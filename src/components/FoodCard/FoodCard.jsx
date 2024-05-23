import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const [,refatch]= useCart()
    const { image, name, price, recipe, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                image,
                name,
                price,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                    refatch()
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "please login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/logIn', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black absolute right-4 top-4 px-3 py-2 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="flex card-actions items-center justify-center my-14">
                    <button
                        onClick={handleAddToCart}
                        className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object,
}
export default FoodCard;