import { useState } from "react";
import axios from "axios";
import { Container, Grid, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchFood = async (query) => {
    if (!query) {
      setError("Enter food name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`
      );

      setFoods(res.data.products);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={searchFood} />

      {error && <ErrorMessage message={error} />}
      {loading && <CircularProgress />}

      <Grid container spacing={2}>
        {foods.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.code}>
            <FoodCard food={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;