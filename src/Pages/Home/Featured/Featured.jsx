import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';
const Featured = () => {
    return (
        <div className='featuredBg  py-32 lg:px-20 px-8 bg-fixed my-12 '>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
                textColor
            >
            </SectionTitle>
            <div className='lg:flex md:flex items-center gap-10 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='text-white flex flex-col gap-6'>
                    <h2>March 20, 2023</h2>
                    <h3>
                        WHERE CAN I GET SOME?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className="">
                        <button className="py-2 px-4 border-b-[3px] bg-black rounded-lg ">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;