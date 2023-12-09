import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { Box } from '@mui/material';

import { Link } from "react-router-dom";
import { styles } from "./Quiz.style.js";

const survey = require("./surveyFractalsJson.js").surveyJson;
const style = require("./surveyTheme.js").themeJson;

function QuizFraclals() {
  const surveyModel = new Model(survey);
  surveyModel.applyTheme(style);

  return (
    <Box sx={styles.wrapper}>
      <div style={{ marginTop: 0 }}>
        <Survey model={surveyModel} />
      </div>

      <Box sx={styles.buttonsWrapper}>

      <Box sx={styles.buttonPrevWrapper}>
        <Link style={styles.link} to={"/study-materials-lessons"}>
          <Box sx={styles.buttonInner}>Previous</Box>
        </Link>
      </Box>

      <Box sx={styles.buttonNextWrapper}>
        <Link style={styles.link} to={"/study-materials-tests-colors"}>
          <Box sx={styles.buttonInner}>Next</Box>
        </Link>
      </Box>
    </Box>
      </Box>
  );
}

export default QuizFraclals;