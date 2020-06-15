import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { connect } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    toolbarButtons: {
        marginLeft: 'auto',
    },
}));
const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
};
function Header(props){
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography edge="start" variant="h6">
                    Fast shopping
                </Typography>
                <div className={classes.toolbarButtons}>
                    <Link component={RouterLink} to="/cart" color="inherit">
                        <IconButton
                        color="inherit" 
                        aria-label="add to shopping cart">
                            <Badge
                                badgeContent={props.cart.length}
                                color="secondary"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default connect(mapStateToProps, null)(Header);