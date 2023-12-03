export const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      marginTop: "100px",
    },
    titleWrapper: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },
    title:{
        fontSize:"40px"
    },
    icon:{
       fontSize:"80px"
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
    buttonWrapper:{
        display:"flex",
        justifyContent:"flex-end",
        mr:"30px",
    },
    link:{
        textDecoration:"none",
        color: '#fff',
    },
    lessonsWrapper:{
        display:"flex",
        flexDirection:"column",
        ml:"140px"
    },
    divider:{
        mt:"80px",
        mr:"30px",
        mb:"10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }
};
  