import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

class Contact extends Component {

    render() {
        return (
            <div className="Calculator">
                <div >
                    <div className="section-title">
                        <h2>Request Contact</h2>
                    </div>
                    <Box display={"flex"}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="reference" label={"Inquiry Reference"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="name" label={"Name"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="phoneNo" label={"Phone Number"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="email" label={"Email Address"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="extra" label={"Extra Inquiry Information"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                {/*<TextField id="number-basic" type="number" label={"Term"}  variant={"outlined"} InputProps={{*/}
                                {/*    startAdornment: <InputAdornment position="start">£</InputAdornment>}}/>*/}
                                <InputLabel htmlFor="age-native-simple">Current Client Sentiment</InputLabel>
                                <Select fullWidth
                                        defaultValue={"Uncertain"}
                                        native
                                        >
                                    <option aria-label="None" value={"Uncertain"}>Uncertain</option>
                                    <option value={"Tempted"}>Unimpressed with Quote Range</option>
                                    <option value={"Keen"}>Tempted with Quote Range</option>
                                    <option value={"Accepted Quote"}>Happy with Quote Range</option>
                                </Select>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <Typography>Note: Contact Request will automatically include Quote Information</Typography>
                            </Grid>
                            <Grid item xs={6} xm={6} xl={6}><Button className="Button" fullWidth href="#/savedQuote">Save Quote</Button></Grid>
                            <Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/requestContact">Submit Contact Request</Button></Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        );
    }
}

export default Contact;
