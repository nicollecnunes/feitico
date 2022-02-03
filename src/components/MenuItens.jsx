import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, MenuItem, Menu, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MenuItens() {
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

  const reps = [
    {
      id: 0,
      nome: "Feitiço",
      rota: "/hinos/feitico",
      hino: "...",
    },
    {
      id: 1,
      nome: "Acrópole",
      rota: "/hinos/acropole",
      hino: "...",
    },
    {
      id: 2,

      nome: "Arca de Noé",
      rota: "/hinos/arca",
      hino: "...",
    },
    {
      id: 3,
      nome: "Bico Doce",
      rota: "/hinos/bico-doce",
      hino: "...",
    },
    {
      id: 4,
      nome: "Birinaite",
      rota: "/hinos/birinaite",
      hino: "...",
    },
    {
      id: 5,
      nome: "Canaan",
      rota: "/hinos/canaan",
      hino: "...",
    },
    {
      id: 6,
      nome: "Castelo dos Nobres",
      rota: "/hinos/castelo",
      hino: "...",
    },
    {
      id: 7,
      nome: "Deuses",
      rota: "/hinos/deuses",
      hino: "...",
    },
    {
      id: 8,
      nome: "Harém",
      rota: "/hinos/harem",
      hino: "...",
    },
    {
      id: 9,
      nome: "Hospício",
      rota: "/hinos/hospicio",
      hino: "...",
    },
    {
      id: 10,
      nome: "Jardim de Alah",
      rota: "/hinos/jardim",
      hino: "...",
    },
    {
      id: 11,
      nome: "Patotinha",
      rota: "/hinos/patotinha",
      hino: "...",
    },
    {
      id: 12,
      nome: "Poleiro dos Anjos",
      rota: "/hinos/poleiro",
      hino: "...",
    },
    {
      id: 13,
      nome: "Pureza",
      rota: "/hinos/pureza",
      hino: "...",
    },
    {
      id: 14,
      nome: "Querubim",
      rota: "/hinos/querubim",
      hino: "...",
    },
    {
      id: 15,
      nome: "Reino de Baco",
      rota: "/hinos/reino",
      hino: "...",
    },
    {
      id: 16,
      nome: "Santuário",
      rota: "/hinos/santuario",
      hino: "...",
    },
    {
      id: 17,
      nome: "Vaticano",
      rota: "/hinos/vaticano",
      hino: "...",
    },
  ];

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
        {!!reps?.length &&
          reps?.map((rep) => {
            return (
              <MenuItem onClick={() => handleClose}>
                <Typography>{rep.nome}</Typography>
                {/* <Link className={classes.menuitem} to={rep.rota}>
            </Link> */}
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

export default MenuItens;
