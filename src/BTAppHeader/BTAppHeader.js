import './BTAppHeader.css';
import Icon from './Icon.png'
import { Container, Stack, Grid } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export default function AppHeader() {

    var ErrorStack = (props) => {
        if (props.error) {
            return (
                <div className='bt-notice'>
                    <Grid container spacing={1}>
                        
                        <Grid item xs={12}>
                        <ErrorIcon fontSize='small'/> <small style={{paddingTop:10}}> {props.message}</small>
                        </Grid>
                    </Grid>
                </div >
            )
}
    }


return (
    <div>

        <div className='bt-title'>
            <Container maxWidth="xl">
                <img src={Icon} className='bt-logo' ></img>
            </Container>
        </div>
        <ErrorStack error="false" message="Ohh god, what have you done???"></ErrorStack>
    </div>
)
}