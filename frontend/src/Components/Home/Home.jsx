import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateNote from "../CreateNote/CreateNote";
import Hero from "../Hero/Hero";
import Notes from "../Notes/Notes";
import { ROUTES } from "../../helpers/routes";
import { useEffect } from "react";
import Filter from "../Filter/Filter";

export default function Home() {
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate(ROUTES.login);
    }
  }, [userId]);

  return (
    <div>
      <Hero section={"Home"} />
      <Filter />
      <CreateNote />
      <Notes />
    </div>
  );
}
