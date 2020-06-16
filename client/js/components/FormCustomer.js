import React from 'react'
import {Field, reduxForm } from 'redux-form'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
    }) => (
    <TextField
        label={label}
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        {...input}
        {...custom}
    />
)

let FormCustomer = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field 
            name="email" 
            component={renderTextField} 
            label="Email" />
            <Button
            type="submit"
            style={{
                padding: '10px 24px'
            }}
            variant="contained" color="primary">
                Lookup
            </Button>
        </form>
    )
}
FormCustomer = reduxForm({
    form: 'customer'
})(FormCustomer)

export default FormCustomer