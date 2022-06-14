import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./index.css";

export default function About() {
  return <>
  <Paper sx={{margin: '1em'}}>
    <Typography align="center" variant="h2">Обо мне</Typography>
    <Divider />
    <Box sx={{display: 'flex'}}>
      <Box sx={{width: '50%', padding: '1em'}}>
        <img style={{
          width: '100%',
          height: '100%',
          borderRadius: '1em',
          objectFit: 'cover'
        }} src="./assets/img/1.jpg"/>
      </Box>
      <Box sx={{width: '50%', padding: '1em'}}>

      <Typography sx={{padding: '0.5em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mauris laoreet, luctus sapien a, sollicitudin justo. Vestibulum placerat velit leo, eget consequat felis placerat eget. Nullam convallis nisi eget porta dignissim. Mauris suscipit, velit eu varius tempor, mi augue condimentum diam, in lobortis mi neque et ex. Aenean porta iaculis nulla nec pellentesque. Duis pulvinar odio nibh, a bibendum libero aliquam sit amet. Sed et dictum erat. Morbi nibh felis, scelerisque et euismod cursus, viverra eu eros. Mauris id dui et lorem feugiat condimentum. Vivamus non congue felis, ut finibus diam.</Typography>
      <Divider />

      <Typography sx={{padding: '0.5em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mauris laoreet, luctus sapien a, sollicitudin justo. Vestibulum placerat velit leo, eget consequat felis placerat eget. Nullam convallis nisi eget porta dignissim. Mauris suscipit, velit eu varius tempor, mi augue condimentum diam, in lobortis mi neque et ex. Aenean porta iaculis nulla nec pellentesque. Duis pulvinar odio nibh, a bibendum libero aliquam sit amet. Sed et dictum erat. Morbi nibh felis, scelerisque et euismod cursus, viverra eu eros. Mauris id dui et lorem feugiat condimentum. Vivamus non congue felis, ut finibus diam.</Typography>
      <Divider />
        
      <Typography sx={{padding: '0.5em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id mauris laoreet, luctus sapien a, sollicitudin justo. Vestibulum placerat velit leo, eget consequat felis placerat eget. Nullam convallis nisi eget porta dignissim. Mauris suscipit, velit eu varius tempor, mi augue condimentum diam, in lobortis mi neque et ex. Aenean porta iaculis nulla nec pellentesque. Duis pulvinar odio nibh, a bibendum libero aliquam sit amet. Sed et dictum erat. Morbi nibh felis, scelerisque et euismod cursus, viverra eu eros. Mauris id dui et lorem feugiat condimentum. Vivamus non congue felis, ut finibus diam.</Typography>
      </Box>
    </Box>
  </Paper>
  </>;
};
