import Link from "next/link";
import React from "react";
import Layout from "../Layout";
import { PAGES } from '../../helpers/PageNames';

interface Props
{
    left: React.ReactNode;
    right: React.ReactNode;
    heading: string;
    subheading?: string;
    title: string;
    afterText: string;
    link: string;
    linkText: string;
}

const LoginRegistLayout: React.FC<Props> = ({
    left,
    right,
    heading,
    title,
    subheading,
    afterText,
    link,
    linkText,
}) =>
{
    return (
        <Layout title={title}>
            <div className="flex min-h-screen justify-between">
                <div className="lg:bg-red-500 lg:block lg:w-3/4 relative hidden px-5 py-5">
                    <Link href={PAGES.HOME}>
                        <a>
                            <img src="/images/logo.png" className="h-16" alt="Emexup logo" />
                        </a>
                    </Link>
                    {left}
                </div>
                <div className="bg-white-500 lg:bg-green lg:flex-grow w-full px-8 py-5 lg:pt-12">
                    <div>
                        <div className="lg:justify-end flex items-center justify-between mb-10">
                            <Link href={PAGES.HOME}>
                                <a>
                                    <img
                                        src="/images/logo.png"
                                        alt="emexup logo"
                                        className="lg:hidden h-16"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="lg:block hidden mb-8 text-center">
                            <h1 className="mb-1 text-3xl font-medium">{heading}</h1>
                            {subheading && (
                                <h3 className="text-sm font-light text-gray-500">
                                    {subheading}
                                </h3>
                            )}
                        </div>
                        <div className="max-w-sm mx-auto my-auto">
                            {right}
                            <div className="text-center">
                                <span className="lg:text-black ">{afterText}</span>{" "}
                                <Link href={link}>
                                    <a className="lg:text-green-normal text-red-500">{linkText}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginRegistLayout;
