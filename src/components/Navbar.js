import Logo from '../assests/pblogo.jpg'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

export default function Navbar() {
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <img src={Logo} style={{width: '50px'}} alt="logo"/>
                    </IconButton>
                    <Typography variant='h6'>Todos</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
