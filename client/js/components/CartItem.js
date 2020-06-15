import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex'
    },
    image: {
        flex: '1',
        width: 100,
        height: 100
    },
    details: {
        flex: '2',
    },
    bottom : {
        display: 'flex',
        justifyContent: 'space-between'
    },  
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));
export default function CartItem({ product }){
    const classes = useStyles();
    return(
        <>
            <Card>
                <Grid 
                direction="row"
                justify="center"
                alignItems="center"
                container spacing={3}>
                    <Grid item xs={1}>
                        <CardMedia
                            className={classes.image}
                            image="https://dummyimage.com/300x300/000/fff"
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography component="h5" variant="h5">
                            {product.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {product.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Unit price:
                        </Typography>
                        <Typography component="h5" variant="h5">
                            $ {product.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Qty:</InputLabel>
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
                    <Grid item xs={2}>
                        <Typography component="h5" variant="h5">
                            Total: $999
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}