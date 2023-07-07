import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react";
import { StyledInput } from "./style";
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    helper?: string;
    password?: boolean;
}

export const Input = forwardRef(({helper, password, ...rest}: IInputProps, ref:ForwardedRef<HTMLInputElement>) => {

    const [isHidden, setIsHidden] = useState(true)
    return (
        <StyledInput>
            <div>
                <input type={password ? (isHidden ? "password" : "text") : rest.type} ref={ref} {...rest} />
                {password ? (
                    isHidden ? (
                        <FaRegEyeSlash size={19} color={"#00000050"} onClick={() => setIsHidden(false)} />
                    ) : (
                        <FaRegEye size={19} color={"#00000050"} onClick={() => setIsHidden(true)} />
                    )
                ) : null}
            </div>
            { helper ? <span>{helper}</span> : null}
        </StyledInput>
    )
})