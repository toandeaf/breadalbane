import './App.css';
import React, {Component} from "react";
import {HashRouter, Route} from 'react-router-dom';
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Contact from "./components/Contact";
import Saved from "./components/Saved";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="container">
                        <h1 className="Header">Breadalbane Finance</h1>
                        <Box>
                            <Grid>
                                <Button href="#/home">Home</Button>
                                <Button href="#/generateQuote">Generate Inquiry</Button>
                                <Button href="#/savedQuotes">Saved Inquiries</Button>
                                <Button href="#/requestContact">Request Contact</Button>
                            </Grid>
                        </Box>
                    </div>
                    <div className="content">
                        <Route path="/home" component={Home}/>
                        <Route path="/generateQuote" component={Calculator}/>
                        <Route path="/requestContact" component={Contact}/>
                        <Route path="/savedQuotes" component={Saved}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
