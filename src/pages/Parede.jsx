import { Grid } from '@mui/material';
import React from 'react'
import QuadrinhoParede from '../components/QuadrinhoParede'
import { DadosQuadrinhos } from '../util/DadosQuadrinhos';

function Parede() {
    return (
        <Grid container justifyContent="center">
            {!!DadosQuadrinhos?.length &&
                DadosQuadrinhos?.map((q) => {
                    return (

                        <QuadrinhoParede key={q.posicao} exaluna={q} />
                    );
                })}
        </Grid>
    )
}

export default Parede