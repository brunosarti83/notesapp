import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./helpers/routes";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Home/Home";
import Column from "./Components/Column/Column";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex font-vietnam">
      <Column>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path={ROUTES.login} element={<Login />}></Route>
          <Route path={ROUTES.register} element={<Register />}></Route>
          <Route path={ROUTES.home} element={<Home />}></Route>
        </Routes>
      </Column>
    </div>
  );
}

export default App;
