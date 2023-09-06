'use client';

import { ButtonInputs } from "@/types";
import Image from "next/image";
const Button = ({title, clickHandle, containerStyles, textStyles, rightIcon, type = 'button'}: ButtonInputs) => {
    return ( 
        <button
            type={type}
            className={`relative custom-btn rounded-full ${containerStyles}`}
            onClick={clickHandle}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && <span><Image src={rightIcon} width={24} height={24} alt="button icon" className="object-contain right-2"/></span>}
        </button>
     );
}
 
export default Button;