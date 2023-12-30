"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";

function SingIn() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (response.ok) {
      router.push("/dashboard");
      router.refresh(); 
    } else {
      setError(response.error);
    }
  })

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <form
        className="flex flex-col bg-gray-900 p-5 rounded-lg gap-5 w-1/4"
        onSubmit={onSubmit}
      >
        {error && (
          <span className="bg-red-500 text-xs p-2 rounded-lg">{error}</span>
        )}

        <h2 className="text-3xl font-semibold text-center">Sing in</h2>

        <label className="text-sm text-gray-400" htmlFor="email">Email:</label>
        <input
          className="border p-2 rounded-lg bg-transparent"
          type="email"
          placeholder='email'
          {...register("email", {
            required: {
              value: true,
              message: "Email is required"
            }
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">
            {errors.email.message}
          </span>
        )}

        <label className="text-sm text-gray-400" htmlFor="password">Password:</label>
        <input
          className="border p-2 rounded-lg bg-transparent"
          type="password"
          placeholder='password'
          {...register("password", {
            required: {
              value: true,
              message: "Password is required"
            }
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <button className="border p-2 rounded-lg" type="submit">Send</button>
      </form>
    </div>
  )
}

export default SingIn