import { Helmet } from 'react-helmet-async';
import contactCover from '../../assets/contact/banner.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Cover from '../Sheard/Cover/Cover';
const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover
                img={contactCover}
                title={'CONTACT US'}
                details={'Would you like to try a dish?'}
            ></Cover>
            <SectionTitle 
            heading={'Visit Us'}
            subHeading={'OUR LOCATION'}
            ></SectionTitle>
        </div>
    );
};
export default ContactUs;