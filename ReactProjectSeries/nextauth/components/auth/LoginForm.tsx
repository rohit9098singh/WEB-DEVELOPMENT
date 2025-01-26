"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrap } from "./card-wrap";
import { useTransition } from "react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas"; // Import your existing LoginSchema
import * as z from "zod"; // Assuming LoginSchema is a zod schema
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";

export const LoginForm = () => {
     const [error,setError]=useState<string | undefined>("")
     const [success,setSuccess]=useState<string | undefined>("")
    const [isPending,startTransition]=useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")
    startTransition(()=>{
        login(data)
        .then((data)=>{
            setError(data.error);
            setSuccess(data.success)
        })
    })
  };

  return (
    <CardWrap
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account? Register"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel >Email</FormLabel>
                <FormControl>
                  <input
                    disabled={isPending}
                    type="email"
                    placeholder="Enter your email"
                    className="input w-full border rounded p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Input */}
          <FormField
            name="Password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input
                   disabled={isPending}
                    type="password"
                    placeholder="Enter your password"
                    className="input w-full border rounded p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error}/>
          <FormSuccess message={success}/>
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full"
            disabled={isPending}
           >
            Login
          </Button>
        </form>
      </Form>
    </CardWrap>
  );
};
