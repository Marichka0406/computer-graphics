import React from "react";
import { Link } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styles } from "./Lesson.style.js";

const Lesson = ({ title, link }) => {
  return (
    <Box sx = {styles.lessonsWrapper} >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PlayArrowIcon sx={styles.icon} />
        <Typography sx = {styles.title} >{title}</Typography>
      </Box>
      <Box>
        <Link style ={styles.link} href={link} target="_blank" rel="noopener">
         {link}
        </Link>
      </Box>
    </Box>
  );
};

export default Lesson;
