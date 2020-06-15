import React from 'react';
import { useDispatch } from "react-redux";
import { addProductCart } from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex'
    },
    image: {
        flex: '1',
        width: 300,
        height: 300
    },
    details: {
        flex: '2',
    },
    bottom : {
        display: 'flex',
        justifyContent: 'space-between'
    },  
}));
export default function ProductItem({ product }){
    const classes = useStyles();
    const dispatch = useDispatch();
    const addToCart = (product) => {
        product.quantity = 1;
        dispatch(addProductCart(product));
    }
    return(
        <>
            <Card className={classes.container}>
                <CardMedia
                    className={classes.image}
                    image="https://dummyimage.com/300x300/000/fff"
                />
                <div className={classes.details}>
                    <CardContent className={classes.header}>
                        <Typography component="h5" variant="h5">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {product.category.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.bottom}>
                        <Button 
                        onClick={() => addToCart(product)}
                        variant="contained" color="primary">
                            Add to cart
                        </Button>
                        <Typography component="h5" variant="h5">
                            $ {product.unit_price}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </>
    );
}