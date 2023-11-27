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
    buttonWrapper:{
        backgroundColor: 'rgba(40, 42, 69, 1)',
        padding: 2,
        paddingRight:7,
        paddingLeft:7,
        display:"flex",
        justifyContent:"center",
        '&:hover': {
            backgroundColor:'rgba(88, 93, 164, 1)'//доробити треба бо шото не робе
        }
    },
    button:{
        display:"flex",
        justifyContent:"flex-end",
        mr:"30px"
    },
    link:{
        textDecoration:"none",
        color: '#fff',
    },
    lessonsWrapper:{
        display:"flex",
        flexDirection:"column",
        gap:"90px",
        mb:"90px",
        ml:"200px"
    }
};
  