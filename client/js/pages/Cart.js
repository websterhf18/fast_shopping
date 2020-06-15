import React from "react";
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import CartItem from '../components/CartItem';

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
};
const mapDispatchToProps = dispatch => ({
    //onLoadProducts: () => dispatch(requestProducts())
});

class Cart extends React.Component{
    componentDidMount() {
        //
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
                        <Button variant="contained" color="primary">
                            Checkout
                        </Button>
                    </Grid>
                </Grid>
                <Grid container style={{padding: 24}}>
                    { this.props.cart.map((item, index) => (
                        <Grid item xs={12} sm={12} lg={12} xl={12} style={{padding: 12}} key={index}>
                            <CartItem 
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
                            <Link href="#">
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
                            Total: $999
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                alignItems="flex-start" 
                justify="flex-end" 
                direction="row"
                container 
                style={{padding: '10px 24px'}}>
                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);