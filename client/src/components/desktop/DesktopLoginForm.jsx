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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function DesktopLoginForm() {
  let [error, setError] = useState(false);
  return (
    <Box
      position={"absolute"}
      w="28%"
      top={"20%"}
      left={"39%"}   
      display={{base:"none", sm:"none", md:"block", lg:"block"}}      
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap="10px"
        py="20px"
      >
        <Image src="/assets/Logo.svg" />
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
        <form>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"} mt="40px">
            <FormControl isInvalid={error}>
              <FormLabel color={"grey"}>Email</FormLabel>
              <Input type="email"  />
              {error ? (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel  color={"grey"}>Password</FormLabel>
              <InputGroup>
                <Input type="password" colorScheme="gery" />
                <InputRightElement>
                  <Image src="/assets/hide-password.svg" />
                </InputRightElement>
              </InputGroup>
              <Box
                display={"flex"}
                justifyContent={error ? "space-between" : "right"}
              >
                {error ? (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
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
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
      <Box display={"flex"} justifyContent={"center"} py="20px">
        <Text color={"red"}>Invalid credentials</Text>
      </Box>
    </Box>
  );
}
