import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function CheckoutSummary({products}){
    return(
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell>Units</TableCell>
                            <TableCell>Total Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { products.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>$ {item.price}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>$ {item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}