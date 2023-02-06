import { Box, Button, Image, Text, useColorMode } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { useContext } from "react";
import {ThemeContext} from "../ThemeContext/ThemeContextProvider";
import tripadvisor from "../Images/Tripadvisor.png";
import googledigitalgarage from "../Images/google-digital-garage.PNG";
import meanbuy from "../Images/meanbuy.PNG";
import albummaker from "../Images/album-maker.PNG";
import recipeapp from "../Images/mealdb.PNG";
import nordstorm from "../Images/nordstorm.png";


function Project(){

    let projectdata= [
        {
            id: 1,
            name: "Trip Advisor Clone",
            img: tripadvisor,
            type: "Individual",
            desc: "A travel website, where user can login, signup, plan their trips, book flight, book hotels, wishlist the trips, view nearby restaurants, search by location etc.",
            techstack: "React, Chakra UI, JavaScript, CSS",
            livelink: "https://tripadvisor-clone1.vercel.app/",
            gitlink: "https://github.com/sanghamitra0591/low-head-7683/tree/main/tripadvisor"
        },
        {
            id: 2,
            name: "Nordstorm Clone",
            img: nordstorm,
            type: "Group",
            techstack: "React, Chakra UI, JavaScript, Bootstrap",
            desc: "An E-Commerce website where user can login, signup, view products, use filter and sort, add products to cart and place order after payment",
            livelink: "https://makeshift-thread-5916-sankalp2009.vercel.app/",
            gitlink: "https://github.com/yadavsankt24/makeshift-thread-5916"
        },
        {
            id: 3,
            name: "Meanbuy Clone",
            img: meanbuy,
            type: "Individual",
            desc: "An E-Commerce website having the unique feature which allows the users to sell their products as well. User can Login, Signup, Visit Seller's Page, Whatsapp Page, view products, add products to the cart etc.",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://meanbuy-clone-theta.vercel.app/",
            gitlink: "https://github.com/sanghamitra0591/murky-rate-2238"
        },
        {
            id: 4,
            name: "Google digital Garage Clone",
            img: googledigitalgarage,
            type: "Group",
            desc: "A digital learing platform by Google, where user can signin, login, check for courses, certification, live training, etc.",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://google-digital-garage-clone.vercel.app/",
            gitlink: "https://github.com/imrangadwal10/zonked-instrument-5361"
        },
        {
            id: 5,
            name: "Slideshow Maker",
            img: albummaker,
            type: "Individual",
            techstack: "HTML, CSS, JavaScript",
            desc: "An Album maker app where user can add photos and make slideshow using those, find random photos by clicking on Game mode",
            livelink: "https://slideshow-maker.vercel.app/",
            gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/album-maker"
        },
        {
            id: 6,
            name: "Recipe App",
            img: recipeapp,
            type: "Individual",
            techstack: "HTML, CSS, JavaScript",
            desc: "An app which provides various recipies to user by searching, also have random recipies and recipe of the day",
            livelink: "https://receipe.vercel.app/",
            gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/food-app-II"
        }
    ]

    
    const { toggleColorMode, colorMode } = useColorMode();


    return <Box id="Project" w="full" bg={colorMode==="dark"? "#13022C" : "#d3cedb"} color={colorMode==="dark"? "#d3cedb" : "#13022C"} p="30px 0px" textAlign="center" pt={["40px", "60px", "80px"]}>
        <Box w="85%" m="auto">
            <Text mb="25px" color={colorMode==="dark"? "white" : "#13022C"} textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
            <Box display="grid" gap="30px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                {projectdata && projectdata.map((project)=> {
                    return <Box key={project.id} className={colorMode==="dark"?"projectouter": "projectouterlight"}>
                                <Box>
                                    <Image w="100%" src={project.img} alt="project-thumbnail" />
                                    <Box w="100%">
                                        <Text fontSize={["xl", "2xl", "2xl"]}>{project.name}</Text>
                                        <Text fontSize={["lg", "xl", "xl"]}>( {project.type} )</Text>
                                        <Text fontSize={["xs", "sm", "md"]}>{project.desc}</Text>
                                        <Text fontSize={["sm", "md", "lg"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
                                        <Box display="flex" w={["100%", "100%", "100%"]} m="auto" justifyContent="space-around">
                                            {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                                            <Button as='a' target='_blank' href={project.livelink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "5px 5px", "10px 10px"]} fontSize={["sm", "sm", "md"]} bg={colorMode==="dark"? "#C1B6DB" : "#251942"} color={colorMode==="dark"? "#13022c" : "white"} border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                            <Button as='a' target='_blank' href={project.gitlink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "5px 5px", "10px 10px"]} fontSize={["sm", "sm", "md"]} bg={colorMode==="dark"? "#C1B6DB" : "#251942"} color={colorMode==="dark"? "#13022c" : "white"} border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                })}
            </Box>
        </Box>
    </Box>


    // return <Box id="Project" w="full" bg={colorMode==="dark"? "#13022C" : "#d3cedb"} color={colorMode==="dark"? "#d3cedb" : "#13022C"} p="30px 0px" textAlign="center" pt={["40px", "60px", "80px"]}>
    //     <Box w="85%" m="auto">
    //         <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
    //         <Box display="grid" gap="50px" gridTemplateColumns= "repeat(1, 1fr)">
    //             {projectdata && projectdata.map((project)=> {
    //                 return <Box className={colorMode==="dark"?"projectouter": "projectouterlight"}>
    //                             <Box display={["inline", "inline", "flex"]} justifyContent="space-between">
    //                                 <Image w={["100%", "97%", "60%"]} m="auto" src={project.img} alt="project-thumbnail" />
    //                                 <Box w={["100%", "97%", "39%"]} m="auto">
    //                                     <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
    //                                     <Text fontSize={["xl", "2xl", "3xl"]}>( {project.type} )</Text>
    //                                     <Text w={["100%", "90%", "70%"]} m="auto" fontSize={["sm", "md", "md"]}>{project.desc}</Text>
    //                                     <Text w="85%" m="auto" fontSize={["md", "mlgd", "xl"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
    //                                     <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
    //                                         {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
    //                                         <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
    //                                         <Button as='a' target='_blank' href={project.livelink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg={colorMode==="dark"? "#C1B6DB" : "#251942"} color={colorMode==="dark"? "#13022c" : "white"} border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
    //                                         <Button as='a' target='_blank' href={project.gitlink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg={colorMode==="dark"? "#C1B6DB" : "#251942"} color={colorMode==="dark"? "#13022c" : "white"} border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
    //                                     </Box>
    //                                 </Box>
    //                             </Box>
    //                         </Box>
    //             })}
    //         </Box>
    //     </Box>
    // </Box>
}

export default Project;