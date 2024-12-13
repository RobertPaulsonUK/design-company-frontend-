"use client"
import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import FormInput from "@/components/ui/form/formInput";
import CloseModal from "@/components/ui/closeModal";
import SuccessMessage from "@/components/ui/form/successMessage";
export interface FormData {
    name : string
    secondName : string
    email : string
}
const RequestModal:FC<{closeHandler : () => void}> = ({closeHandler}) => {
    const {register,handleSubmit,formState: { errors },watch,reset} = useForm()
    const [success,setSuccess] = useState<boolean>(false)
    const onFormSubmit:SubmitHandler<FormData> = async (data) => {
        setSuccess(true)
    }

    return(
        <div className={"fixed z-[1000] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] " +
            "px-[25px] py-[40px] bg-white " +
            "max-w-[600px] w-full rounded-lg"}>
            <CloseModal clickHandler={closeHandler}/>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="text-center text-3xl">
                    Contact us
                </div>
                <FormInput type={"text"}
                           name={'name'}
                           register={register}
                           errors={errors}
                           inputId={'form-name'}
                           requiredMessage={'Please enter your name'}
                           label={'Name'}
                           placeholder={'Aleks'}/>
                <FormInput type={"text"}
                           name={'secondName'}
                           register={register}
                           errors={errors}
                           inputId={'form-second-name'}
                           requiredMessage={'Please enter your second name'}
                           label={'Second Name'}
                           placeholder={'Alekseev'}/>
                <FormInput type={"email"}
                           name={'email'}
                           register={register}
                           errors={errors}
                           inputId={'form-email'}
                           requiredMessage={'Please enter your email'}
                           label={'Email'}
                           placeholder={'name@mail.com'}/>
                <button type={"submit"} className={"block mt-[20px] mx-auto" +
                    " py-[12px] px-[35px] bg-[#0B0E17] text-white rounded"}>
                    Send
                </button>
                {success && <SuccessMessage/>}
            </form>
        </div>
    )
}
export default RequestModal