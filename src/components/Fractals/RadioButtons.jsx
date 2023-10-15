import React from "react";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButtons({selectedKochFractal, setKochFractal}) {
  const handleRadioChange = (event) => {
    setKochFractal(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(59, 65, 148, 1)",
        color: "white",
        margin: 1,
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "3%",
      }}
    >
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={selectedKochFractal}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="island"
            control={
              <Radio
                sx={{
                  color: "white",
                }}
              />
            }
            label="Island"
          />
          <FormControlLabel
            value="randomized"
            control={
              <Radio
                sx={{
                  color: "white",
                }}
              />
            }
            label="Randomized"
          />
          <FormControlLabel
            value="inverted"
            control={
              <Radio
                sx={{
                  color: "white",
                }}
              />
            }
            label="Inverted"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioButtons;
