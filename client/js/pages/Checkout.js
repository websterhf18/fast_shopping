import React from "react";
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CheckoutCustomer from '../components/CheckoutCustomer';
import CheckoutSummary from '../components/CheckoutSummary';

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
};
const mapDispatchToProps = dispatch => ({
    //onLoadProducts: () => dispatch(requestProducts())
});

class Checkout extends React.Component{
    componentDidMount() {
        //
    }
    render(){
        return(
            <>
                <Grid 
                container 
                style={{padding: 24}}>
                    <Grid 
                    item xs={6} sm={6} lg={6} xl={6}>
                        <Typography 
                        style={{
                            padding: '24px 0px'
                        }}
                        component="h5" variant="h5">
                            Customer Information
                        </Typography>
                        <CheckoutCustomer />
                    </Grid>
                    <Grid 
                    item xs={6} sm={6} lg={6} xl={6}>
                        <Typography 
                        style={{
                            padding: '24px 0px'
                        }}
                        component="h5" variant="h5">
                            Order Summary
                        </Typography>
                        <CheckoutSummary
                            products={this.props.cart}
                        />
                        <Typography 
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '20px 24px'
                        }}
                        component="h5" variant="h5">
                            Total: $999
                        </Typography>
                        <Button 
                        style={{
                            float: 'right',
                            padding: '10px 24px'
                        }}
                        variant="contained" color="primary">
                            Place Order
                        </Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);