import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { AirlineSeatLegroomExtra } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 20,
        margin: '30px 100px',
        padding: '1% 7%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        //border: '2px solid #f05454',
        background: '#ff7171',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
          
         textDecorationStyle: 'arial',
         
        },
      },
     
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));
const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Connect</Typography>

            </AppBar>
            <VideoPlayer />
            <Options>
               <Notifications />
            </Options>

        </div>
    );
}

export default App;
