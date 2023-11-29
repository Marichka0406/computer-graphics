import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import { styles } from "./Lessons.style.js";
import Lesson from "../Lesson/Lesson.jsx";

const lessons = [
  { title: 'Fractals', link: 'https://youtube.com/playlist?list=PL2V76rajvC1KGSP7OZYtuIvp-oZk4vz8h&si=e6e_BWoWSiGOGO-S' },
  { title: 'Color Models', link: 'https://youtube.com/playlist?list=PL9tHLTl03LqG4ajDvqyfCDMKSxmR_plJ3&si=3UdC7svXU4zv-nc-' },
  { title: 'Moving Images', link: 'https://youtu.be/15aqFQQVBWU?si=rkPgJX0MvJmvYULp' },
];

const Tests = () => {
  return (
    <Box sx={styles.wrapper}>
     <Box sx={styles.titleWrapper}>
        <YouTubeIcon sx={styles.icon}/>
        <Typography sx={styles.title}>Video lessons</Typography>
     </Box>
     <Box  sx={styles.lessonsWrapper}>
       {lessons.map((lesson, index) => (
          <Lesson key={index} title={lesson.title} link={lesson.link} />
        ))}
     </Box>
      <Box sx={styles.button}>
     <Box sx={styles.buttonWrapper}>
       <Link style={styles.link} to={"/study-materials-tests"}>Next</Link>
     </Box>
     </Box>

    </Box>
  );
};

export default Tests;
