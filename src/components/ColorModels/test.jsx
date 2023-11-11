import React from "react";
import { Box } from "@mui/material";
import ImageColorChanger from "./ColorModel.js";

//Test output for example
function Test() {  
    return (
      <Box
        sx={{
          display: "block",
        }}
      >
        <div>'</div>
        <div>
      

    
        </div>

        <div style={{paddingTop: 50}}>
        <ImageColorChanger url=".\src\components\ColorModels\rainbow_test.jpg"></ImageColorChanger>
        </div>
      </Box>
    );
  }
  
  export default Test;
  