import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviedetails, newBooking } from "../../api-helper/api-helpers";
const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMoviedetails(id).then((res) => {
      setMovie(res.movie);
    });
  }, [id]);

  console.log(movie);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="poppins"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets of movie:
            {" " + movie.title}
          </Typography>

          <Box display={"block"} justifyContent={"center"} paddingLeft={2}>
            <Box
              display={"block"}
              flexDirection="column"
              paddingLeft={2}
              paddingRight={2}
              flexGrow={1}
            >
              <div justifyContent={"center"} width={"100%"}>
                <img height={"300px"} src={movie.posterUrl} alt={movie.title} />
              </div>
              <Box width={"80%"} marginTop={3}>
                <Typography paddingTop={2}> {movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer:
                  {movie.actors.map((actor) => " " + actor + "")}
                </Typography>

                <Typography fontWeight={"bold"} marginTop={1}>
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"100%"} paddingTop={2} display="block" flexWrap="warp">
              <form onSubmit={handleSubmit}>
                <Box
                  padding={2} // 1st
                  margin={"auto"}
                  display="flex"
                  flexDirection={"column"}
                >
                  <FormLabel>seat Number</FormLabel>
                  <TextField
                    value={inputs.seatNumber}
                    onChange={handleChange}
                    name="seatNumber"
                    type={"number"}
                    margin="normal"
                    variant="standard"
                  />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    value={inputs.date}
                    onChange={handleChange}
                    name="date"
                    type={"date"}
                    margin="normal"
                    variant="standard"
                  />
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </>
  );
};

export default Booking;

// import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import Typography from "@mui/joy/Typography";
// import { getMoviedetails, newBooking } from "../../api-helper/api-helpers";
// import { useParams } from "react-router-dom";
// import { Fragment, useEffect, useState, Button } from "react";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Input from "@mui/joy/Input";

// const Booking = () => {
//   const [movie, setMovie] = useState();
//   const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
//   const id = useParams().id;
//   console.log(id);

//   useEffect(() => {
//     getMoviedetails(id).then((res) => {
//       setMovie(res.movie);
//     });
//   }, [id]);

//   console.log(movie);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     newBooking({ ...inputs, movie: movie._id })
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       {movie && (
//         <Fragment>
//           <Box sx={{ minHeight: "auto" }}>
//             <Card
//               variant="outlined"
//               sx={(theme) => ({
//                 width: "auto",
//                 margin: "10px",
//                 gridColumn: "span 2",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 resize: "horizontal",
//                 overflow: "hidden",
//                 gap: "clamp(0px, (100% - 425px + 32px) * 999, 16px)",
//                 transition: "transform 0.3s, border 0.3s",
//                 "& > *": { minWidth: "clamp(0px, (425px - 100%) * 999,100%)" },
//               })}
//             >
//               <AspectRatio
//                 variant="soft"
//                 sx={{
//                   flexGrow: 1,
//                   display: "contents",
//                   "--AspectRatio-paddingBottom":
//                     "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
//                 }}
//               >
//                 <img
//                   width="80%"
//                   height={"300px"}
//                   src={movie.posterUrl}
//                   alt={movie.title}
//                 />
//               </AspectRatio>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 2,
//                   maxWidth: 200,
//                 }}
//               >
//                 <Box sx={{ display: "flex" }}>
//                   <div>
//                     <Typography
//                       padding={3}
//                       fontFamily="poppins"
//                       variant="h4"
//                       textColor={"#000"}
//                       textAlign={"center"}
//                     >
//                       Book Tickets of movie:
//                       {" " + movie.title}
//                     </Typography>
//                   </div>
//                 </Box>
//                 <AspectRatio
//                   variant="soft"
//                   sx={{
//                     "--AspectRatio-paddingBottom":
//                       "clamp(0px, (100% - 200px) * 999, 200px)",
//                     pointerEvents: "none",
//                   }}
//                 >
//                   <img
//                     width="90%"
//                     height={"300px"}
//                     src={movie.posterUrl}
//                     alt={movie.title}
//                   />
//                 </AspectRatio>
//                 <Box width={"100%"}>
//                   <form onSubmit={handleSubmit}>
//                     <Box>
//                       <FormControl>
//                         <FormLabel>Seat Number</FormLabel>
//                         <Input
//                           placeholder="Enter Seat Number"
//                           value={inputs.seatNumber}
//                           onChange={handleChange}
//                           name="seatNumber"
//                           type={"number"}
//                           variant="standard"
//                         />
//                       </FormControl>

//                       <FormControl>
//                         <FormLabel>Booking Date</FormLabel>
//                         <Input
//                           placeholder="Enter Booking Date"
//                           value={inputs.date}
//                           onChange={handleChange}
//                           name="date"
//                           type={"date"}
//                           variant="standard"
//                         />
//                       </FormControl>
//                       <Button type="submit" sx={{ mt: 3 }}>
//                         Book Now
//                       </Button>
//                     </Box>
//                   </form>
//                 </Box>
//               </Box>
//             </Card>
//           </Box>
//         </Fragment>
//       )}
//     </>
//   );
// };

// export default Booking;
