"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function SingUp() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Password do not match");
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      router.push("/auth/signin");
    }
  })


  return (
    <div className="flex items-center justify-center h-[90vh]">
      <form
        className="flex flex-col bg-gray-900 p-5 rounded-lg gap-5 w-1/4"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl text-center font-semibold">Sing up</h2>

        <label className="text-sm text-gray-400" htmlFor="username">Username:</label>
        <input
          className="border p-2 rounded-lg bg-transparent"
          type="text"
          placeholder="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required"
            }
          })}
        />
        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

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

        <label className="text-sm text-gray-400" htmlFor="confirmPassword">Confirm password:</label>
        <input
          className="border p-2 rounded-lg bg-transparent"
          type="password"
          placeholder='confirm password'
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Please confirm your password"
            }
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}

        <button
          className="border p-2 rounded-lg" type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default SingUp