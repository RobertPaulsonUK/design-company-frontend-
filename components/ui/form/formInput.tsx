import {FC} from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {FormData} from "@/components/modal/requestModal";
import InputLabel from "@/components/ui/form/inputLabel";
import FormInputError from "@/components/ui/form/formInputError";

interface Props {
    type : string
    name : string
    register :UseFormRegister<FormData>
    errors : FieldErrors
    inputId : string
    requiredMessage? : string
    label? : string
    classes? : string
    placeholder? : string
}
const FormInput:FC<Props> = (
    {
        type,
        name,
        register,
        errors,
        inputId,
        requiredMessage,
        label,
        classes,
        placeholder
    }
) => {
    return(
        <div className="mt-[20px]">
            {label && <InputLabel title={label} inputId={inputId}/>}
            <input className={`p-[10px] rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-black focus:text-black shadow_mod ${classes ?? ''}`}
                   placeholder={placeholder ?? ''}
                   id={inputId}
                   type={type}
                   {...register(
                       name,{
                           required : requiredMessage ?? '',
                       }
                   )}
            />
            {errors[name] && (
                <FormInputError text={errors[name]?.message as string} />
            )}
        </div>
    )
}
export default FormInput