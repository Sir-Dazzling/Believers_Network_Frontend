import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import LoginRegisterLayout from "../../components/auth/LoginRegisterLayout";
import { PAGES } from "../../helpers/PageNames";
import { Button } from "../../components/button/Button";
import InputField from "../../components/auth/InputField";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Enabling Swiper functionality
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Signup = () =>
{
    return (
        <LoginRegisterLayout
            title="Sign up with Believers Network"
            heading="Create Account"
            type="Signup"
            left={<LeftSide />}
            afterText="Already have an account?"
            link={PAGES.SIGNIN}
            linkText="Login"
            right={<SignupForm />}
        />
    );
};

const LeftSide = () => (
    <div className="p-10">
        <Swiper
            style={{
                width: 500
            }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/bible.svg" />
                <h1 className="px-10 font-bold mb-3">Welcome to the Believers Network</h1>
                <h1 className="px-10 text-sm">We provide an intuitive platform for making study of the word a much more blissful, interactive and life changing experience</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/teachings.svg" />
                <h1 className="px-10 font-bold mt-3 mb-3">Keep track of Daily/Weekly Topic(s).</h1>
                <h1 className="px-10 text-sm">We have great teachers of the word that work tirelessly to bring teachings to you, never to worry we wil provide reminder so you wont miss track of any of them</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/online_discussion.svg" />
                <h1 className="px-10 font-bold mt-3 mb-3">Online Community</h1>
                <h1 className="px-10 text-sm">Also feel free to like, dislike and comment on your fellow members posts, trust us you would love the social experience</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/word_for_the_day.svg" />
                <h1 className="px-10 font-bold mt-3 mb-3">Word for the day</h1>
                <h1 className="px-10 text-sm">How can we ever forget word for the day? Lol we also have a Bible section in your personal dashboard where you can read the bible.(*King James, NIV only supported for now)</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/audio.svg" />
                <h1 className="px-10 font-bold mt-3 mb-3">Access Past messages (Audio/Video)</h1>
                <h1 className="px-10 text-sm">Need to access / download our past messages , we have that covered we have a online streaming service and also a cloud where you can access those important recordings</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-96" src="/images/rocket.svg" />
                <h1 className="px-10 font-bold mt-3 mb-3">What are you waiting for?</h1>
                <h1 className="px-10 text-sm">What yoou previously read are just small pieces of the experience you have for you, create an account and get started now 😇</h1>
            </SwiperSlide>


            <div className="flex justify-between h-7">
                <div className="swiper-pagination px-10"></div>
                <div className="navigations-controls w-full">
                    <div className="swiper-button-prev" style={{
                        color: "red",
                        paddingRight: 20
                    }}></div>
                    <div className="swiper-button-next" style={{
                        color: "rosybrown",
                        paddingLeft: 20
                    }}></div>
                </div>
            </div>
        </Swiper>
    </div>
);

const SignupForm = () =>
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
                placeholder="Fullname "
                type="text"
                name="fullname"
                //   value={formState.fullname}
                containerClassName=" mb-6"
                inputClassName="w-full"
                onChange={handleChange}
                required
                min="Enter min of 2 chars"
                minLength={2}
                maxLength={20}
            //   errors={mutation.data?.registerUser.errors}
            />
            <InputField
                placeholder="Username"
                name="username"
                type="text"
                //   value={formState.username}
                onChange={handleChange}
                containerClassName=" mb-6"
                inputClassName="w-full"
                required
                minLength={5}
                maxLength={20}
            //   errors={mutation.data?.registerUser.errors}
            />
            <InputField
                placeholder="Enter email"
                name="email"
                type="email"
                //   value={formState.email}
                onChange={handleChange}
                containerClassName=" mb-6"
                inputClassName="w-full"
                required
            //   errors={mutation.data?.registerUser.errors}
            />
            {/* <PhoneNumberField
          containerClassName="mb-6"
          value={formState.phoneNumber}
          errors={mutation.data?.registerUser.errors}
          onChange={handlePhoneNumberChange}
        /> */}
            <InputField
                placeholder="Enter password"
                type="password"
                //   value={formState.password}
                name="password"
                onChange={handleChange}
                containerClassName=" mb-6"
                inputClassName="w-full"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                minLength={8}
                required
                //   errors={errors.concat(mutation.data?.registerUser?.errors)}
                postText="Min 8 chars, uppercase, lowercase, symbol and number"
            />
            <InputField
                placeholder="Confirm password"
                type="password"
                //   value={formState.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                containerClassName=" mb-6"
                inputClassName="w-full"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                minLength={8}
                required
                //   errors={mutation.data?.registerUser.errors}
                postText="Min 8 chars, uppercase, lowercase, symbol and number"
            />
            <Button
                isLoading={false}
                type="red"
                className="transition duration-500 transform hover:-translate-y-1 ease-in-out lg:bg-red-500 lg:p-3 lg:text-white w-full hover:bg-red-400">
                Create Account
      </Button>
        </form>
    );
};

export default Signup;