const surveyJson = {
    "title": "Quiz",
    "description": "Review your knowledges!",
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
     {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
     },
     {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
     }
    ],
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "html",
        "name": "question1",
        "html": "You are about to start a quiz on Fractals and Color models. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
       },
       {
        "type": "text",
        "name": "username",
        "titleLocation": "hidden",
        "isRequired": true,
        "maxLength": 25
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "civilwar",
        "title": "How many bit RGB color image is represented by full-color image?",
        "correctAnswer": "1810-1814",
        "choices": [
         {
          "value": "1796-1803",
          "text": "32-bit RGB color image"
         },
         {
          "value": "1810-1814",
          "text": "24-bit RGB color image"
         },
         {
          "value": "1861-1865",
          "text": "16-bit RGB color image"
         },
         {
          "value": "1939-1945",
          "text": "8-bit RGB color image"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "libertyordeath",
        "title": "0 degree of red color in hue image will correspond to",
        "correctAnswer": "Samuel Adams",
        "choices": [
         {
          "value": "John Hancock",
          "text": "boundary"
         },
         {
          "value": "James Madison",
          "text": "edges"
         },
         {
          "value": "Patrick Henry",
          "text": "white region"
         },
         {
          "value": "Samuel Adams",
          "text": "black region"
         }
        ],
        "choicesOrder": "random"
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "magnacarta",
        "title": "Color model used for monitors is",
        "correctAnswer": "The French Declaration of the Rights of Man",
        "choices": [
         {
          "value": "The foundation of the British parliamentary system",
          "text": "CMYK"
         },
         {
          "value": "The Great Seal of the monarchs of England",
          "text": "BGR"
         },
         {
          "value": "The French Declaration of the Rights of Man",
          "text": "RGB"
         },
         {
          "value": "The charter signed by the Pilgrims on the Mayflower",
          "text": "CMR"
         }
        ],
        "choicesOrder": "random"
       }
      ]
     }
    ],
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "firstPageIsStarted": true,
    "maxTimeToFinish": 25,
    "maxTimeToFinishPage": 10,
    "showTimerPanel": "top"
   }

   export {surveyJson};