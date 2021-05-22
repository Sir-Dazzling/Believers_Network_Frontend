import React from "react";
import
{
    FaChevronCircleUp,
    FaYoutubeSquare,
    FaInstagramSquare,
    FaFacebookSquare,
    FaTwitterSquare
} from 'react-icons/fa';
import BackToTop from 'react-back-to-top-button';

const FooterSection = () =>
{
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div>
                                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">The Believers Equipping Network</a>
                            </div>

                            <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.</p>

                            <div className="flex mt-4 -mx-2">

                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                    <FaFacebookSquare color="#3b5998" />
                                </a>

                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                    <FaTwitterSquare color="#1DA1F2" />
                                </a>

                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Instagram">
                                    <FaInstagramSquare color="#c13584" />
                                </a>

                                <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Youtube">
                                    <FaYoutubeSquare color="red" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
                <div>
                    <p className="text-center text-gray-800 dark:text-white">© DazzlingStar {new Date().getFullYear()} - All rights reserved</p>
                </div>
            </div>
            <BackToTop
                speed={500}
                easing="easeInOutQuint">
                <FaChevronCircleUp color="#DC2626" className="" />
            </BackToTop>
        </footer>
    );
};

export default FooterSection;
