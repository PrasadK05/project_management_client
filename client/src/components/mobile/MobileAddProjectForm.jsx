import {
  Box,
  Text,
  Textarea,
  Button,
  FormLabel,
  Input,
  Select,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";

let init = {
  projectName: "",
  location: "Pune",
  startDate: "",
  endData: "",
  priority: "High",
  reason: "Business",
  type: "Internal",
  division: "Pumps",
  category: "Quality A",
  department: "Strategy",
};

export default function MobileAddProjectForm({ postData, load }) {
  let [data, setData] = useState(init);
  let [error, setError] = useState(false);
  let [startErr, setStartErr] = useState(false);
  let [endErr, setEndtErr] = useState(false);
  // capturing changes
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // Optimized submit function with validations
  let handleClick = () => {
    if (
      data.projectName === "" ||
      data.startDate === "" ||
      data.endData === ""
    ) {
      setStartErr(data.startDate === "");
      setEndtErr(data.endData === "");
      setError(data.projectName === "");
      return;
    }

    setStartErr(false);
    setEndtErr(false);
    setError(false);

    let st = Date.parse(data.startDate);
    let en = Date.parse(data.endData);
    if (st > en) {
      alert("Start date should be less tha end date");
      return;
    }
    postData({ ...data, startDate: st, endDate: en });
    setData(init);
  };

  let {
    projectName,
    location,
    startDate,
    endData,
    priority,
    reason,
    type,
    division,
    category,
    department,
  } = data;
  return (
    <Box
      w="90%"
      m="auto"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      display={"flex"}
      flexDirection={"column"}
      gap="20px"
      py="20px"
      bg="#FFFFFF"
      px="10px"
      borderRadius={"15px"}
      mb="70px"
      mt="20px"
    >
      <Box>
        <Textarea
          placeholder="Enter Project Theme"
          resize={"none"}
          value={projectName}
          name="projectName"
          onChange={handleChange}
        />
        {error ? <Text color="red">Project Theme require</Text> : null}
      </Box>

      <Box>
        <FormLabel color={"#a4a4a4"}>Reason</FormLabel>
        <Select value={reason} onChange={handleChange} name="reason">
          <option value="Business">Business</option>
          <option value="Dealership">Dealership</option>
          <option value="Transport">Transport</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Type</FormLabel>
        <Select value={type} onChange={handleChange} name="type">
          <option value="Internal">Internal</option>
          <option value="External">External</option>
          <option value="Vendor">Vendor</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Division</FormLabel>
        <Select value={division} onChange={handleChange} name="division">
          <option value="Pumps">Pumps</option>
          <option value="Filters">Filters</option>
          <option value="Compressor">Compressor</option>
          <option value="Glass">Glass</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Category</FormLabel>
        <Select value={category} onChange={handleChange} name="category">
          <option value="Quality A">Quality A</option>
          <option value="Quality B">Quality B</option>
          <option value="Quality C">Quality C</option>
          <option value="Quality D">Quality D</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Priority</FormLabel>
        <Select value={priority} onChange={handleChange} name="priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Department</FormLabel>
        <Select value={department} onChange={handleChange} name="department">
          <option value="Strategy">Strategy</option>
          <option value="Finance">Finance</option>
          <option value="Quality">Quality</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Stores">Stores</option>
        </Select>
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Start Date as per Project Plan</FormLabel>
        <Input
          type="date"
          value={startDate}
          onChange={handleChange}
          name="startDate"
        />
        {startErr ? <Text color="red">Start Date required</Text> : null}
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Start Date as per Project Plan</FormLabel>
        <Input
          type="date"
          value={endData}
          onChange={handleChange}
          name="endData"
        />
        {endErr ? <Text color="red">End Date required</Text> : null}
      </Box>
      <Box>
        <FormLabel color={"#a4a4a4"}>Loacation</FormLabel>
        <Select value={location} onChange={handleChange} name="location">
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nashik">Nashik</option>
        </Select>
      </Box>

      <Box>
        <Text>Status: Registered</Text>
      </Box>
      <Button
        color={"#FFFFFF"}
        bg="#025aab"
        borderRadius={"30px"}
        px="30px"
        onClick={handleClick}
        isDisabled={load}
      >
        {load ? <Spinner size="sm" /> : "Save Project"}
      </Button>
    </Box>
  );
}
