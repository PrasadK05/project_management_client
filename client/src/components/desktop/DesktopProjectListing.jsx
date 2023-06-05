import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default function DesktopProjectListing() {
  let [search, setSearch] = useState("");
  let [show, setShow] = useState(true);

  let handleChange = (e) => {
    setSearch(e.target.value);
    if (search !== "") {
      setShow(false);
    }
  };

  let handleReset = () => {
    setSearch("");
    setShow(true);
  };

  return (
    <>
      <Box
        w={"95%"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        h="75vh"
        px="20px"
        py="20px"
        bg="#FFFFFF"
        borderRadius={"10px"}
        position="absolute"
        top={"130px"}
        left="40px"
      >
        <Box
          display={"flex"}
          w="100%"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <InputGroup>
              {show ? (
                <InputLeftElement>
                  <AiOutlineSearch size={"20px"} />
                </InputLeftElement>
              ) : (
                <InputRightElement onClick={handleReset}>
                  <RxCross2 size={"20px"} />
                </InputRightElement>
              )}

              <Input
                type="text"
                placeholder="Search"
                fontSize={"20px"}
                outline={"none"}
                border={"none"}
                borderBottom={"1px solid blue"}
                borderRadius={"0px"}
                onChange={handleChange}
                value={search}
              />
            </InputGroup>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <Box w="50%">
              <Text fontSize={"20px"}>Sort By:</Text>
            </Box>
            <Select>
              <option value="projectName">Project Name</option>
              <option value="priority">Priority</option>
              <option value="reason">Reason</option>
              <option value="type">Type</option>
              <option value="division">Division</option>
              <option value="category">Category</option>
              <option value="department">Department</option>
              <option value="location">Location</option>
              <option value="status">Status</option>
            </Select>
          </Box>
        </Box>
        <Box w="100%" mt="20px">
          <TableContainer>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <Table variant="simple">
                <Thead bg="#ebf5ff" position={"sticky"} top={0} zIndex={100}>
                  <Tr>
                    <Th w="700px">Project Name</Th>
                    <Th>Reason</Th>
                    <Th>Type</Th>
                    <Th>Division</Th>
                    <Th>Category</Th>
                    <Th>Priority</Th>
                    <Th>Dept.</Th>
                    <Th>Location</Th>
                    <Th>Status</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody></Tbody>
              </Table>
            </div>
          </TableContainer>
        </Box>
      </Box>
      <Box
        w="20%"
        border={"1px solid black"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
        bottom={"10px"}
        left={"45%"}
      >
        <Button borderRadius={"40%"}>
          <GrFormPrevious size={"20px"} />
        </Button>
        <Button borderRadius={"50%"}>1</Button>
        <Button borderRadius={"50%"}>2</Button>
        <Button borderRadius={"50%"}>3</Button>
        <Button borderRadius={"50%"}>4</Button>
        <Button borderRadius={"40%"}>
          <GrFormNext size={"20px"} />
        </Button>
      </Box>
    </>
  );
}
