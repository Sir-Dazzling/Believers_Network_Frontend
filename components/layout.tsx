import Head from "next/head";
import React from "react";

interface Props 
{
  title?: String;
  className: string;
}

const Layout: React.FC<Props> = ({ children, title, className }) =>
{
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        ></link>

        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <title>{title ? `${title}` : "Believers Network"}</title>
      </Head>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
