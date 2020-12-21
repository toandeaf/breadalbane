import './App.css';
import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import NewQuote from "./components/NewQuote";
import Home from "./components/Home";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Contact from "./components/Contact";
import AllQuotes from "./components/AllQuotes";

class App extends Component {

    render() {
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
                        <Route path="/home" component={Home}/>
                        <Route path="/newQuote" component={NewQuote}/>
                        <Route path="/requestContact" component={Contact}/>
                        <Route path="/allQuotes" component={AllQuotes}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
