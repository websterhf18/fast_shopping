import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Pagination from '@material-ui/lab/Pagination';

import ProductItem from '../components/ProductItem';

import { connect } from "react-redux";
import { requestProducts } from '../actions';

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
};
const mapDispatchToProps = dispatch => ({
    onLoadProducts: () => dispatch(requestProducts())
});
const styles = theme => {
    return ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    });
};

class Products extends React.Component{
    componentDidMount() {
        this.props.onLoadProducts();
    }
    render() {
        const { classes } = this.props;
        return(
            <>
                <Grid 
                container 
                alignItems="flex-start" 
                justify="flex-end" 
                direction="row"
                style={{padding: 24}}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container style={{padding: 24}}>
                    { this.props.products.map((product, index) => (
                        <Grid item xs={12} sm={12} lg={6} xl={12} style={{padding: 12}} key={index}>
                            <ProductItem 
                                product={product}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid 
                alignItems="center"
                justify="center"
                container 
                style={{padding: 24}}>
                    <Pagination count={10} color="primary" size="large" />
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));