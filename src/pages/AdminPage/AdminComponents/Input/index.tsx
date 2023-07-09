import { ForwardedRef, forwardRef ,InputHTMLAttributes } from "react";
import { StyledInputAdmin } from "./styles";
 
interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    error: any;  
    
}

export const Input = forwardRef(
    ({ error, ...rest} : IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        return(
            <StyledInputAdmin>
                <input ref={ref} type="text" {...rest} />
                {error ? <p>{error.message}</p> : null}
            </StyledInputAdmin>
        )
    }
)