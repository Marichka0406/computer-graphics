import { Box } from "@mui/material";
import Plot from "react-plotly.js";
import { styles } from "./TrapezoidArea.style.js";

const TrapezoidArea = ({ points }) => {
  return (
    <Box sx={styles.wrapper}>
      <Plot
        data={[
          {
            type: "scatter",
            mode: "lines+markers",
            x: points.x,
            y: points.y,
            marker: { color: "blue" },
            text: points.name,
            hoverinfo: "x+y+text",
          },
        ]}
        layout={{
          xaxis: { title: "X Axis" },
          yaxis: { title: "Y Axis" },
        }}
      />
    </Box>
  );
};

export default TrapezoidArea;
