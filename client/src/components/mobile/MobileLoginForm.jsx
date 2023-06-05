import React, { useState } from "react";
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

export default function MobileLoginForm() {
  let [error, setError] = useState(false);
  return (
    <>
      <Box w="100%" px={"20px"} py="20px" bg="#FFFFFF" mt="30px">
        <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
          <Text fontSize={"2xl"}>Login to get started</Text>
        </Box>
        <form>
          <Box display={"flex"} flexDirection={"column"} gap={"12px"} mt="40px">
            <FormControl isInvalid={error}>
              <FormLabel color={"grey"}>Email</FormLabel>
              <Input type="email" />
              {error ? (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={error}>
              <FormLabel color={"grey"}>Password</FormLabel>
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
            <Box display={"flex"} justifyContent={"left"}>
              <Text color={"red"}>Invalid credentials</Text>
            </Box>
            <Button
              type="submit"
              size={"md"}
              borderRadius={"20px"}
              color={"#FFFFFF"}
              bg="#035fb2"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
