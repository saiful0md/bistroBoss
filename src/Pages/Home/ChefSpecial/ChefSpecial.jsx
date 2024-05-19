import chefSpecial from '../../../assets/home/chef-service.jpg';

const ChefSpecial = () => {
    return (
        <div className=' relative my-12'>
            <img className='lg:h-[570px] h-[250px]  object-cover' src={chefSpecial} alt="" />
            <div className='bg-[rgba(255,255,255,1)] lg:absolute  lg:top-28 lg:left-16 lg:max-w-[1030px]   text-center text-[#151515] px-2 lg:px-[160px] lg:py-[96px] mt-2'>
                <h2 className='lg:text-5xl text-xl lg:mb-4'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefSpecial;