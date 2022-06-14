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
import db from "../../../db.json";

export default function PartsList() {
  const [category, setCategory] = React.useState(0);

  const handleChange = (event) => {
    setCategory(event.target.value);
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
          {db.categories.map((category) => {
            return (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {db.categories[category].description ? (
        <Paper sx={{ padding: "1em", marginTop: "2em" }}>
          <Typography>{db.categories[category].description}</Typography>
        </Paper>
      ) : (
        ""
      )}

      <Grid container spacing={2} sx={{ paddingTop: "2em" }}>
        {db.parts
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
