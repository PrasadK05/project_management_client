import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

let init = {
  email: "",
  password: "",
};

export default function DesktopLoginForm({ loginFunction, loading, err }) {
  let [passErr, setPassErr] = useState(false);
  let [mailErr, setMailErr] = useState(false);
  let [data, setData] = useState(init);
  let { email, password } = data;

  // capturring changes in form
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    // setError(false);
    setMailErr(false);
    setPassErr(false);
  };

  //Submitting login form with validation
  let handleClick = (e) => {
    e.preventDefault();

    if (data.email === "" && data.password === "") {
      setMailErr(true);
      setPassErr(true);
      return;
    }

    if (data.email === "") {
      setMailErr(true);
      return;
    }

    if (data.password === "") {
      setPassErr(true);
      return;
    }

    loginFunction(data);
    setData(init);
  };
  return (
    <Box
      position={"absolute"}
      w="28%"
      top={"20%"}
      left={"39%"}
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap="10px"
        py="20px"
      >
        <Image src="/assets/Logo.svg" alt="error" />
        <Text color={"#FFFFFF"}>Online Project Management</Text>
      </Box>

      <Box
        px={"30px"}
        py="50px"
        bg="#FFFFFF"
        borderRadius={"10px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"2xl"}>Login to get started</Text>
        </Box>
        <form onSubmit={handleClick}>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"} mt="40px">
            <FormControl isInvalid={mailErr}>
              <FormLabel color={"grey"}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {mailErr ? (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={passErr}>
              <FormLabel color={"grey"}>Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  colorScheme="gery"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <InputRightElement>
                  <Image src="/assets/hide-password.svg" alt="error" />
                </InputRightElement>
              </InputGroup>
              <Box
                display={"flex"}
                justifyContent={passErr ? "space-between" : "right"}
              >
                {passErr ? (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                ) : null}
                <FormHelperText color={"#367cbd"} fontWeight={"bold"}>
                  Forgot password?
                </FormHelperText>
              </Box>
            </FormControl>
            <Button
              type="submit"
              size={"md"}
              width={"50%"}
              m="auto"
              borderRadius={"20px"}
              color={"#FFFFFF"}
              bg="#035fb2"
              isDisabled={loading}
            >
              {loading ? <Spinner size="sm" color={"blue.500"} /> : "Login"}
            </Button>
          </Box>
        </form>
      </Box>
      <Box display={err ? "flex" : "none"} justifyContent={"center"} py="20px">
        <Text color={"red"}>Invalid credentials</Text>
      </Box>
    </Box>
  );
}
