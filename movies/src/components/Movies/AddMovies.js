import {
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { addMovie } from "../../api-helper/api-helpers";
const labelProps = {
  mt: 1,
  mb: 1,
};
const AddMovies = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    trailerUrl: "",
    releaseDate: "",
    featured: false,
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
    addMovie({ ...inputs, actors })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"vardana"}>
            {" "}
            Add New Movie
          </Typography>

          <TextField
            value={inputs.title}
            onChange={handleChange}
            name="title"
            label="Title"
            variant="filled"
            margin="normal"
          />

          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            label="Description"
            variant="filled"
            margin="normal"
          />

          <TextField
            value={inputs.posterUrl}
            onChange={handleChange}
            name="posterUrl"
            label="Poster Url"
            variant="filled"
            margin="normal"
          />

          <TextField
            value={inputs.trailerUrl}
            onChange={handleChange}
            name="trailerUrl"
            label="Trailer Url"
            variant="filled"
            margin="normal"
          />

          <TextField
            type={"date"}
            value={inputs.releaseDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            name="releaseDate"
            label="Release Date"
            variant="outlined"
            margin="normal"
          />

          <Box display={"flex"}>
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              label="Actor"
              variant="filled"
              margin="normal"
            />

            <Button
              onClick={() => {
                setActors([...actors, actor]);
                setActor("");
              }}
            >
              {" "}
              Add
            </Button>
          </Box>

          <FormLabel sx={{ labelProps }}>Featured</FormLabel>
          <Checkbox
            checked={inputs.featured}
            onClick={(e) => {
              setInputs((prevState) => ({
                ...prevState,
                featured: e.target.checked,
              }));
            }}
            name="featured"
            sx={{ mr: "auto" }}
          ></Checkbox>

          <Button
            type="submit"
            variant="container"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2b42",
              ":hover": { bgcolor: "#121217" },
              color: "white",
            }}
          >
            {" "}
            Add new Movie{" "}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovies;
