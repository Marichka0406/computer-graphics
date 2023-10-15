import React from "react";
import { Box } from "@mui/material";

function FractalField({ currentTab, color, iterationsNumber, selectedKochFractal, savedImage, setSavedImage}) {
  //Використовуй пропси для своєї частини ( то шо в дужках ). Пропси - це просто тіпа змінні які міняються у процесі
  //коли ти міняєш наприклад інпут з кольором чи кількістю ітерацій. 
  //Якщо що я не зробила ще валідацію кольору :( . Але для ітерацій вона по суті є.
  //З відступами на сторінці внизу сторінки треба буде побавись, бо я щось не можу ніяк знайти лишній відступ
  //, який лишає білий слід внизу. Адтаптив трошка зробила, але неідеальний)).
  //console.log(iterationsNumber); --> Можеш тако провіряти собі чи всьо дойшло з пропсів добре
    //savedImage і setSavedImage потрібно встановлювати кожен раз коли аимальовується нова картинка, тобто тоді, коли вона міняється, тому ці пропси 
    //тут треба буде міняти. Решту - використовувати.
    // Загалом якось так) Формат зображень я не дуже знаю, який потрібно, тому сам вибереш
  return (
    <Box
      sx={{
        paddingTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={savedImage} width="80%" alt="Fractal image" />
    </Box>
  );
}

export default FractalField;