import {z} from "zod";

export const formLoginSchema = z.object({
    email: z.string().min(1,"O E-mail é obrigatório").email("Forneca um email valido"),
    password: z.string().min(1, "A senha é obrigatório."),
})

export type TFormLoginValues = z.infer<typeof formLoginSchema>;