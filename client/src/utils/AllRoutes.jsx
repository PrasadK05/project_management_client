import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AddProject from "../pages/AddProject";
import Projects from "../pages/Projects";

// Managing all available routes
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addProject" element={<AddProject />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}
