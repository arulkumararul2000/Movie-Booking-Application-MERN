// import {
  // Button,
  // Card,
  // CardActions,
  // CardContent,
  // Typography,
// } from "@mui/material";
// import AspectRatio from "@mui/joy/AspectRatio";
import React from "react";
// import { Link } from "react-router-dom";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
  return (
    //db need to change
    // <Card
    //   sx={{
    //     width: 230,
    //     height: 420,
    //     margin: 2,
    //     borderRadius: 5,
    //     ":hover": {
    //       boxShadow: "10px 10px 20px #ccc",
    //     },
    //   }}
    // >
    //   <AspectRatio minHeight={420} maxHeight={200}>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {new Date(releaseDate).toDateString()}
    //       </Typography>
    //     <img src={posterUrl} alt={title} />
    //     </CardContent>
    //   </AspectRatio>

    //   <CardActions>
    //     <Button
    //       LinkComponent={Link}
    //       to={`/booking/${id}`}
    //       sx={{ margin: "auto" }}
    //       size="small"
    //     >
    //       BOOK
    //     </Button>
    //   </CardActions>
    // </Card>
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          Card
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            Card Cover
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff" m={3}>
            Card Content
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieItems;
