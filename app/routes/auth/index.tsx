import React, { FormEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authImage from "../../assets/images/auth-image.png";
import { login } from "../../redux/reducers/auth/authSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Login = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const emailInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const email = emailInputRef.current?.value;

    if (email) dispatch(login({ email }));
  };

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email]);

  return (
    <div className="flex w-100vw min-h-screen">
      <div className="flex items-center flex-1 px-10 py-4">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-between min-h-[400px] w-full"
        >
          <div className="text-center">
            <h1 className="text-3xl mb-4">ورود / ثبت نام</h1>
            <p className="font-bold">خوش اومدی!</p>
          </div>

          <div className="relative flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-xs text-gray-600">
              ایمیل خود را وارد کنید
            </label>
            <input
              ref={emailInputRef}
              name="email"
              type="email"
              className="py-3 px-4 border border-blue-600 w-full rounded-lg text-left !font-mono"
            />
          </div>

          <div className="w-full">
            <button className="w-full py-3 rounded-md bg-blue-600 text-white">
              ادامه
            </button>
          </div>
        </form>
      </div>

      <div className="w-[65%]">
        <img src={authImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
