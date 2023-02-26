import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 return (
 <HStack>

  <VStack
  bg="white"
  borderRadius="lg"
  >
  <Image src={imageSrc} borderRadius="lg" />
    
    <VStack
    textAlign={"left"}
    alignItems="flex-start"
    px={4}
    pr={16}
    pb={4}
    >
    <Heading size="md" py={2} color="black">{title}</Heading>
    <Text color="gray">{description}</Text>
    <Text fontWeight="medium" pt={2} color={"black"}>See more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>
  
  </VStack>

 </HStack>

 );
  
};

export default Card;
