import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

class Saved extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} xm={12} xl={12}>
                    <h1>All Saved Inquiries</h1>
                </Grid>
                <Grid item xs={1} xm={2} xl={4}></Grid>
                <Grid item xs={10} xm={12} xl={12} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Reference</TableCell>
                                <TableCell>Asset Value</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Bob Big Van</TableCell>
                                <TableCell>£35000</TableCell>
                                <TableCell>Contact Requested</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>BigDumpTruck</TableCell>
                                <TableCell>£250000</TableCell>
                                <TableCell>Provided Quote</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>SerialD9938</TableCell>
                                <TableCell>£19000</TableCell>
                                <TableCell>Finance Processing</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bob Big Van</TableCell>
                                <TableCell>£35000</TableCell>
                                <TableCell>Contact Requested</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>BigDumpTruck</TableCell>
                                <TableCell>£250000</TableCell>
                                <TableCell>Provided Quote</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>SerialD9938</TableCell>
                                <TableCell>£19000</TableCell>
                                <TableCell>Rejected</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bob Big Van</TableCell>
                                <TableCell>£35000</TableCell>
                                <TableCell>Processed</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>BigDumpTruck</TableCell>
                                <TableCell>£250000</TableCell>
                                <TableCell>Rejected</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>SerialD9938</TableCell>
                                <TableCell>£19000</TableCell>
                                <TableCell>Rejected</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={1} xm={2} xl={4}></Grid>
            </Grid>
        );
    }
}

export default Saved;
