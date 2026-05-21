import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaPhoneAlt,} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail, IoMdPaw } from 'react-icons/io';
import { MdAddLocation } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <Link href="/" className="text-2xl font-bold flex items-center gap-1">
                            <IoMdPaw className='text-[#00bd56] -rotate-12' /> <span className='text-gray-900 dark:text-white'>Pet Adoption</span>
                        </Link>
                    <p className="mt-6 text-sm">
                        Empowering pet adoption across Bangladesh by connecting loving homes with animals in need. Adopt, don't shop.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 dark:text-white text-gray-800">Social Links</h2>
                        <ul className="text-2xl flex-row space-x-2">
                            <li>
                                <Link href="https://www.facebook.com/Ab.Bakkar420" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/ab-bakkar71" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/ab-bakkar71/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/ab_bakkar71" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 dark:text-white text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt />
                            <p>+1-212-456-7890</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoMdMail />
                                <p>contact@example.com</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdAddLocation className='text-2xl' />
                                <p>Sector 2, Main Road, Mirpur, <br /> Dhaka - 1216, Bangladesh</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2024 © <Link href="/">Pet Adoption</Link>. All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;