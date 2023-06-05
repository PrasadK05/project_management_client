import { Box } from "@chakra-ui/react";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import DesktopHeader from "../components/desktop/DesktopHeader";
import DesktopProjectListing from "../components/desktop/DesktopProjectListing";

export default function Projects() {
  return (
    <>
      <Box display={"flex"}>
        <DesktopNavbar />
        <Box w="95%" h="100vh" border={"1px solid red"} position={"relative"}>
          <DesktopHeader title={"Project Listing"}/>
          <DesktopProjectListing/>

        </Box>
      </Box>
    </>
  );
}
