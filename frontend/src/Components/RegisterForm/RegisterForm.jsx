import { useState } from "react";
import register from "../../services/register";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import validator from "./validator";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/actions";

export default function RegisterForm() {
  const [user, setUser] = useState({ email: "", password: "", repeat: "" });
  const [errors, setErrors] = useState({ email: "", password: "", repeat: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    const userCopy = { ...user };
    userCopy[e.target.name] = e.target.value;
    setUser({ ...userCopy });
    setErrors({ ...validator(userCopy) });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(user);
      toast.success(data.message);
      dispatch(saveUser(data.created.id));
      setUser({ email: "", password: "", repeat: "" });
      navigate(ROUTES.home);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const disabledButton =
    !user.email ||
    !user.password ||
    !user.repeat ||
    errors.email ||
    errors.password ||
    errors.repeat;

  return (
    <div className="w-4/5 mx-auto border-[2px] border-gray-600 py-12 rounded-[2px] mb-10">
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <div className="mx-auto flex flex-col relative">
          <label className="text-indigo-200">Email:</label>
          <input
            name="email"
            value={user.email}
            className="w-[30ch] rounded-[2px] px-2 py-[1px]"
            type="text"
            onChange={onChange}
          />
          <span className="text-sm text-rose-600 font-semibold absolute top-14">
            {errors.email}
          </span>
        </div>
        <div className="mx-auto flex flex-col relative">
          <label className="text-indigo-200">Password:</label>
          <input
            name="password"
            value={user.password}
            className="w-[30ch] rounded-[2px] px-2 py-[1px]"
            type="password"
            onChange={onChange}
          />
          <span className="text-sm text-rose-600 font-semibold absolute top-14">
            {errors.password}
          </span>
        </div>
        <div className="mx-auto flex flex-col relative">
          <label className="text-indigo-200">Repeat Password:</label>
          <input
            name="repeat"
            value={user.repeat}
            className="w-[30ch] rounded-[2px] px-2 py-[1px]"
            type="password"
            onChange={onChange}
          />
          <span className="text-sm text-rose-600 font-semibold absolute top-14">
            {errors.repeat}
          </span>
        </div>
        <button
          type="submit"
          disabled={disabledButton}
          className="mx-auto w-1/3 px-4 py-2 bg-orange-400 text-white rounded-[4px] disabled:opacity-50"
        >
          Register
        </button>
      </form>
      <div className="flex mt-2">
        <span
          className="text-indigo-100 font-thin mx-auto hover:cursor-pointer"
          onClick={() => navigate(ROUTES.login)}
        >
          already have a user? Login here.
        </span>
      </div>
    </div>
  );
}
