import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import PartCard from "../PartCard";

export default function PartsList({parts, categories, categoryChange, category}) {


  const handleChange = (event) => {
    categoryChange(event.target.value)
  };
  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категории"
          onChange={handleChange}
        >
          {categories.map((category) => {
            return (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {categories[category].description ? (
        <Paper sx={{ padding: "1em", marginTop: "2em" }}>
          <Typography>{categories[category].description}</Typography>
        </Paper>
      ) : (
        ""
      )}

      <Grid container spacing={2} sx={{ paddingTop: "2em" }}>
        {parts
          .filter((p) => p.categoryId === category)
          .map((i) => {
            return (
              <Grid item xs={6} md={4} key={i.id}>
                <PartCard {...i} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
