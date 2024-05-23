import { Helmet } from "react-helmet-async";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Sheard/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    // const    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* main cover */}
            <Cover
                img={menuImg}
                title={'OUR MENU'}
                details={'Would you like to try a dish?'}
            ></Cover>

            {/* section title */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>

            {/* offered menu item */}
            <div>
                <MenuCategory
                    item={offered}
                ></MenuCategory>
            </div>

            {/* dessert Menu item */}
            <MenuCategory item={dessert} title={'dessert'} img={dessertImg}></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory img={pizzaImg} item={pizza} title={'pizza'}></MenuCategory>

            {/* salad menu item */}
            <MenuCategory img={saladImg} item={salad} title={'salad'}></MenuCategory>

            {/* soup menu item */}
            <MenuCategory img={soupImg} item={soup} title={'soup'}></MenuCategory>
        </div>
    );
};

export default Menu;