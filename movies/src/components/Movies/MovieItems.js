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



import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        width: 300,
        bgcolor: 'initial',
        boxShadow: 'none',
        '--Card-padding': '0px',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="3/4">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
              srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  Yosemite
                </Link>
              </Typography>
              <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }}>
                <CreateNewFolder />
              </IconButton>
              <IconButton size="sm" color="neutral">
                <Favorite />
              </IconButton>
            </Box>
          </Box>
        </CardCover>
      </Box>
    </Card>
  );
}

export default MovieItems;