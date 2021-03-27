import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import LoginRegisterLayout from "../../components/auth/LoginRegisterLayout";
import { PAGES } from "../../helpers/PageNames";
import { Button } from "../../components/button/Button";
import InputField from "../../components/auth/InputField";

const Signin = () =>
{
    return (
        <LoginRegisterLayout
            title="Sign in to Believers Network"
            heading="Let’s sign you in"
            subheading="Welcome back. We’ve missed you!"
            left={<LeftSide />}
            afterText="Don't have an account?"
            link={PAGES.SIGNUP}
            linkText="Register"
            right={<SigninForm />}
        />
    );
};

const LeftSide = () => (
    <>
        <img
            src="/images/login.svg"
            alt="emexup logo"
            className="mt-24"
        />
    </>
);

const SigninForm = () =>
{
    const router = useRouter();

    const [state, setState] = useState<any>({
        usernameOrEmail: "",
        password: "",
    });

    //   const mutation = useLoginMutation(graphQLClient);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        e.preventDefault();

        setState((old) => ({ ...old, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        // mutation.mutate(
        //   { data: state },
        //   {
        //     onSettled: (data) =>
        //     {
        //       if (data.login.errors.length > 0)
        //       {
        //         return;
        //       }
        //       if (data.login?.user?.emailVerified === false)
        //       {
        //         router.push(PAGES.VERIFYEMAIL);
        //       } else if (data.login?.user?.phoneNumberVerified === false)
        //       {
        //         router.push(PAGES.FORGOTPASSWORD);
        //       } else
        //       {
        //         router.push(PAGES.HOME);
        //       }
        //     },
        //   }
        // );
    };
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <InputField
                placeholder="Enter username or email"
                name="usernameOrEmail"
                type="text"
                containerClassName=" mb-6"
                inputClassName="w-full"
                onChange={handleChange}
                value={state.usernameOrEmail}
                errors={[]}
                required
            />
            <InputField
                placeholder="Enter password"
                type="password"
                name="password"
                containerClassName=" mb-6"
                inputClassName="w-full"
                onChange={handleChange}
                value={state.password}
                errors={[]}
                required
            />
            <Link href="/auth/forgot-password">
                <a className="lg:hover:text-green-normal hover:text-gray-400 max-w-max text-gray-500 lg:text-gray-500 block mb-6 ml-auto text-right duration-300">
                    Forgot password?
                </a>
            </Link>

            <Button
                isLoading={false}
                type="red"
                className="lg:bg-red-500 lg:p-3 lg:text-white w-full"
            >
                Login
      </Button>
        </form>
    );
};

export default Signin;