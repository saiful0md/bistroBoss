import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
            <div className=' w-full card  flex flex-col items-center px-2'>
                <div className='relative'>
                    <img className=' w-[424px] h-[300px] object-cover' src={image} alt="" />
                    <p className=' top-4 right-6 absolute bg-black text-white px-3 py-2'>${price}</p>
                </div>
                <div className='flex flex-col items-center text-center py-8 px-4 bg-[rgba(243,243,243,1)]'>
                    <h3 className='text-[rgba(21,21,21,1)] text-2xl'>{name}</h3>
                    <p className='text-[rgba(21,21,21,1)]'>{recipe}</p>
                    <button className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart</button>
                </div>
            </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object,
}
export default FoodCard;