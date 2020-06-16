import React from "react";
import { connect } from "react-redux";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const mapStateToProps = state => {
    return {
        orderData: state.shop.orderData,
        customerData: state.shop.customerData
    }
};

class Products extends React.Component{

    render(){
        return(
            <>
                <Grid 
                container 
                alignItems="center" 
                justify="center" 
                direction="column"
                style={{padding: 48}}>
                    <CheckCircleIcon style={{ fontSize: 48 }}/>
                    <Typography variant="h3" style={{display: 'flex', padding: 12}}>
                        Thanks for your purchase
                    </Typography>
                    <Typography variant="h5" style={{display: 'flex', padding: 12}}>
                        {this.props.customerData.fullname}, we have created your order # {this.props.orderData.code}. Your items will be soon at your door.
                    </Typography>
                    <Typography variant="h5" style={{display: 'flex', padding: 12}}>
                        Stay safe.
                    </Typography>
                    <Link component={RouterLink} to="/">
                        <Button
                        style={{
                            padding: '10px 24px'
                        }}
                        variant="contained" color="primary">
                            Start Again
                        </Button>
                    </Link>
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, null)(Products);