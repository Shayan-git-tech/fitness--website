import React, { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography, CircularProgress } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
        setError(null);
      } catch (err) {
        setError("Failed to load body parts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        setLoading(true);
        const exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );

        const searchTerm = search.toLowerCase().trim();
        const searchedExercises = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(searchTerm) ||
            exercise.target.toLowerCase().includes(searchTerm) ||
            exercise.equipment.toLowerCase().includes(searchTerm) ||
            exercise.bodyPart.toLowerCase().includes(searchTerm)
        );

        setSearch("");
        setExercises(searchedExercises);
        setError(null);
      } catch (err) {
        setError("Failed to search exercises. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        textAlign="center"
        mb="50px"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          disabled={loading}
          error={!!error}
          helperText={error}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            "&:disabled": {
              bgcolor: "#ccc",
            },
          }}
          onClick={handleSearch}
          disabled={loading || !search.trim()}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {loading ? (
          <Stack alignItems="center">
            <CircularProgress />
          </Stack>
        ) : (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            bodyParts={bodyParts}
          />
        )}
      </Box>
    </Stack>
  );
};

export default SearchExercises;
