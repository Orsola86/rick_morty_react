import React from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";

export default function Characters({ characters }) {
  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={3} key={character.id}>
            <Character character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
