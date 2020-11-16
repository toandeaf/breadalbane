import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


class Home extends Component {

    render() {
        return (
            <Box className="Component">
                <h2>Welcome to the Home Page!</h2>
                <Grid>
                    <p>Breadalbane Finance is an independent, commercial finance brokerage, focused on providing bespoke funding solutions for SMEs.</p>
                    <p>Our aim is simple: To find the most appropriate business funding solutions for our clients in terms of price, structure and flexibility. We work with an extensive panel of mainstream and alternative funders throughout Scotland and the UK</p>
                    <p>We are a dynamic team with over 50 years of experience in Financial Services.  That means we can go out to the market on your behalf, source the best deal for you and take care of a lot of the paper work. This will save you time and hassle which will allow you to focus on running your business.</p>
                    <p>We offer savings at no cost.  As we are paid by the funder, our services are free to the client</p>
                </Grid>
            </Box>
        );
    }
}

export default Home;
