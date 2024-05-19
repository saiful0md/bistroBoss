import PropTypes from 'prop-types';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div>
            <p>{subHeading}</p>
            <h1>{heading} </h1>
        </div>
    );
};

SectionTitle.propTypes ={
    subHeading: PropTypes.string,
    heading: PropTypes.string
}
export default SectionTitle;