import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col lg:flex-row md:flex-row">
                <div className="lg:w-1/2 md:w-1/2 bg-[rgba(31,41,55,1)] lg:pl-40">
                    <div className="lg:w-2/3  flex flex-col text-white text-center gap-2 py-10">
                        <h6 className="text-3xl">CONTACT US</h6>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p> Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 bg-[rgba(17,24,39,1)]">
                    <div className="lg:w-2/3 text-white flex flex-col items-center gap-3 py-10">
                        <h6 className="text-3xl">Follow US</h6>
                        <p>Join us on social media</p>
                        <div className="flex gap-4">
                            <a><FaFacebook className="text-xl"></FaFacebook></a>
                            <a><FaInstagram className="text-xl"></FaInstagram></a>
                            <a><FaTwitter className="text-xl"></FaTwitter></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[rgba(21,21,21,1)] text-white">
                <aside>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;