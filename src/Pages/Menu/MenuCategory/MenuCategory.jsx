import PropTypes from 'prop-types';
import Cover from '../../Sheard/Cover/Cover';
import MenuItem from "../../Sheard/MenuItem/MenuItem";

const MenuCategory = ({ item, title, details, coverImg }) => {
    return (
        <div>
            {title && <Cover
                img={coverImg}
                title={title}
                details={details}
            ></Cover>}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  py-10 max-w-6xl mx-auto my-12 px-2 ">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center my-14">
                <button className="py-2 px-4 border-b-[3px] rounded-b-lg ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    item: PropTypes.array,
    coverImg: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string
}
export default MenuCategory;