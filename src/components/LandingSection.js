import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hitesh !";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='2xl' src="https://i.ibb.co/bLsVCw6/fotor-2023-2-26-10-28-39.png" />
  <Heading size="md">{greeting}</Heading>
  <VStack
  spacing={6}
  pt={10}
  > 
  <Heading size="2xl">{bio1}</Heading>
  <Heading size="2xl">{bio2}</Heading>
  </VStack> 
  </FullScreenSection>
);

export default LandingSection;
