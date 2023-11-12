export const menuStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    pt: 11,
    px: 1,
    '@media (min-width: 600px)': {
        width: "40%"
    },
    '@media (min-width: 900px)': {
        width: "21%"
    },
    backgroundColor: "rgba(241, 243, 255, 1)",
  },
  button: {
    backgroundColor: "rgba(59, 65, 148, 1)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(40, 42, 69, 1)",
    },
    padding: 2,
    mb: 1,
    borderRadius: "3%",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    marginTop: "5px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sliderRed: {
    width: "65%",
    margin: "2px 2px 2px 20px",
  },
  sliderGreen: {
    width: "65%",
    margin: "2px 2px 2px 5px",
  },
  sliderBlue: {
    width: "65%",
    margin: "2px 2px 2px 16px",
  },
  title: {
    marginBottom: "2px",
    textAlign: "center",
    fontSize: "14",
  },
  xyzWrapper: {
    backgroundColor: "white",
    padding: "14px 4px 14px 14px",
    marginBottom: "6px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  brightnessSlider: {
    width: "88%",
    marginBottom:"5px"
  },
};
