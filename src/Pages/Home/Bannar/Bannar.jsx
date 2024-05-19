import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slideImg1 from '../../../assets/home/01.jpg';
import slideImg2 from '../../../assets/home/02.jpg';
import slideImg3 from '../../../assets/home/03.png';
import slideImg4 from '../../../assets/home/04.jpg';
import slideImg5 from '../../../assets/home/05.png';
import slideImg6 from '../../../assets/home/06.png';

// custom css
import './Bannar.css';
const Bannar = () => {
    
    return (
        <Carousel 
        autoPlay
        infiniteLoop
        interval={2000}
        >
            <div>
                <img src={slideImg1} />
            </div>
            <div>
                <img src={slideImg2} />
            </div>
            <div>
                <img src={slideImg3} />
            </div>
            <div>
                <img src={slideImg4} />
            </div>
            <div>
                <img src={slideImg5} />
            </div>
            <div>
                <img src={slideImg6} />
            </div>
        </Carousel>
    );
};

export default Bannar;