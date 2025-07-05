import { Box, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import "../App.css";
const Stats = () => {
  
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode==="light"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"}
    color={colorMode==="light"? "white" : "#13022C"} p="30px 0px">
      <Text mb={["-10px", "15px", "30px"]} textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Stats</Text>
      <Box w={["80%", "80%", "60%"]} m="auto">
        <Link href="https://github.com/sanghamitra0591">
          <Image
            id="github-streak-stats"
            align="left"
            alt="img"
            h="200px"
            src={colorMode==="light"?
            "https://github-readme-streak-stats.herokuapp.com?user=sanghamitra0591&theme=midnight-purple&date_format=M%20j%5B%2C%20Y%5D"
          : "https://github-readme-streak-stats.herokuapp.com?user=sanghamitra0591&theme=material-palenight&date_format=M%20j%5B%2C%20Y%5D"}
          />
        </Link>
      </Box>
 
      <Box w={["60%", "62%", "60%"]} display= "flex" flexDirection={["column", "column", "row"]} alignIttem="center" justifyContent="center" m="auto" mt={["0px", "20px", "0px"]} gap={["0px", "30px", "30px"]}>
        <Link href="https://github.com/sanghamitra0591">  
          <Image
            id="github-top-langs"
            align="center" h={["130px", "140px", "300px"]}
            alt="img"
            src={colorMode==="light"?
            "https://github-readme-stats.vercel.app/api/top-langs/?username=sanghamitra0591&theme=midnight-purple":
            "https://github-readme-stats.vercel.app/api/top-langs/?username=sanghamitra0591&theme=material-palenight"}  //launguages
          />
        </Link>
        <Link href="https://github.com/sanghamitra0591">
          <Image
            id="github-stats-card"
            align="center" h={["140px", "140px", "300px"]}
            alt="img"
            src={colorMode==="light"?
              "https://github-readme-stats.vercel.app/api?username=sanghamitra0591&count_private=true&show_icons=true&theme=midnight-purple"
            :"https://github-readme-stats.vercel.app/api?username=sanghamitra0591&count_private=true&show_icons=true&theme=material-palenight"} //stats
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Stats;