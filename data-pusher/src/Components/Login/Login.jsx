import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Features/Action";
import { toast } from "sonner";
import { reset } from "../../Features/Slice";

function Login() {

  const {success, error, pending} = useSelector(state=>state.user)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(error){
      console.log('error from login', error)
      toast.error(error.error)
    }
    if (success){
      console.log('successfully logined.')
      toast.success('Sign In successfull')
      dispatch(reset())
    }
  }, [success, error])

  console.log(success, error, 'kdkkdkjd')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(login(data));
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black text-white">
      <div className="w-1/2">
        <h1 className="text-2xl"> Sign In <span className="text-5xl font-semibold text-violet-900">to Data Pusher</span></h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mt-9 flex flex-col gap-3">
            <div>
              <InputField label="Username" type="text"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
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
          </div>

          <div className="bg-[#1b202e] w-fit text-xl py-2 px-9 rounded font-semibold flex items-center justify-center gap-2">
            {pending ? 
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>:
                  <button type="submit" >Sign In</button>
              }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
