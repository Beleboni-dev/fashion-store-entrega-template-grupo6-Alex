import { ForwardedRef, forwardRef ,InputHTMLAttributes } from "react";
import { StyledTextAreaAdmin} from "./styles";
 
interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    error: any;  
    
}

export const TextArea = forwardRef(
    ({ error, ...rest} : IInputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
        return(
            <StyledTextAreaAdmin>
                <textarea ref={ref} type="text" {...rest} />
                {error ? <p>{error.message}</p> : null}
            </StyledTextAreaAdmin>
        )
    }
)