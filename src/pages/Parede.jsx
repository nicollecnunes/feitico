import { Grid } from '@mui/material';
import React from 'react'
import QuadrinhoParede from '../components/QuadrinhoParede'
import { ListaQuadrinhos } from '../util/ListaQuadrinhos';

function Parede() {
    return (
        <Grid container justifyContent="center">
            {!!ListaQuadrinhos?.length &&
                ListaQuadrinhos?.map((q) => {
                    return (

                        <QuadrinhoParede key={q.posicao} exaluna={q} />
                    );
                })}
        </Grid>
    )
}

export default Parede