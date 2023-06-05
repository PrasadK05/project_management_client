import { Box } from "@chakra-ui/react";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import DesktopHeader from "../components/desktop/DesktopHeader";
import AddProjectForm from "../components/desktop/AddProjectForm";
import MobileHeader from "../components/mobile/MobileHeader";
import MobileNavbar from "../components/mobile/MobileNavbar";
import MobileAddProjectForm from "../components/mobile/MobileAddProjectForm";

export default function AddProject() {
  return (
    <>
      <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
        <DesktopNavbar />
        <Box
          w="95%"
          h="100vh"          
          position={"relative"}
          bg="#f0f3f6"
        >
          <DesktopHeader title={"Create Project"} />
          <AddProjectForm />
        </Box>
      </Box>
      <Box
        bg="#f0f3f6"
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      >
        <MobileHeader title={"Create Project"} />
        <MobileAddProjectForm />
        <MobileNavbar />
      </Box>
    </>
  );
}
