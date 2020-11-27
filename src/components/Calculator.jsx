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

class Calculator extends Component {

    constructor(props) {
        super(props);
        console.log("Constructing.");
        this.sums = {
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

        this.fetchRates().then(rates => {
            if (rates != null) {
                this.sums.rate_lower = rates[0];
                this.sums.rate_higher = rates[1];
            } else {
                this.sums.rate_lower = 3.0;
                this.sums.rate_higher = 5.0;
                console.log("Defaulting Rates.");
            }
        });
    }

    async fetchRates() {
        return await fetch('http://localhost:8080/api/rates').then(response => {
                return response.json();
            }).catch(() => {
                console.error("ahhh");
                return null;
        });
    }

    calculate() {
        let advance = this.sums.asset - (+this.sums.deposit + +this.sums.tradeIn);
        let percentOfAdvanceHigher = advance * (this.sums.rate_higher / 100);
        let percentOfAdvanceLower = advance * (this.sums.rate_lower / 100);
        let month = this.sums.term / 12;
        let monthly_higher = percentOfAdvanceHigher * month;
        let monthly_lower = percentOfAdvanceLower * month;

        if(monthly_lower > 0) {
            let monthly = (monthly_lower.toFixed(2) + " - " + monthly_higher.toFixed(2));
            this.sums.monthly = monthly;
        } else {
            this.sums.monthly = "0 (Deposit or Trade in Value exceeds Total Asset Cost)";
        }

        this.setState(this.sums);
    }

    render() {
        return (
            <div className="Calculator">
                <div >
                    <div className="section-title">
                        <h2>Generate Finance Quote</h2>
                    </div>
                    <Box display={"flex"}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="number-basic" type="number"
                                           label={"Asset Cost exc. VAT"}
                                           onChange={e => {
                                               this.sums.asset = e.target.value;
                                               this.calculate();
                                           }}
                                           variant={"outlined"} InputProps={{
                                    startAdornment: <InputAdornment position="start">£</InputAdornment>
                                }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField fullWidth id="number-basic" type="number" label={"Deposit"}
                                           onChange={e => {
                                               this.sums.deposit = e.target.value;
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
                                               this.sums.tradeIn = e.target.value;
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
                                            this.sums.term = e.target.value;
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
                                           value={this.sums.monthly} variant={"outlined"}
                                           InputProps={{
                                               startAdornment: <InputAdornment
                                                   position="start">£</InputAdornment>
                                           }}/>
                            </Grid>
                            <Grid item xs={12} xm={6} xl={4}>
                                <TextField onClick={this.fetchRates} fullWidth id="reference" label={"Inquiry Reference"} variant={"outlined"}/>
                            </Grid>
                            <Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/savedQuote">Save Quote</Button></Grid>
                            <Grid item xs={6} xm={6} xl={6}><Button fullWidth href="#/requestContact">Request Contact</Button></Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        );
    }
}

export default Calculator;
