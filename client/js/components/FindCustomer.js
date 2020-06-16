import React from 'react'
import { connect, useDispatch } from "react-redux";

import { requestCustomerAction, emptyCustomerAction } from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import FormCustomer from './FormCustomer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const mapStateToProps = state => {
    return {
        customerData: state.shop.customerData,
        onLoading: state.shop.onLoading
    }
};
const mapDispatchToProps = dispatch => ({
    onSubmitForm: (data) => dispatch(requestCustomerAction(data.email)),
    emptyCustomerData: () => dispatch(emptyCustomerAction())
}); 
const useStyles = makeStyles((theme) => ({
  onloading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
const loadingContent = (loadingState) => {
    const classes = useStyles();
    if(loadingState){
        return (
            <div className={classes.onloading}>
                <CircularProgress />
            </div>
        )
    }
}
function FindCustomer(props){
    if (props.customerData == null) {
        return (
            <>
                <FormCustomer onSubmit={props.onSubmitForm}/>
                {loadingContent(props.onLoading)}
            </>
        );
    }
    return (
        <>
            <Typography component="h5" variant="h5" style={{display: 'flex', padding: 6}}>
                Welcome Back, {props.customerData.fullname} 
            </Typography>
            <Typography variant="body1" style={{display: 'flex', padding: 6}}>
                ID: {props.customerData.id} 
            </Typography>
            <Typography variant="body1" style={{display: 'flex', padding: 6}}>
                Address: {props.customerData.address} 
            </Typography>
            <Typography variant="body1" style={{display: 'flex', padding: 6}}>
                Phone Number: {props.customerData.phone} 
            </Typography>
            <Typography variant="body1" style={{display: 'flex', padding: 6}} >
                Email: {props.customerData.email} 
            </Typography>
            <Link 
            onClick={props.emptyCustomerData} 
            style={{padding: 12}}>
               Not {props.customerData.fullname}, Lookup Again
            </Link>
        </>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(FindCustomer);
