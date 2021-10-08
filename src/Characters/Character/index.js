import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Character({ image, name, species, status }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
