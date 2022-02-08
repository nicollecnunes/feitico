import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "@mui/material";

import n1 from "../images/quadrinhos/n1.jpg";
import n2 from "../images/quadrinhos/n2.jpg";
import n3 from "../images/quadrinhos/n3.jpg";
import n4 from "../images/quadrinhos/n4.jpg";
import n5 from "../images/quadrinhos/n5.jpg";
import n6 from "../images/quadrinhos/n6.jpg";
import n7 from "../images/quadrinhos/n7.jpg";
import n8 from "../images/quadrinhos/n8.jpg";
import n9 from "../images/quadrinhos/n9.jpg";
import n10 from "../images/quadrinhos/n10.jpg";
import n11 from "../images/quadrinhos/n11.jpg";
import n12 from "../images/quadrinhos/n12.jpg";
import n13 from "../images/quadrinhos/n13.jpg";
import n14 from "../images/quadrinhos/n14.jpg";
import n15 from "../images/quadrinhos/n15.jpg";
import n16 from "../images/quadrinhos/n16.jpg";
import n17 from "../images/quadrinhos/n17.jpg";
import n18 from "../images/quadrinhos/n18.jpg";
import n19 from "../images/quadrinhos/n19.jpg";
import n20 from "../images/quadrinhos/n20.jpg";
import n21 from "../images/quadrinhos/n21.jpg";
import n22 from "../images/quadrinhos/n22.jpg";
import n23 from "../images/quadrinhos/n23.jpg";
import n24 from "../images/quadrinhos/n24.jpg";
import n25 from "../images/quadrinhos/n25.jpg";
import n26 from "../images/quadrinhos/n26.jpg";
import n27 from "../images/quadrinhos/n27.jpg";


export default function QuadrinhoParede(obj) {
    const relacaoQuadrinhos = [
        n1,
        n2,
        n3,
        n4,
        n5,
        n6,
        n7,
        n8,
        n9,
        n10,
        n11,
        n12,
        n13,
        n14,
        n15,
        n16,
        n17,
        n18,
        n19,
        n20,
        n21,
        n22,
        n23,
        n24,
        n25,
        n26,
        n27,
    ];
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Button
                onClick={handleClick}
                style={{ width: 190, backgroundColor: "rgb(234, 209, 238)", margin: 5 }}
            >
                <img
                    src={relacaoQuadrinhos[obj.exaluna.posicao -1]}
                    width={190}
                    className="imagemquadrinho"
                />
            </Button>

            <Button
                onClick={handleClick}
                style={{ width: 190, height: 337, backgroundColor: "rgb(234, 209, 238)", margin: 5 }}
            >
                <Typography fontSize={20} fontWeight={600}>
                    {obj.exaluna.nome} <br></br><br></br>
                    {obj.exaluna.curso}<br></br><br></br>
                    {obj.exaluna.ano}<br></br><br></br>
                    {obj.exaluna.cidade}
                </Typography>

            </Button>
        </ReactCardFlip>
    );
};