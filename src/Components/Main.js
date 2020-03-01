import React, { Component } from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'
import Home from './Home'
import Demo from './Demo'
import KidsList from './KidsList'
import AddKid from './AddKid'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchKids, postKid } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        kids: state.kids
    }
}

const mapDispatchToProps = (dispatch) => ({
    postKid: (birthYear, firstname) => { dispatch(postKid(birthYear, firstname)) },
    fetchKids: () => { dispatch(fetchKids()) }
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchKids()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/kidslist" component={() => <KidsList kids={this.props.kids} />} />
                    <Route path="/addakid" component={() => <AddKid postKid={this.props.postKid} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))