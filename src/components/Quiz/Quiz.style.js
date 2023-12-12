export const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      marginTop: "50px",
    },
    titleWrapper: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },
    buttonsWrapper: {
        display: "inline-flex",
        justifyContent: "space-between",
        marginTop:"8px"
    },
    buttonInner:{
        backgroundColor: 'rgba(40, 42, 69, 1)',
        padding: 2,
        paddingRight:7,
        paddingLeft:7,
        display:"flex",
        justifyContent:"center",
        '&:hover': {
            backgroundColor:'rgba(88, 93, 164, 1)'
        }
    },
    buttonNextWrapper:{
        display:"flex",
        justifyContent:"flex-end",
        mr:"30px",
    },
    buttonPrevWrapper:{
        display:"flex",
        justifyContent:"flex-start",
        ml:"30px",
    },
    link:{
        textDecoration:"none",
        color: '#fff',
    },
};
  