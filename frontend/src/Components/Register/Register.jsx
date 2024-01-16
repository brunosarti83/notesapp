import Hero from "../Hero/Hero";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col gap-4">
      <Hero section={"Register"} />
      <RegisterForm />
    </div>
  );
}
