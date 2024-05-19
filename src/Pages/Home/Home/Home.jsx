import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import ChefSpecial from "../ChefSpecial/ChefSpecial";
import ContactInHome from "../ContactInHome/ContactInHome";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <div className='max-w-6xl mx-auto my-12 px-2'>
                <Category></Category>
                <ChefSpecial></ChefSpecial>
                <PopularMenu></PopularMenu>
                <ContactInHome></ContactInHome>
                <ShouldTry></ShouldTry>
            </div>
            <Featured></Featured>
            <div className='max-w-6xl mx-auto my-12 px-2'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;