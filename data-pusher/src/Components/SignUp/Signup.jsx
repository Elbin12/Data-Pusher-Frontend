import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import InputField from "../Login/InputField";
import PasswordField from "../Login/PasswordField";
import { signup } from "../../Features/Action"; 
import {toast} from 'sonner';

function Signup() {

  const dispatch= useDispatch();
  const success = useSelector(state=>state.user.success)
  const error = useSelector(state=>state.user.error)

  useEffect(()=>{
    if (success){
      console.log(success)
      toast('Sign Up successfully');
    }
    if (error){
      console.log(error, 'error')
    }
  }, [success, error])

  console.log(success, 'k', error, 'seeewewwe ')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    dispatch(signup(data));
  };

  const password = watch("password");

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center text-white">
      <div className="w-1/2 space-y-8">
        <h1 className="text-4xl">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <div>
              <InputField type="text" label="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <InputField type="email" label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <PasswordField label="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <PasswordField label="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <button type="submit" className="text-lg bg-violet-950 py-1 rounded w-1/3"> Sign Up </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
