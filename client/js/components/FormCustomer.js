import React from 'react'
import {Field, reduxForm } from 'redux-form'

import TextField from '@material-ui/core/TextField';

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
        style={{ margin: 8 }}
        {...input}
        {...custom}
    />
)

let FormCustomer = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field 
            name="fullname" 
            component={renderTextField} 
            label="Full Name" />
            <Field 
            name="id" 
            component={renderTextField} 
            label="ID" />
            <Field 
            name="address" 
            component={renderTextField} 
            label="Address" />
            <Field 
            name="phone" 
            component={renderTextField} 
            label="Phone Number" />
            <Field 
            name="email" 
            component={renderTextField} 
            label="Email" />
        </form>
    )
}
FormCustomer = reduxForm({
    form: 'customer'
})(FormCustomer)

export default FormCustomer