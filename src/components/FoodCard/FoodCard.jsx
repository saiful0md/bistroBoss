import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <p className='bg-black absolute right-4 top-4 px-3 py-2 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="flex card-actions items-center justify-center my-14">
                    <button className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object,
}
export default FoodCard;