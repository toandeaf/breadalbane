import './App.css';
import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <h1>Breadalbane Finance</h1>
                    <div className="container">
                        <Box>
                            <Grid>
                                <Button href="#/home">Home</Button>
                                <Button href="#/generateQuote">Generate Quote</Button>
                                <Button href="#/savedQuotes">Saved Quotes</Button>
                                <Button href="#/requestContact">Request Contact</Button>
                            </Grid>
                        </Box>
                    </div>
                    <div className="content">
                        <Route path="/home" component={Home}/>
                        <Route path="/generateQuote" component={Calculator}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
