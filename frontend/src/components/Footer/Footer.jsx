import { FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer flex justify-between bg-orange-500 text-white p-10 shadow-md">
            <div>
                <h6 className="font-extrabold text-lg">Social</h6>
                <div className='flex gap-3'>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
                </div>
            </div>
            <div>
                <h6 className="font-extrabold text-lg">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
                <div className='flex items-center gap-2'>
                    <FaLocationPin></FaLocationPin>
                    <p>6/2 Kazi Nazrul Islam Rd, Dhaka 1207</p>
                </div>
            </div>
            <div>
                <h6 className="font-extrabold text-lg">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;