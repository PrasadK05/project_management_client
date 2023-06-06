import { Box } from "@chakra-ui/react";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import DesktopHeader from "../components/desktop/DesktopHeader";
import AddProjectForm from "../components/desktop/AddProjectForm";
import MobileHeader from "../components/mobile/MobileHeader";
import MobileNavbar from "../components/mobile/MobileNavbar";
import MobileAddProjectForm from "../components/mobile/MobileAddProjectForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProj } from "../redux/project/project.action";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  let [load, setLoad] = useState(false);
  let [err, setErr] = useState(false);
  let { data } = useSelector((store) => store.auth);
  
  let navigate = useNavigate();

  let postData = (project) => {
    setLoad(true);
    addProj(data.token, project)
      .then((res) => {
        if (res) {
          setLoad(false);
          navigate("/projects");
        } else {
          alert("something went wrong");
          setErr(true);
          setLoad(false)
        }
      })
      .catch((err) => {
        alert(err);
        setErr(true);
        setLoad(false)
      });
  };

  return (
    <>
      <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
        <DesktopNavbar />
        <Box w="95%" h="100vh" position={"relative"} bg="#f0f3f6">
          <DesktopHeader title={"Create Project"} />
          <AddProjectForm postData={postData} load={load} err={err}/>
        </Box>
      </Box>
      <Box
        bg="#f0f3f6"
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      >
        <MobileHeader title={"Create Project"} />
        <MobileAddProjectForm postData={postData} load={load} err={err}/>
        <MobileNavbar />
      </Box>
    </>
  );
}
