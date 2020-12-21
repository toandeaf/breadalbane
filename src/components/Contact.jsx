import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

export const Contact = () => {

    const server = 'http://192.168.0.155:8181';
    const [capture] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        notes: "",
        clientSentiment: "Uncertain",
        quote: null
    });

    async function submitRequest() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                capture
            )
        };

        console.log(requestOptions);
        return await fetch(server + '/api/capture/create', requestOptions)
    }

    return (
        <div className="Calculator">
            <div>
                <div className="section-title">
                    <h2>Request Contact</h2>
                </div>
                <Box display={"flex"}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} xm={6} xl={4}>
                            <TextField fullWidth id="reference" label={"Inquiry Reference"} variant={"outlined"}/>
                        </Grid>
                        <Grid item xs={12} xm={6} xl={4}>
                            <TextField fullWidth id="name" label={"Name"} variant={"outlined"} onChange=
                                {
                                    e => capture.name = e.target.value
                                }/>
                        </Grid>
                        <Grid item xs={12} xm={6} xl={4}>
                            <TextField fullWidth id="phoneNo" label={"Phone Number"} variant={"outlined"} onChange=
                                {
                                    e => capture.phoneNumber = e.target.value
                                }/>
                        </Grid>
                        <Grid item xs={12} xm={6} xl={4}>
                            <TextField fullWidth id="email" label={"Email Address"} variant={"outlined"} onChange=
                                {
                                    e => capture.email = e.target.value
                                }/>
                        </Grid>
                        <Grid item xs={12} xm={6} xl={4}>
                            <TextField fullWidth id="extra" label={"Extra Inquiry Information"} variant={"outlined"} onChange=
                                {
                                    e => capture.notes = e.target.value
                                }/>
                        </Grid>

                        <Grid item xs={2} xm={4} xl={4}></Grid>
                        <Grid item xs={8} xm={4} xl={4}>
                            <InputLabel htmlFor="age-native-simple">Current Client Sentiment</InputLabel>
                            <Select fullWidth
                                    defaultValue={"Uncertain"}
                                    native
                                    onChange={ e => capture.clientSentiment = e.target.value}>

                                <option aria-label="None" value={"Uncertain"}>Uncertain</option>
                                <option value={"Unimpressed"}>Unimpressed with Quote Range</option>
                                <option value={"Tempted"}>Tempted with Quote Range</option>
                                <option value={"Happy"}>Happy with Quote Range</option>
                            </Select>
                        </Grid>
                        <Grid item xs={2} xm={4} xl={4}></Grid>

                        <Grid item xs={12} xm={6} xl={4}>
                            <Typography>Note: Contact Request will automatically include Quote Information</Typography>
                        </Grid>
                        <Grid item xs={6} xm={6} xl={6}><Button variant="outlined" color="secondary" fullWidth href="#/newQuote">Return
                            to Quote</Button></Grid>
                        <Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/requestContact" variant="outlined" color="primary" onClick={submitRequest}>Submit Contact
                            Request</Button></Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Contact;
