import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { menuStyles } from "./TrapezoidMenu.style.js";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Typography } from "@mui/material";
import { FormControl } from "@mui/material";

const TrapezoidMenu = ({
  points,
  handlePointChange,
  scale,
  handleScaleChange,
  rotateDegree,
  handleRotateDegreeChange,
  handleTransformOnClick,
  handleRotatePointChange,
}) => {
  return (
    <Box sx={menuStyles.menuWrapper}>
      <Box sx={menuStyles.pointsWrapper}>
        <Box sx={menuStyles.pointWrapper}>
          <InputLabel sx={menuStyles.pointText}>Point 1:</InputLabel>
          <Typography>X</Typography>
          <TextField
            type="number"
            value={points.x[0]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(0, "x", newVal);
              handlePointChange(4, "x", newVal);
            }}
            sx={menuStyles.pointInput}
          />
          <Typography>Y</Typography>
          <TextField
            type="number"
            value={points.y[0]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(0, "y", newVal);
              handlePointChange(4, "y", newVal);
            }}
            sx={menuStyles.pointInput}
          />
        </Box>

        <Box sx={menuStyles.pointWrapper}>
          <InputLabel sx={menuStyles.pointText}>Point 2:</InputLabel>
          <Typography>X</Typography>
          <TextField
            type="number"
            value={points.x[1]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(1, "x", newVal);
            }}
            sx={menuStyles.pointInput}
          />
          <Typography>Y</Typography>
          <TextField
            type="number"
            value={points.y[1]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(1, "y", newVal);
            }}
            sx={menuStyles.pointInput}
          />
        </Box>

        <Box sx={menuStyles.pointWrapper}>
          <InputLabel sx={menuStyles.pointText}>Point 3:</InputLabel>
          <Typography>X</Typography>
          <TextField
            type="number"
            value={points.x[2]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(2, "x", newVal);
            }}
            sx={menuStyles.pointInput}
          />
          <Typography>Y</Typography>
          <TextField
            type="number"
            value={points.y[2]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(2, "y", newVal);
            }}
            sx={menuStyles.pointInput}
          />
        </Box>

        <Box sx={menuStyles.pointWrapper}>
          <InputLabel sx={menuStyles.pointText}>Point 4:</InputLabel>
          <Typography>X</Typography>
          <TextField
            type="number"
            value={points.x[3]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(3, "x", newVal);
            }}
            sx={menuStyles.pointInput}
          />
          <Typography>Y</Typography>
          <TextField
            type="number"
            value={points.y[3]}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value, 10) || 0;
              handlePointChange(3, "y", newVal);
            }}
            sx={menuStyles.pointInput}
          />
        </Box>
      </Box>
      <Box sx={menuStyles.wrapper}>
        <InputLabel sx={menuStyles.titleText}>Scale</InputLabel>
        <TextField
          type="number"
          value={scale}
          label="Enter scale"
          min={0.000000000001}
          max={100}
          step={0.1}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            handleScaleChange(newVal);
          }}
          sx={menuStyles.input}
        />
      </Box>

      <Box sx={menuStyles.wrapper}>
        <InputLabel sx={menuStyles.titleText}>Rotate Degree</InputLabel>
        <TextField
          type="number"
          value={rotateDegree}
          min={0}
          max={720}
          step={1}
          onChange={(e) => {
            const newVal = parseFloat(e.target.value);
            handleRotateDegreeChange(newVal);
          }}
          sx={menuStyles.input}
          label="Enter rotate degree"
        />
      </Box>

      <Box>
        <Box sx={menuStyles.wrapper}>
          <Typography sx={menuStyles.titleText}>Rotation Point</Typography>
          <FormControl fullWidth>
            <InputLabel id="rotation-point-select">
              Select rotation point
            </InputLabel>
            <Select
              labelId="rotation-point-select"
              label="Select rotation point"
              onChange={(e) => {
                handleRotatePointChange(e.target.value);
              }}
              sx={menuStyles.input}
            >
              {points.name.map((name, index) => (
                <MenuItem key={index} value={index}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button sx={menuStyles.button} onClick={handleTransformOnClick}>
            Transform
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TrapezoidMenu;
