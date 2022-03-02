import { Grid, Typography, MenuItem, Menu, Button } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ListaRepublicas } from "../util/ListaRepublicas";

function MenuRepublicas() {
  const classes = useStyles();
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

  return (
    <>
      <Button
        id="basic-button"
        sx={{ color: "rgb(107, 62, 149)" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography>hinos</Typography>
      </Button>
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
          ListaRepublicas?.map((rep) => {
            return (
              <MenuItem onClick={() => handleClose}>
                <Link className={classes.menuitem} to={rep.rota}>
                  <Typography>{rep.nome}</Typography>
                </Link>
              </MenuItem>
            );
          })}
      </Menu>
    </>
  );
}

const useStyles = makeStyles(() => ({
  menuitem: {
    color: "rgb(107, 62, 149)",
    textDecoration: "none",
  },
}));

export default MenuRepublicas;
