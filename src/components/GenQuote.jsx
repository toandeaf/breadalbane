import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

class GenQuote extends Component {

    constructor(props) {
        super(props);
        this.quote = {
            reference: "",
            asset: 0,
            tradeIn: 0,
            deposit: 0,
            term: 12,
            monthly: 0,
            monthly_lower: 0,
            monthly_higher: 0,
            rate_lower: 3.0,
            rate_higher: 5.0,
        }

        this.calculate = this.calculate.bind(this);
        this.saveQuote = this.saveQuote.bind(this);

        this.fetchRates().then(quote => {
            if (quote != null) {
                this.quote.rate_lower = quote.rate.lowerRate;
                this.quote.rate_higher = quote.rate.higherRate;
                console.log("Fetched Rates.");
            } else {
                this.quote.rate_lower = 3.0;
                this.quote.rate_higher = 5.0;
                console.log("Defaulting Rates.");
            }
        });
    }

    async fetchRates() {
        return await fetch('http://localhost:8181/api/quote/example').then(response => {
            return response.json();
        }).catch(() => {
            console.error("ahhh");
            return null;
        });
    }

    async saveQuote() {

        console.log(this.quote);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    reference: this.quote.reference,
                    asset: this.quote.asset,
                    tradeIn: this.quote.tradeIn,
                    term: this.quote.term,
                    deposit: this.quote.deposit,
                    rate : {
                        lowerRate: this.quote.rate_lower,
                        higherRate: this.quote.rate_higher
                    },
                    monthly: this.quote.monthly
                }
            )
        };

        console.log(requestOptions);
        return await fetch('http://localhost:8181/api/quote/create' ,requestOptions)
    }

    calculate() {
        let advance = this.quote.asset - (+this.quote.deposit + +this.quote.tradeIn);
        let percentOfAdvanceHigher = advance * (this.quote.rate_higher / 100);
        let percentOfAdvanceLower = advance * (this.quote.rate_lower / 100);
        let month = this.quote.term / 12;
        let monthly_higher = percentOfAdvanceHigher * month;
        let monthly_lower = percentOfAdvanceLower * month;

        if (monthly_lower > 0) {
            let monthly = (monthly_lower.toFixed(2) + " - " + monthly_higher.toFixed(2));
            this.quote.monthly = monthly;
        } else {
            this.quote.monthly = "0 (Deposit or Trade in Value exceeds Total Asset Cost)";
        }

        this.setState(this.quote);
    }

    render() {
        return (
            <div className="Calculator">
                <div>
                    <div className="section-title">
                        <h2>Generate Finance Quote</h2>
                    </div>
                    <Box display={"flex"}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="number-basic" type="number"
                                           label={"Asset Cost exc. VAT"}
                                           onChange={e => {
                                               this.quote.asset = e.target.value;
                                               this.calculate();
                                           }}
                                           variant={"outlined"} InputProps={{
                                    startAdornment: <InputAdornment position="start">£</InputAdornment>
                                }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="number-basic" type="number" label={"Deposit"}
                                           onChange={e => {
                                               this.quote.deposit = e.target.value;
                                               this.calculate();
                                           }}
                                           variant={"outlined"} InputProps={{
                                    startAdornment: <InputAdornment position="start">£</InputAdornment>
                                }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="number-basic" type="number"
                                           label={"Trade In Value (inc. VAT)"} variant={"outlined"}
                                           onChange={e => {
                                               this.quote.tradeIn = e.target.value;
                                               this.calculate();
                                           }}
                                           InputProps={{
                                               startAdornment: <InputAdornment
                                                   position="start">£</InputAdornment>
                                           }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                {/*<TextField id="number-basic" type="number" label={"Term"}  variant={"outlined"} InputProps={{*/}
                                {/*    startAdornment: <InputAdornment position="start">£</InputAdornment>}}/>*/}
                                <InputLabel htmlFor="age-native-simple">Term in Months</InputLabel>
                                <Select fullWidth
                                        defaultValue={12}
                                        native
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-simple',
                                        }}
                                        onChange={e => {
                                            this.quote.term = e.target.value;
                                            this.calculate();
                                        }}
                                >
                                    <option aria-label="None" value=""/>
                                    <option value={12}>12</option>
                                    <option value={24}>24</option>
                                    <option value={36}>36</option>
                                    <option value={48}>48</option>
                                    <option value={60}>60</option>
                                </Select>
                            </Grid>

                            <Grid item xs={12} xm={6} xl={4}>
                                {/*<TextField id="number-basic" type="number" label={"Balloon"}  variant={"outlined"} InputProps={{*/}
                                {/*    startAdornment: <InputAdornment position="start">£</InputAdornment>}}/>*/}
                                <Typography id="discrete-slider" gutterBottom>
                                    Balloon %
                                </Typography>
                                <Slider
                                    defaultValue={30}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={20}
                                />
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="estimated"
                                           label={"Estimated Monthly Repayments"}
                                           value={this.quote.monthly} variant={"outlined"}
                                           InputProps={{
                                               startAdornment: <InputAdornment
                                                   position="start">£</InputAdornment>
                                           }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField onClick={this.fetchRates} fullWidth id="reference"
                                           label={"GenQuote Reference"} variant={"outlined"} onChange={e => {
                                    this.quote.reference = e.target.value;
                                }}/>
                            </Grid>
                            {/*<Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/savedQuote">Save*/}
                            {/*    GenQuote</Button></Grid>*/}
                            <Grid item xs={6} xm={6} xl={6}><Button onClick={this.saveQuote}>Save
                                Quote</Button></Grid>
                            <Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/requestContact">Save Quote and Request
                                Contact</Button></Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        );
    }
}

export default GenQuote;
