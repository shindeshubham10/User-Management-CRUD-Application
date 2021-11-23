import { Box, Typography, makeStyles } from '@material-ui/core';

import user from "../Assets/Images/User.png"
const useStyles = makeStyles({
    maindiv:
    {
        
    }

})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.maindiv}>
            <img src={user} style={{marginLeft:"580px",marginTop:"60px"}}></img>
            <Typography variant="h1" style={{fontWeight:"bold",marginLeft:"130px",marginTop:"50px"}}>User Management System</Typography>
            <Box style={{display: 'flex'}}>
               
            </Box>
        </Box>
    )
}

export default CodeForInterview;