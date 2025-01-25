import * as z from "zod"
import { CardWrap } from "./card-wrap"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { loginSchema } from "@/schemas"

import {
    Form ,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

const form =useForm<>()
export const LoginForm = () => {
    return (
        <CardWrap
            headerLabel ="Welcome back"
            backButtonLabel=" Register"
            backButtonHref="/auth/register"
            showSocial
        >
          login
        </CardWrap>
    )
}