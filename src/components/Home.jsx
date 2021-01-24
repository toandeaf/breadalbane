import React, {useContext, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import InputAdornment from "@material-ui/core/InputAdornment";
import Moment from "moment";
import {QuoteContext} from "./QuoteContext";

export const Home = () => {

    const [quotes, updateQuotes] = useState([]);
    const server = 'http://192.168.0.155:8181';

    useEffect(() => {
        fetchQuotes().then(data => {
            if (data != null) {
                updateQuotes(data)
            } else {
                console.log("Error fetching quotes.");
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    async function fetchQuotes() {
        return await fetch(server + '/api/quote/active').then(response => {
            return response.json();
        }).catch(() => {
            console.error("Failed to get active quotes.");
            return null;
        });
    }

    return (
        <Grid container>
            <Grid item xs={12} xm={12} xl={12}>
                <h1>All Active Quotes</h1>
            </Grid>
            <Grid item xs={12} xm={12} xl={12}>
            </Grid>
            <Grid item xs={1} xm={1} xl={2}></Grid>
            <Grid item xs={10} xm={10} xl={8}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Reference</TableCell>
                            <TableCell>Asset Value</TableCell>
                            <TableCell>Date Created</TableCell>
                            {/*<TableCell>Status</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { quotes.map((quote, index) => (
                            <TableRow key={index}>
                                <TableCell>{quote.reference}</TableCell>
                                <TableCell>
                                    <InputAdornment
                                        position="start">£{quote.asset}
                                    </InputAdornment>
                                </TableCell>
                                <TableCell>
                                    { Moment(quote.createdDate).format('h:mma - d/MM/y')}
                                </TableCell>
                            </TableRow>)) }
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={1} xm={1} xl={2}></Grid>
        </Grid>
    );
}

export default Home;
