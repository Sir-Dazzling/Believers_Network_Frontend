import React, { ChangeEvent, InputHTMLAttributes } from "react";
// import PhoneInput from "react-phone-input-2";
// import { FieldError } from "../../graphql/generated/graphql";

interface Props extends InputHTMLAttributes<HTMLInputElement>
{
    //   errors?: FieldError[];
    errors?: any;
    inputClassName: string;
    containerClassName: string;
    name: string;
    postText?: string;
}

const InputField: React.FC<Props> = ({
    containerClassName,
    inputClassName,
    errors = [],
    postText,
    ...props
}) =>
{
    const error = errors.find((error) => error?.field === props.name)?.message;
    return (
        <div className={containerClassName}>
            <input
                className={`${error && "ring-4 ring-red-500 ring-opacity-40"
                    } p-4 lg:p-2 outline-none focus:border-green-normal focus:outline-none focus:ring-4 focus:ring-opacity-30 focus:ring-green-normal bg-green-light text-black placeholder-gray-500  border lg:border-gray-400  lg:bg-white lg:text-black lg:placeholder-black  border-gray-300 rounded-lg ${inputClassName}`}
                {...props}
            />
            {postText && (
                <p className="lg:text-gray-500 mt-1 text-xs text-center text-black">
                    {postText}
                </p>
            )}
            {error && (
                <p className="mt-1 text-xs font-semibold tracking-wider text-center text-red-900">
                    {error}
                </p>
            )}
        </div>
    );
};

// export const PhoneNumberField = ({
//   value,
//   errors = [],
//   onChange,
//   containerClassName,
// }: {
//   errors: FieldError[];
//   containerClassName: string;
//   [key: string]: any;
// }) => {
//   const error = errors.find((error) => error.field === "phoneNumber")?.message;

//   return (
//     <div className={containerClassName}>
//       <PhoneInput
//         enableSearch={true}
//         buttonClass="px-3 border-0 rounder-none"
//         containerClass="rounded-md w-full focus:ring-4 focus:outline-none"
//         inputClass="w-full placeholder-white border lg:placehold-black font-sans border-white lg:border-gray-400 p-4 lg:p-2 pl-3 text-white lg:text-black focus:border-green-normal focus:ring-green-normal focus:ring-opacity-30 focus:border-transparent focus:ring-4 lg:bg-white boder-0 rounded-md bg-green-light"
//         country={"ng"}
//         jumpCursorToEnd={false}
//         value={value}
//         placeholder="Phone number"
//         onChange={onChange}
//         countryCodeEditable={false}
//       />
//       {error && (
//         <p className=" mt-1 text-xs font-semibold tracking-wider text-center text-red-900">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

export default InputField;
