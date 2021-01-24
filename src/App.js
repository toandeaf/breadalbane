import './App.css';
import React, {useState} from "react";
import {HashRouter, Route} from 'react-router-dom';
import NewQuote from "./components/NewQuote";
import Home from "./components/Home";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Contact from "./components/Contact";
import AllQuotes from "./components/AllQuotes";
import {QuoteContext} from "./components/QuoteContext"

export const App = () => {

    const [quote,setQuote] = useState({
        reference: "",
        asset: 0,
        tradeIn: 0,
        deposit: 0,
        term: 12,
        balloon: 0,
        monthly: 0,
        monthly_lower: 0,
        monthly_higher: 0,
        rate_lower: 3.0,
        rate_higher: 5.0,
    })

    return (
        <HashRouter>
            <div className="App">
                <div className="container">
                    <h1 className="Header">Breadalbane Finance</h1>
                    <Box>
                        <Grid item xs={12} xm={12} xl={12}>
                            <Button variant="outlined" href="#/home">Home</Button>
                            <Button variant="outlined" href="#/allQuotes">All Quotes</Button>
                            <Button variant="outlined" href="#/newQuote">New Quote</Button>
                            <Button variant="outlined" href="#/requestContact">Request Contact</Button>
                        </Grid>
                    </Box>
                </div>
                <div className="content">
                    <QuoteContext.Provider value={[quote, setQuote]}>
                        <Route path="/home" component={Home}/>
                        <Route path="/newQuote" component={NewQuote}/>
                        <Route path="/requestContact" component={Contact}/>
                        <Route path="/allQuotes" component={AllQuotes}/>
                    </QuoteContext.Provider>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
