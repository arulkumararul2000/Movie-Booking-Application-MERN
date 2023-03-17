import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import React from "react";
import { Link } from "react-router-dom";

const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        width: 230,
        height: 420,
        margin: 2,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <AspectRatio minHeight={420} maxHeight={200}>
        <img src={posterUrl} alt={title} />
      </AspectRatio>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          sx={{ margin: "auto" }}
          size="small"
        >
          BOOK
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItems;
