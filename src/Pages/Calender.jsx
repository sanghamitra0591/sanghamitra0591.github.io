import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

function Calender() {
  const {darkTheme}= useContext(ThemeContext);
  return (
    <Box bg={darkTheme==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"} color={darkTheme==="dark"? "white" : "#13022C"} pb="60px">
        <Box w="80%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
            <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px"}}>
            <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Calender</Text>
            <GitHubCalendar
                username="sanghamitra0591"
                blockSize={15}
                blockMargin={5}
                color={darkTheme==="dark"? "#5e0adb" : "#13022C"}
                fontSize={15}
            />
            </Row>
        </Box>
    </Box>
  );
}

export default Calender;