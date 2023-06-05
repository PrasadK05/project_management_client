import { Box } from "@chakra-ui/react";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import { Route, Routes } from "react-router-dom";
import AddProject from "./AddProject";

export default function Home() {
  return (
    <>
      <Box display={"flex"}>
        <DesktopNavbar />
        <Box w="95%" h="100vh" border={"1px solid red"}>
          
        </Box>
      </Box>
    </>
  );
}
