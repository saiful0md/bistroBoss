import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const ShopTab = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* {
                 item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
             } */}
            </div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper border"
            >
                <SwiperSlide>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                      {
                          item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                      }
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
ShopTab.propTypes = {
    item: PropTypes.array
}
export default ShopTab;