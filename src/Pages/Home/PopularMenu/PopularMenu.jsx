import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuItem from "../../Sheard/MenuItem/MenuItem";


const PopularMenu = () => {
  const [menu] = useMenu()
  const popularItem = menu.filter(item=> item.category === 'popular')
    return (
        <div className="">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-2">
                {
                    popularItem.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center my-14">
                <button className="py-2 px-4 border-b-[3px] rounded-b-lg ">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;