import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
const Stats = () => {
  
  const {darkTheme}= useContext(ThemeContext);
  return (
    // streak 
    <div>
      <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Stats</Text>
      <div style={{ width: "70%", margin: "auto" ,
      backgroundColor:(darkTheme==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"),
       color:darkTheme==="dark"? "white" : "#13022C"
     }}>
        <a href="https://github.com/sanghamitra0591" style={{backgroundColor:(darkTheme==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"),
       color:darkTheme==="dark"? "white" : "#13022C"}}>
          <Image
            align="left"
            alt="img"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sanghamitra0591"
          />
        </a>
      </div>
 
      <div
        style={{
          width: "70%",
          display: "flex",
          margin: "auto",
          marginTop: "10px",
          gap: "10px"
        }}
      >
        <a href="https://github.com/sanghamitra0591">  
          <Image
            align="center"
            alt="img"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanghamitra0591"  //launguages
          />
        </a>
        <a href="https://github.com/sanghamitra0591">
          <Image
            align="left"
            width="120%"
            alt="img"
            src="https://github-readme-stats.vercel.app/api?username=sanghamitra0591&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;