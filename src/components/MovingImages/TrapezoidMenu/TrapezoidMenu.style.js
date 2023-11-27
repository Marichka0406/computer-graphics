export const menuStyles = {
  menuWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    pt: 9,
    px: 1,
    "@media (min-width: 600px)": {
      width: "40%",
    },
    "@media (min-width: 900px)": {
      width: "21%",
    },
    backgroundColor: "rgba(241, 243, 255, 1)",
  },
  pointWrapper: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
    color: "white",
  },
  pointsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
    backgroundColor: "rgb(59, 65, 148)",
    p: 2,
  },
  pointInput: {
    backgroundColor: "white",
    width: "85px",
    marginTop: "5px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  pointText: {
    color: "white",
    marginRight: "8px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    marginTop: "4px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "rgba(59, 65, 148, 1)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(40, 42, 69, 1)",
    },
    padding: 2,
    borderRadius: "3%",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    width: "100%",
    marginTop: "5px",
  },
  titleText: {
    color: "rgba(0, 0, 0, 0.87)",
  },
};
