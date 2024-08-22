import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";




const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="h-10 border-b border-gray-700"> 
        {/* Social Media Icons */}
        <div className="flex justify-end mt-8 space-x-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
            <a key={index} href="#" className="text-white hover:text-gray-300">
              <Icon className="text-2xl" />
            </a>
          ))}
        </div>
        </div>
        <div className="flex flex-wrap justify-between mt-16">
          {/* Logo and About */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold"> About Charius</span>
            </Link>
            <p className="text-sm">
              Purus tellus arcu consequat neque nisl integer fames ac venenatis. Neque ornare ut viverra purus suscipit morbi. Lorem pretium purus sagittis congue rhoncus et mi lacus duis ut.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Mission & Vision', 'Volunteer', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Mission & Vision</h3>
            <ul className="space-y-2">
              {['Kids Education', 'Pure Water', 'Healthy Food', 'Medical Care'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Nulla nequeut molestie interdum nisl ut consequat.</p>
            <p className="mb-2">
              <a href="mailto:charius@gmail.com" className="hover:text-gray-300 flex flex-row gap-2"><HiOutlineMail className='mt-1'/>charius@gmail.com</a>
            </p>
            <p className="mb-2">
              <a href="tel:+81231234567" className="hover:text-gray-300 flex flex-row gap-2"><IoIosCall className='mt-1'/>
+8 (123) 123 - 456 - 789</a>
            </p>
            <p className='flex flex-row gap-2'><IoLocationOutline className='mt-1' />
19 Thordge Shiloh,Hawai 863</p>
          </div>
        </div>

        {/* Copyright and Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
          <p>&copy; 2024 charius. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Privacy & Policy', 'Terms', 'About us', 'FAQ', 'Volunteer'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm hover:text-gray-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;