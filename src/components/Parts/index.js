import React from "react";
import {
  Tabs,
  Tab,
  Box,
  SwipeableViews,
  useTheme,
  Typography,
} from "@mui/material";
import PartsList from "./PartsList";
import TopParts from "./TopParts";
import db from '../../db.json';

export default function Parts() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };


  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Список комплектующих" {...a11yProps(0)} />
        <Tab label="Топ комплектующих" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PartsList category={category} parts={db.parts} categories={db.categories} categoryChange={handleCategoryChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TopParts category={category} categoryName={db.categories[category].name} parts={db.parts} />
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "2em",
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
