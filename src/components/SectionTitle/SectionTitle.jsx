import PropTypes from 'prop-types';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='max-w-lg mx-auto text-center'>
            <p className='text-[#D99904] text-xl'>---{subHeading}---</p>
            <h1 className='text-[40px] light:text-[#151515] text-white border-y-2 py-5 mt-4 mb-12'>{heading} </h1>
        </div>
    );
};

SectionTitle.propTypes ={
    subHeading: PropTypes.string,
    heading: PropTypes.string
}
export default SectionTitle;