import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper lg:h-[450px] md:h-[300px] h-[120px]"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-center uppercase text-xs md:text-xl lg:text-2xl text-white -mt-6 md:-mt-10 lg:-mt-20'>salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-center uppercase text-xs md:text-xl lg:text-2xl text-white -mt-6 md:-mt-10 lg:-mt-20'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-center uppercase text-xs md:text-xl lg:text-2xl text-white -mt-6 md:-mt-10 lg:-mt-20'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-center uppercase text-xs md:text-xl lg:text-2xl text-white -mt-6 md:-mt-10 lg:-mt-20'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-center uppercase text-xs md:text-xl lg:text-2xl text-white -mt-6 md:-mt-10 lg:-mt-20'>salad</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;