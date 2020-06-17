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
import { requestProducts, filterProductsAction } from '../actions';
import _ from "lodash";

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        filterType: state.shop.filterType
    }
};
const mapDispatchToProps = (dispatch) => ({
    onLoadProducts: () => dispatch(requestProducts()),
    onFilterProducts: (data) => dispatch(filterProductsAction(data))
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
    filterProducts(e, props){
        var productsFilter = props.products;
        switch (e.target.value) {
            case 'default':
                productsFilter = _.orderBy(props.products, ['id'], ['asc']);
                break;
            case 'lowest':
                productsFilter = _.orderBy(props.products, ['unit_price'], ['asc']);
                break;
            case 'recent':
                productsFilter = _.orderBy(props.products, ['name'], ['asc']);
                break;
        }
       var dataDispatch = {
            filterValue: e.target.value,
            newOrder: productsFilter
        }
        this.props.onFilterProducts(dataDispatch)
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
                        value={this.props.filterType}
                        onChange={ (e) => { this.filterProducts(e, this.props) }}
                        >
                            <MenuItem value={'default'}>Alpha Order</MenuItem>
                            <MenuItem value={'lowest'}>Lowest Price</MenuItem>
                            <MenuItem value={'recent'}>Most Recent</MenuItem>
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
                    
                </Grid>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));