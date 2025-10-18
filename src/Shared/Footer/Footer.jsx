import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer>
            <div className="footer flex flex-col sm:flex-row justify-around p-10 bg-neutral text-neutral-content">
                <div>
                    <h3>CONTACT US</h3>
                    <p>123 ABC Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon-Fri: 08:00 - 22:00</p>
                    <p>Sat-Sun: 10:00 - 23:00</p>
                </div>
                <div>
                    <h3>Follow US</h3>
                    <p>Join Us on social media</p>
                    <div className="flex gap-6 text-2xl">
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaTwitter />
                    </div>
                </div>

            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;