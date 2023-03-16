import { Box, Icon, Text } from "@chakra-ui/react";
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiRedux, SiMaterialui, SiCypress, SiNpm, SiNetlify, SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import "./Page.css";


function Skills(){

    const allskills=[
        {
            text: "HTML",
            iconas: ImHtmlFive2,
        },
        {
            text: "CSS",
            iconas: RiCss3Fill,
        },
        {
            text: "JavaScript",
            iconas: TbBrandJavascript,
        },
        {
            text: "React",
            iconas: RiReactjsFill,
        },
        {
            text: "Chakra UI",
            iconas: SiChakraui,
        },
        {
            text: "Material UI",
            iconas: SiMaterialui,
        },
        {
            text: "Redux",
            iconas: SiRedux,
        },
        {
            text: "MongoDB",
            iconas: SiMongodb,
        },
        {
            text: "Node JS",
            iconas: FaNode,
        },
        {
            text: "Cypress",
            iconas: SiCypress,
        },
        {
            text: "Express JS",
            iconas: SiExpress,
        },
        {
            text: "Git",
            iconas: FaGitAlt,
        },
        {
            text: "NPM",
            iconas: SiNpm,
        },
        {
            text: "Netlify",
            iconas: SiNetlify,
        },
        {
            text: "VS Code",
            iconas: SiVisualstudiocode,
        }
    ]

return <Box id="Skills" w="full" bg="#13022C" color="#ffffff" p="30px 0px" mt="-2px" pt="100px">
        <Box w="85%" m="auto">
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills</Text>
            <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                {allskills && allskills.map((el)=>{
                    return <Box className="skillouter" p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                    <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color='white' />
                                    <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                </Box>
                            </Box>
                })}
            </Box>
        </Box>
    </Box>
}

export default Skills;