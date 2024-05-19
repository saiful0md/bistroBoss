import { Helmet } from "react-helmet-async";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import Cover from "../../Sheard/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
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

            {/* offered menu item */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory
                item={offered}
            ></MenuCategory>

            {/* dessert Menu item */}
            <MenuCategory
                item={dessert}
                title={'DESSERTS'}
                coverImg={dessertImg}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory
            coverImg={pizzaImg}
            item={pizza}
            title={'PIZZA'}
            details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* salad menu item */}
            <MenuCategory
            coverImg={saladImg}
            item={salad}
            title={'SALAD'}
            details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* soup menu item */}
            <MenuCategory
            coverImg={soupImg}
            item={soup}
            title={'SOUP'}
            details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;