import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FoodCard from "../components/FoodCard";

const SavedPage = () => {
  const items = useSelector((state) => state.saved.items);

  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.code}>
          <FoodCard food={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SavedPage;