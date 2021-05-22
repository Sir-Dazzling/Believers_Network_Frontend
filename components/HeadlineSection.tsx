import Link from "next/link";

export const HeadlineSection = () =>
{

    return (
        // <div className="py-12 bg-white">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="lg:text-center">
        //             <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Quick Overview</h2>
        //             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Bible study hasnt been any better</p>
        //             <p className="">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        //         </div>
        //     </div>

        //     <div className="mt-10 px-2 sm:px-6">
        //         <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        //             <div className="relative">
        //                 <dt>
        //                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        //                         </svg>
        //                     </div>
        //                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
        //                 </dt>
        //                 <dd className="mt-2 ml-16 text-base text-gray-500">
        //                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        //                 </dd>
        //             </div>
        //             <div className="relative">
        //                 <dt>
        //                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        //                         </svg>
        //                     </div>
        //                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No hidden fees</p>
        //                 </dt>
        //                 <dd className="mt-2 ml-16 text-base text-gray-500">
        //                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        //                 </dd>
        //             </div>
        //             <div className="relative">
        //                 <dt>
        //                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        //                         </svg>
        //                     </div>
        //                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
        //                 </dt>
        //                 <dd className="mt-2 ml-16 text-base text-gray-500">
        //                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        //                 </dd>
        //             </div>
        //             <div className="relative">
        //                 <dt>
        //                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        //                         </svg>
        //                     </div>
        //                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile Notifications</p>
        //                 </dt>
        //                 <dd className="mt-2 ml-16 text-base text-gray-500">
        //                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        //                 </dd>
        //             </div>
        //         </dl>
        //     </div>
        // </div>
        <>
            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">Quick Overview</h2>
                    <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Certifications</h4>
                            <p className="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
                            <p className="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
                            <p className="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
                            <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Building Blocks</h4>
                            <p className="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
                            <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24 space-y-16">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/images/conversation.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </div>

                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Boost Productivity
                </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Build an atmosphere that creates productivity in your organization and your company culture.
                </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                    </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
                    </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
                    </li>
                        </ul>
                    </div>

                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">


                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Automated Tasks
                </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            Save time and money with our revolutionary services. We are the leaders in the industry.
                </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
                    </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
                    </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
                    </li>
                        </ul>
                    </div>

                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="/images/friends.svg" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                    </div>
                </div>
            </section>
        </>
    );
};