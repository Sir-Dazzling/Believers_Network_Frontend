import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, MouseEvent } from "react";
import { useState } from "react";
import Layout from '../../components/layout';
import { Button } from '../../components/button/Button';
import { PAGES } from "../../helpers/PageNames";
import OtpInput from 'react-otp-input';

const VerifyEmail = ({ user }) =>
{
    return (
        <Layout title="Verify your email with Belivers Equipping Network">
            <div className="relative px-8 py-14 sm:py-14 md:p-0">
                <div className="sm:flex sm:justify-center md:justify-between">
                    <img
                        className="md:block w-52 top-0 left-0 z-0 hidden"
                        src="/images/ellipse.svg"
                        alt="blob illustration"
                    />
                    <h1 className="self-center text-center text-3xl font-medium">Verify Email</h1>
                    <Link href={PAGES.HOME}>
                        <a className="z-19">
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                className="z-10 hidden h-16 md:block sm:mr-2 sm:mt-10"
                            />
                        </a>
                    </Link>
                </div>
                <div className="sm:mt-0 relative flex flex-col items-center mx-auto mt-16">
                    <img
                        className="px-4 sm:w-96"
                        src="/images/verify_email.svg"
                        alt="sparkle illustration"
                    />
                    <p className="max-w-md mt-6 mb-6 text-center">
                        We’ve sent a mail to{" "}
                        <span className="font-bold">{user?.email} </span>. Please enter
                        4-digit code sent.
                    </p>
                    <VerifyForm />
                    <ResendButtonSection />
                </div>
            </div>
        </Layout>
    );
};

const VerifyForm = () =>
{
    const [otp, setOtp] = useState("");
    // const verifyEmailVerificationTokenMutation = useVerifyEmailVerificationTokenMutation(
    //   graphQLClient,
    //   {
    //     onError: (e) => console.log(e),
    //     onSettled: async (data) => {
    //       if (data.verifyEmailVerificationToken.verified) {
    //         router.push(PAGES.VERIFYPHONE);
    //       }
    //     },
    //   }
    // );

    const router = useRouter();

    const handleVerifyToken = () =>
    {
        if (otp.length === 4)
        {
            // verifyEmailVerificationTokenMutation.mutate({ data: { token: otp } });
        }
    };

    return (
        <>
            <OtpInput
                value={otp}
                shouldAutoFocus={true}
                onChange={(val: string) => setOtp(val)}
                numInputs={4}
                className=" mb-12 text-white"
                isInputNum={true}
                inputStyle={{
                    width: "2.8rem",
                    padding: ".7rem",
                    color: "black",
                    border: "2px solid #F87171",
                    borderRadius: "6px",

                }}
                separator={<span className="w-4"></span>}
            />{" "}
            {/* {verifyEmailVerificationTokenMutation.data &&
          verifyEmailVerificationTokenMutation.data.verifyEmailVerificationToken.errors.map(
            (error, idx) => (
              <p key={idx} className="mb-1 text-center text-red-700">
                {error.message}{" "}
              </p>
            )
          )} */}
            <Button
                disabled={otp.length < 4}
                //   isLoading={verifyEmailVerificationTokenMutation?.isLoading}
                isLoading={false}
                onClick={handleVerifyToken}
                className="w-11/12 max-w-md transition duration-500 transform hover:-translate-y-1 ease-in-out
                hover:bg-red-400"
                type="red">
                Verify Email
        </Button>
        </>
    );
};

const ResendButtonSection = () =>
{
    const [countDown, setCountDown] = useState(40);
    // const sendEmailVerificationTokenMutation = useSendEmailVerificationTokenMutation(
    //   graphQLClient,
    //   {
    //     onError: (e) => console.log(e),
    //     onSettled: (data) => console.log(data),
    //   }
    // );

    useEffect(() =>
    {
        let intervalId: any;
        if (countDown > 0)
        {
            intervalId = setInterval(() =>
            {
                setCountDown((old) =>
                {
                    return old - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [countDown]);

    const handleButtonClick = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) =>
    {
        event.preventDefault();
        //   sendEmailVerificationTokenMutation.mutate({});
        setCountDown(40);
    };

    return (
        <button
            disabled={countDown != 0}
            onClick={handleButtonClick}
            className="disabled:opacity-80 disabled:cursor-not-allowed p-0 mt-1 text-right underline"
        >
            {countDown > 0 && <span className="font-bold"> {countDown}s</span>} Resend
        token
        </button>
    );
};

export default VerifyEmail;