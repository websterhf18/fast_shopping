import React from "react";
import { connect } from "react-redux";
import { requestOrderAction } from "../actions";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CheckoutCustomer from '../components/CheckoutCustomer';
import CheckoutSummary from '../components/CheckoutSummary';

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        customerForm: state.form.customer,
        customerData: state.shop.customerData,
        customerType: state.shop.customerType
    }
};
const mapDispatchToProps = dispatch => ({
    onCreateOrder: (data) => dispatch(requestOrderAction(data)),
}); 
class Checkout extends React.Component{
    getTotalCart(){
        var total = 0;
        this.props.cart.forEach(element => {
            total += element.unit_price * element.quantity
        });
        return total;
    }
    createOrder(props){
        var data = {
            type_user: props.customerType,
            info_user: {},
            products: props.cart
        }
        if(props.customerType == 'new'){
            data.info_user = props.customerForm.values;
        }else if(props.customerData !== null){
            data.info_user.id = props.customerData.id;
        }
        props.onCreateOrder(data)
    }
    render(){
        return(
            <>
                <Grid 
                container 
                style={{padding: 24}}>
                    <Grid 
                    item xs={6} sm={6} lg={6} xl={6} style={{padding: 12}}>
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
                    item xs={6} sm={6} lg={6} xl={6} style={{padding: 12}}>
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
                            Total: $ {this.getTotalCart()}
                        </Typography>
                        <Button
                        onClick={() => this.createOrder(this.props)}
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