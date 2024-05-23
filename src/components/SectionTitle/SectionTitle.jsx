import PropTypes from 'prop-types';

const SectionTitle = ({ subHeading, heading, textColor }) => {
    return (
        <div className='max-w-lg mx-auto text-center pt-10'>
            {textColor ? <><p className='text-[#D99904] text-xl'>---{subHeading}---</p>
                <h1 className='text-[40px] text-white border-y-2 py-5 mt-4 mb-12'>{heading} </h1>
            </>
                :
                <>
                    <p className='text-[#D99904] text-xl'>---{subHeading}---</p>
                    <h1 className='text-[40px]  border-y-2 py-5 mt-4 mb-12'>{heading} </h1>
                </>
            }
        </div>
    );
};

SectionTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string,
    textColor: PropTypes.bool
}
export default SectionTitle;