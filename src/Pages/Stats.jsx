import { Box, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
const Stats = () => {
  
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    // streak 
    <Box bg={colorMode==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"}
    color={colorMode==="dark"? "white" : "#13022C"} p="30px 0px">
      <Text mb={["-10px", "15px", "30px"]} textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Stats</Text>
      <Box w={["80%", "80%", "60%"]} m="auto">
        <Link href="https://github.com/sanghamitra0591">
          <Image
            align="left"
            alt="img"
            h="200px"
            src={colorMode==="dark"?
            "https://github-readme-streak-stats.herokuapp.com?user=sanghamitra0591&theme=midnight-purple&date_format=M%20j%5B%2C%20Y%5D"
          : "https://github-readme-streak-stats.herokuapp.com?user=sanghamitra0591&theme=material-palenight&date_format=M%20j%5B%2C%20Y%5D"}
          />
        </Link>
      </Box>
 
      <Box w={["80%", "62%", "60%"]} display= "flex" m="auto" mt={["", "10px", "0px"]} gap="10px">
        <Link href="https://github.com/sanghamitra0591">  
          <Image
            align="center" h={["", "120px", "300px"]}
            alt="img"
            src={colorMode==="dark"?
            "https://github-readme-stats.vercel.app/api/top-langs/?username=sanghamitra0591&theme=midnight-purple":
            "https://github-readme-stats.vercel.app/api/top-langs/?username=sanghamitra0591&theme=material-palenight"}  //launguages
          />
        </Link>
        <Link href="https://github.com/sanghamitra0591">
          <Image
            align="left" h={["", "120px", "300px"]}
            alt="img"
            src={colorMode==="dark"?
              "https://github-readme-stats.vercel.app/api?username=sanghamitra0591&count_private=true&show_icons=true&theme=midnight-purple"
            :"https://github-readme-stats.vercel.app/api?username=sanghamitra0591&count_private=true&show_icons=true&theme=material-palenight"} //stats
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Stats;



// import React from "react";
// import styled from "styled-components";
// import "../App.css";
// const Stats = () => {
//   return (
//     // streak 
//     <div>
//       <div style={{ width: "40%", margin: "auto" }}>
//         <a href="https://github.com/saurabh0413">
//           <img
//             align="left"
//             src="https://github-readme-streak-stats.herokuapp.com/?user=saurabh0413"
//           />
//         </a>
//       </div>
 
//       <div
//         style={{
//           width: "60%",
//           height: "300px",
//           display: "flex",
//           margin: "auto",
//         }}
//       >
//         <a href="https://github.com/saurabh0413">  
//           <img
//             align="center"
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabh0413"  //launguages
//           />
//         </a>
//         <a href="https://github.com/saurabh0413">
//           <img
//             align="left"
//             src="https://github-readme-stats.vercel.app/api?username=saurabh0413&count_private=true&show_icons=true" //stats
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Stats;