import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import ReactTooltip from "react-tooltip";

function Calender() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode==="light"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"} color={colorMode==="light"? "white" : "#13022C"} pb="60px">
        <Box w="80%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
            <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px"}}>
            <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["2xl", "4xl", "5xl"]}>My Github Calender</Text>
            <GitHubCalendar
                username="sanghamitra0591"
                blockSize={15}
                blockMargin={5}
                color={colorMode==="light"? "#5e0adb" : "#13022C"}
                fontSize={13}
            >
            <ReactTooltip delayShow={10} html />
            </GitHubCalendar>
            </Row>
        </Box>
    </Box>
  );
}

export default Calender;