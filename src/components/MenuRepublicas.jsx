import { Typography, MenuItem, Menu, Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { ListaRepublicas } from "../util/ListaRepublicas";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  width: "100%",
}));

function MenuRepublicas({ buttonText, sx, ButtonComponent, ...props }) {
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const ButtonToRender = ButtonComponent || Button;

  return (
    <>
      <ButtonToRender
        id="basic-button"
        sx={sx}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        {...props}
      >
        <Typography color="inherit" sx={{ fontFamily: "'Bohemian Soul', cursive" }}>{buttonText || "Hinos"}</Typography>
      </ButtonToRender>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {!!ListaRepublicas?.length &&
          ListaRepublicas?.map((rep, index) => {
            return (
              <StyledLink to={rep.rota} key={index}>
                <MenuItem onClick={handleClose}>
                  <Typography color="inherit">{rep.nome}</Typography>
                </MenuItem>
              </StyledLink>
            );
          })}
      </Menu>
    </>
  );
}

export default MenuRepublicas;
