import React from "react";
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import CartItem from '../components/CartItem';


const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
};
class Cart extends React.Component{
    componentDidMount() {
        //
    }
    getTotalCart(){
        var total = 0;
        this.props.cart.forEach(element => {
            total += element.unit_price * element.quantity
        });
        return total;
    }
    render(){
        return(
            <>
                <Grid 
                container 
                style={{padding: 24}}>
                    <Grid item xs={6} sm={6} lg={6} xl={6}>
                        <Typography component="h5" variant="h5">
                            Shopping Cart
                        </Typography>
                    </Grid>
                    <Grid 
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                    item xs={6} sm={6} lg={6} xl={6}>
                        <Link component={RouterLink} to="/checkout">
                            <Button variant="contained" color="primary">
                                Checkout
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container style={{padding: 24}}>
                    { this.props.cart.map((item, index) => (
                        <Grid item xs={12} sm={12} lg={12} xl={12} style={{padding: 12}} key={index}>
                            <CartItem 
                                index={index}
                                product={item}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid 
                container 
                style={{padding: '10px 24px'}}>
                    <Grid item xs={6} sm={6} lg={6} xl={6}>
                        <Typography variant="button">
                            <Link component={RouterLink} to="/">
                                Continue Shopping
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }} 
                    item xs={6} sm={6} lg={6} xl={6}>
                        <Typography component="h5" variant="h5">
                            Total: $ {this.getTotalCart()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                alignItems="flex-start" 
                justify="flex-end" 
                direction="row"
                container 
                style={{padding: '10px 24px'}}>
                    <Link component={RouterLink} to="/checkout">
                        <Button variant="contained" color="primary">
                            Checkout
                        </Button>
                    </Link>
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, null)(Cart);