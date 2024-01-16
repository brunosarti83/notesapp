import { useEffect } from "react";
import Hero from "../Hero/Hero";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";

export default function Login() {
  const userId = useSelector((state) => state.userId); // this should read localStorage
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate(ROUTES.home);
    }
  }, [userId]);

  return (
    <div className="flex flex-col gap-4">
      <Hero section={"Login"} />
      <LoginForm />
    </div>
  );
}
