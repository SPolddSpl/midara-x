import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function PartCard(props) {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 400, height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img || "asd"}
        alt="green iguana"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name || "name"}
        </Typography>
        <Typography
          sx={{
            overflow: "auto",
          }}
          variant="body2"
          color="text.secondary"
        >
          {props.description || "No description"}
        </Typography>
      </CardContent>
    </Card>
  );
}
