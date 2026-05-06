import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/savedSlice";

const DetailPage = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.items);

  const isSaved = saved.find((item) => item.code === code);

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((res) => setProduct(res.data.product));
  }, [code]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Typography variant="h4">{product.product_name}</Typography>

      <Button
        onClick={() =>
          isSaved
            ? dispatch(removeItem(code))
            : dispatch(addItem(product))
        }
      >
        {isSaved ? "Remove" : "Save"}
      </Button>
    </>
  );
};

export default DetailPage;