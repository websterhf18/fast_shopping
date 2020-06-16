import React from "react";
import { connect, useDispatch } from "react-redux";
import { updateCustomerAction } from "../actions";

import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import FindCustomer from './FindCustomer';
import FormCustomer from './FormCustomer';

const mapStateToProps = state => {
    return {
        customerType: state.shop.customerType
    }
};
function CheckoutCustomer(props){
    const dispatch = useDispatch();
    const typeFormCustomer = () => {
        if(props.customerType == 'new'){
            return (
                <>
                    <FormCustomer />    
                </>
            );
        }else{
            return (
                <>
                    <FindCustomer />
                </>
            );
        }
    };
    const updateCustomer = (event) => {
        dispatch(updateCustomerAction(event.target.value));
    }
    return(
        <>
            <Paper style={{padding: 24}}>
                <FormControl 
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }} 
                component="fieldset">
                    <FormLabel component="legend">Are you?</FormLabel>
                    <RadioGroup 
                    aria-label="customer_type" 
                    name="customer_type" 
                    value={props.customerType} 
                    onChange={updateCustomer}
                    row>
                        <FormControlLabel value="new" control={<Radio />} label="New Customer" />
                        <FormControlLabel value="existing" control={<Radio />} label="Existing Customer" />
                    </RadioGroup>
                </FormControl>
                <Box 
                style={{
                    textAlign: 'right',
                    padding: 12
                }}>
                    {typeFormCustomer()}
                </Box>
            </Paper>
        </>
    )
}
export default connect(mapStateToProps, null)(CheckoutCustomer);