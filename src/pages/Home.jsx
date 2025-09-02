import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import backgroundImage from "../images/background.jpg";

const StyledHeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh", // Fill the available height from the parent Box
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${backgroundImage}) no-repeat center center`, // Set background image
  backgroundSize: "cover", // Cover the entire section
  color: "white",
  textAlign: "center",
}));

function Home() {
  return (
    <StyledHeroSection>
    </StyledHeroSection>
  );
}

export default Home;
