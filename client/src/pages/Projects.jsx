import { Box } from "@chakra-ui/react";
import DesktopNavbar from "../components/desktop/DesktopNavbar";

export default function Projects() {
  return (
    <>
      <Box display={"flex"}>
        <DesktopNavbar />
        <Box w="95%" h="100vh" border={"1px solid red"}></Box>
      </Box>
    </>
  );
}
