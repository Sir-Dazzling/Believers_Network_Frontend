import React from "react";

const CTASection = () =>
{
    return (
        <div
            className="bg-gray-900 pattern">
            <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                <h1 className="text-3xl font-semibold text-white ">We've got more features coming...</h1>
                <p className="max-w-md mx-auto mt-5 text-gray-400 dark:text-gray-400">Want to hear from us when we release updates? Sign up to our newsletter.</p>

                <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address" />

                    <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-indigo-600">
                        Subscribe to Newsletter
                </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
