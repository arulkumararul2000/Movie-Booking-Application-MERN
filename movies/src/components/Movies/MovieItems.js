// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import AspectRatio from "@mui/joy/AspectRatio";
// import React from "react";
// import { Link } from "react-router-dom";
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';

// const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
//   return (
//     //db need to change
//     <Card
//       sx={{
//         width: 230,
//         height: 420,
//         margin: 2,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <AspectRatio minHeight={420} maxHeight={200}>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {new Date(releaseDate).toDateString()}
//           </Typography>
//         <img src={posterUrl} alt={title} />
//         </CardContent>
//       </AspectRatio>

//       <CardActions>
//         <Button
//           LinkComponent={Link}
//           to={`/booking/${id}`}
//           sx={{ margin: "auto" }}
//           size="small"
//         >
//           BOOK NOW
//         </Button>
//       </CardActions>
//     </Card>
// <Box
//   sx={{
//     perspective: '1000px',
//     transition: 'transform 0.4s',
//     '& > div, & > div > div': {
//       transition: 'inherit',
//     },
//     '&:hover': {
//       '& > div': {
//         transform: 'rotateY(30deg)',
//         '& > div:nth-child(2)': {
//           transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
//         },
//         '& > div:nth-child(3)': {
//           transform: 'translate3d(45px, 50px, 40px)',
//         },
//       },
//     },
//   }}
// >
//   <Card
//     variant="outlined"
//     sx={{
//       minHeight: '280px',
//       width: 320,
//       backgroundColor: '#fff',
//       borderColor: '#000',
//     }}
//   >
//     <Typography level="h2" fontSize="lg" textColor="#000">
//       Card
//     </Typography>
//     <CardCover
//       sx={{
//         background:
//           'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
//         border: '1px solid',
//         borderColor: '#777',
//       }}
//     >
//       <Typography level="h2" fontSize="lg" textColor="#fff">
//         Card Cover
//       </Typography>
//     </CardCover>
//     <CardContent
//       sx={{
//         alignItems: 'self-end',
//         justifyContent: 'flex-end',
//         background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
//         border: '1px solid',
//         borderColor: '#000',
//       }}
//     >
//       <Typography level="h2" fontSize="lg" textColor="#fff" m={3}>
//         Card Content
//       </Typography>
//     </CardContent>
//   </Card>
// </Box>
//   );
// };

// export default MovieItems;

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        width: 225,
        bgcolor: "initial",
        boxShadow: "none",
        "--Card-padding": "10px",
        "--Card-radius": "25px"
      }}
    >
      <Box sx={{ position: "relative"}}>
        <AspectRatio ratio="5/6">
          <figure>
            <LazyLoadImage src={posterUrl} alt={title} />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            "&:hover, &:focus-within": {
              opacity: 1,
            },
            opacity: 0,
            transition: "0.1s ease-in",
            background:
              "linear-gradient(180deg, transparent 10%, rgba(0,0,0,0.00945888) 40.94%, rgba(0,0,0,0.084204) 45.89%, rgba(0,0,0,0.1426639) 50.83%, rgba(0,0,0,0.3089645) 55.78%, rgba(0,0,0,0.3827099) 60.72%, rgba(0,0,0,0.462754) 65.67%, rgba(0,0,0,0.557076) 70.61%, rgba(0,0,0,0.642924) 75.56%, rgba(0,0,0,0.727246) 80.5%, rgba(0,0,0,0.80729) 85.44%, rgba(0,0,0,0.951035) 90.39%, rgba(0,0,0,1.567336) 95.33%, rgba(0,0,0,1.985796) 96.28%, rgba(0,0,0,2.596541) 97.22%, rgba(0,0,0,2.8) 98.17%)",
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box
              sx={{
                p: 2,
                display: "block",
                alignItems: "center",
                flexGrow: 1,
                alignSelf: "flex-end",
              }}
            >
              <Typography
                level="h2"
                underline="none"
                sx={{
                  color: "#fff",
                  fontSize: "lg",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                {title}
                <Typography
                  level="h5"
                  noWrap
                  sx={{
                    fontSize: "sm",
                    fontWeight: "400",
                    color: "#fff",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  {new Date(releaseDate).toDateString()}
                </Typography>
                <Link to={`/booking/${id}`} style={{ textDecoration: "none" }}>
                  <Button
                    size="sm"
                    variant="solid"
                    color="neutral"
                    sx={{ mt: 2 }}
                    fullWidth={true}
                  >
                    BOOK NOW
                  </Button>
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardCover>
      </Box>
    </Card>
  );
};

export default MovieItems;
