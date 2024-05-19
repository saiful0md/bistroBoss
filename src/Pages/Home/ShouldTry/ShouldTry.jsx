import slad1 from '../../../assets/home/slide1.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ShouldTry = () => {
    return (
        <div className='my-12'>
            <SectionTitle
            subHeading={'Should Try'}
            heading={'CHEF RECOMMENDS'}
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                <div className='bg-[rgba(243,243,243,1)] w-full flex flex-col items-center '>
                    <img className='w-[424px] h-[300px] object-cover' src={slad1} alt="" />
                    <div className='flex flex-col items-center text-center py-8 px-4'>
                        <h3 className='text-[rgba(21,21,21,1)] text-2xl'>Caeser Salad</h3>
                        <p className='text-[rgba(21,21,21,1)]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart</button>
                    </div>
                </div>
                <div className='bg-[rgba(243,243,243,1)] w-full flex flex-col items-center '>
                    <img className='w-[424px] h-[300px] object-cover' src={slad1} alt="" />
                    <div className='flex flex-col items-center text-center py-8 px-4'>
                        <h3 className='text-[rgba(21,21,21,1)] text-2xl'>Caeser Salad</h3>
                        <p className='text-[rgba(21,21,21,1)]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart</button>
                    </div>
                </div>
                <div className='bg-[rgba(243,243,243,1)] w-full flex flex-col items-center '>
                    <img className='w-[424px] h-[300px] object-cover' src={slad1} alt="" />
                    <div className='flex flex-col items-center text-center py-8 px-4'>
                        <h3 className='text-[rgba(21,21,21,1)] text-2xl'>Caeser Salad</h3>
                        <p className='text-[rgba(21,21,21,1)]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='py-2 px-4 border-b-[3px]  text-[#BB8506] border-[#BB8506] hover:border-none rounded-lg uppercase bg-[rgba(232,232,232,1)] hover:bg-[rgba(31,41,55,1)] mt-4'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;