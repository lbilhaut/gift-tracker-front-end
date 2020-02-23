import React, { Component } from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'
import Home from './Home'
import Demo from './Demo'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/demo" component={Demo} />
                    <Redirect to="/home"/>
                </Switch>
        	    <Footer />
            </div>
        )
    }
}

export default withRouter(Main)