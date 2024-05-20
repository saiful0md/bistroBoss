import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >

                <div className="hero h-[800px]">
                    <div className="hero-overlay w-2/3 h-1/2 bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-white font-bold uppercase">{title}</h1>
                            <p className="mb-5 text-white">{details}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};
Cover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string
}
export default Cover;