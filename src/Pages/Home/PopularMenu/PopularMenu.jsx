import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheard/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItme = data.filter(item => item.category === 'popular');
                setMenu(popularItme)
            })
    }, [])
    return (
        <div className="">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-2">
                {
                    menu.map(item => <MenuItem
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