import PropTypes from 'prop-types';
const MenuItem = ({item}) => {
    const {image, name, price, recipe } = item
    return (
        <div className='lg:flex  gap-8 lg:w-1/2 w-full space-y-5'>
            <img className='lg:w-[118px] rounded-tr-[200px] rounded-b-[200px]' src={image} alt="" />
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h2 className='uppercase'>{name} ------------------</h2>
                    <p className='text-[rgba(187,133,6,1)] text-xl'>${price}</p>
                </div>
                <p className='lg:w-[400px]'>{recipe}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes ={
    item: PropTypes.object
}
export default MenuItem;