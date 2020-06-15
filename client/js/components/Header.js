import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles((theme) => ({
    toolbarButtons: {
        marginLeft: 'auto',
    },
}));

export default function Header(){
    const classes = useStyles();
    //const {match: {url}} = this.props;
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography edge="start" variant="h6">
                    Fast shopping
                </Typography>
                <div className={classes.toolbarButtons}>
                    <IconButton color="inherit" aria-label="add to shopping cart">
                        <Badge
                            badgeContent={99}
                            color="secondary"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}