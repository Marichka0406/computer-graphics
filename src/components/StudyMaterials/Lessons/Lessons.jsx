import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { styles } from "./Lessons.style.js";
import Lesson from "../Lesson/Lesson.jsx";

const lessons = [
  {
    title: "Fractals",
    links: [
      "https://youtube.com/playlist?list=PL2V76rajvC1KGSP7OZYtuIvp-oZk4vz8h&si=e6e_BWoWSiGOGO-S",
      "https://youtube.com/playlist?list=PL9tHLTl03LqG4ajDvqyfCDMKSxmR_plJ3&si=3UdC7svXU4zv-nc-",
    ],
  },
  {
    title: "Color Models",
    links: [
      "https://youtu.be/15aqFQQVBWU?si=rkPgJX0MvJmvYULp",
      "https://youtu.be/AS1OHMW873s?si=NuG2mdgju2tYmnic",
    ],
  },
  {
    title: "Moving Images",
    links: ["https://youtu.be/E3Phj6J287o?si=N2cEPxN8ruZTkGXW"],
  },
];

const Lessons = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleWrapper}>
        <YouTubeIcon sx={styles.icon} />
        <Typography sx={styles.title}>Video lessons</Typography>
      </Box>
      <Box sx={styles.lessonsWrapper}>
        {lessons.map((lesson, index) => (
          <Box key={index}>
            <Lesson title={lesson.title} links={lesson.links} />
            {index < lessons.length - 1 && <Divider sx={styles.divider} />}
          </Box>
        ))}
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Link style={styles.link} to={"/study-materials-tests-fractals"}>
          <Box sx={styles.buttonInner}>Next</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Lessons;
