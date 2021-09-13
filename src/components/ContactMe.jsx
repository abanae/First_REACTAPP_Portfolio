import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme =>({
form:{
    width: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
},
button:{
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
}
}))

const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color: 'tomato',
        },
    },
})(TextField);

const ContactMe = ()=>{

    const classes =useStyles();

    return(
        <Box components='div'>
          <Grid container justify='center'>
          <Box component='form' className={classes.form}>
            <Typography variant= 'h5' style={{color: '#35bcf1'}}>Contact Me</Typography>
            <InputField 
            fullWidth={true} 
            label='Name' 
            variant='outlined' 
            margin='dense' 
            size='medium'/>
            <br/>
            <InputField 
            fullWidth={true} 
            label='Email' 
            variant='outlined' 
            margin='dense'
             size='medium'/>
            <br/>
            <InputField 
            fullWidth={true} 
            label='Message' 
            variant='outlined'/>
            <br/>
            <Button className={classes.button} variant='outlined' fullwidth={true} endIcon={<SendIcon/>}>
                Send
            </Button>
          </Box>
          </Grid>
        </Box>
    );
};

export default ContactMe