import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getProj, updateProj } from "../../redux/project/project.action";
import DesktopTableRow from "./DesktopTableRow";

export default function DesktopProjectListing() {
  let { projects, loading, error, total } = useSelector(
    (store) => store.projects
  );
  let { data } = useSelector((store) => store.auth);
  let dispatch = useDispatch();
  let [curr, setCurr] = useState(1);
  let [search, setSearch] = useState("");
  let [sort, setSort] = useState("projectName");
  let [show, setShow] = useState(true);

  let totalPages = Math.ceil(total / 10);
  // capturing changes in form data
  let handleChange = (e) => {
    setSearch(e.target.value);
    if (search.length !== 0) {
      setShow(false);
    }
  };
  // rest search value
  let handleReset = () => {
    setSearch("");
    setShow(true);
  };
  // capturing sort value
  let handleSort = (e) => {
    setSort(e.target.value);
  };
  // going to next page
  let nextPage = () => {
    setCurr((prev) => prev + 1);
  };
  // setting prev page
  let prevPage = () => {
    setCurr((prev) => prev - 1);
  };
  // updating status
  let updatStatus = (val, id) => {
    updateProj(data.token, { status: val }, id)
      .then((res) => {
        if (res) {
          dispatch(getProj(data, search, sort, curr));
        } else {
          alert("Error hile updating status");
        }
      })
      .catch((err) => {
        alert("Error hile updating status");
      });
  };
  // data basis on search, sort and page
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(getProj(data, search, sort, curr));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [search, sort, curr]);

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
                _focusVisible={{outline:"none",borderBottom: "1px solid blue",}}
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
            <Select onChange={handleSort}>
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
            <Box
              style={{ maxHeight: "500px", overflowY: "auto" }}
              css={{
                "&::-webkit-scrollbar": {
                  width: "0.4em",
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
              }}
            >
              <Table variant="simple" size={"sm"}>
                <Thead bg="#ebf5ff" position={"sticky"} top={0} zIndex={100}>
                  <Tr>
                    <Th>Project Name</Th>
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
                <Tbody>
                  {projects &&
                    projects.map((el, i) => {
                      return (
                        <DesktopTableRow
                          key={el._id}
                          id={el._id}
                          projectName={el.projectName}
                          location={el.location}
                          startDate={el.startDate}
                          endDate={el.endDate}
                          priority={el.priority}
                          reason={el.reason}
                          type={el.type}
                          division={el.division}
                          category={el.category}
                          department={el.department}
                          status={el.status}
                          updatStatus={updatStatus}
                        />
                      );
                    })}
                </Tbody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
        <Box
          w="100%"
          h="20%"
          display={loading ? "flex" : "none"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size={"md"} />
        </Box>
        <Box
          w="100%"
          h="20%"
          display={error ? "flex" : "none"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"red"}>Error while loading data</Text>
        </Box>
      </Box>
      <Box
        w="20%"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
        bottom={"10px"}
        left={"43%"}
      >
        <Button borderRadius={"40%"} isDisabled={curr === 1} onClick={prevPage}>
          <GrFormPrevious size={"20px"} color={"black"} bg="transparant" />
        </Button>
        <Button
          borderRadius={"50%"}
          onClick={() => setCurr(curr)}
          color={"#FFFFFF"}
          bg="#0cc9e8"
        >
          {curr}
        </Button>
        <Button
          borderRadius={"40%"}
          isDisabled={curr === totalPages}
          onClick={nextPage}
          color={"black"}
          bg="transparant"
        >
          <GrFormNext size={"20px"} color={"black"} bg="transparant" />
        </Button>
      </Box>
    </>
  );
}
