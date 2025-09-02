import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuRepublicas from "./MenuRepublicas";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgb(16, 1, 28)", // Adjust to your theme color
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
  fontSize: "1rem",
  margin: theme.spacing(0, 1),
  fontFamily: "'Bohemian Soul', cursive",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none", // Remove underline on hover
  },
}));

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Bohemian Soul", cursor: "pointer" }}>
          <StyledLink to="/">Feitiço</StyledLink>
        </Typography>
        <Box>
          <StyledLink to="parede">
            <StyledButton color="inherit">Ex-alunas</StyledButton>
          </StyledLink>
          <StyledLink to="parede-homenageados">
            <StyledButton color="inherit">Homenageados</StyledButton>
          </StyledLink>
          <StyledLink to="moradoras">
            <StyledButton color="inherit">Moradoras</StyledButton>
          </StyledLink>
          <MenuRepublicas 
            buttonText="Hinos" 
            ButtonComponent={StyledButton} 
            sx={{
              textTransform: "none", 
              fontSize: "1rem", 
              margin: "0 8px", 
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                textDecoration: "none"
              }
            }}
          />
          <StyledLink to="quiz">
            <StyledButton color="inherit">Quiz</StyledButton>
          </StyledLink>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
