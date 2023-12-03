import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const survey = require("./surveyJson.js").surveyJson;
const style = require("./surveyTheme.js").themeJson;

function Quiz() {
  const surveyModel = new Model(survey);
  surveyModel.applyTheme(style);

  return (<Survey model={surveyModel}/>);
}

export default Quiz;