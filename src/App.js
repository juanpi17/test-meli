import React, {Component} from 'react';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';
import Breadcrumbs from './components/BreadCrumbs/BreadCrumbs';
import ListItems from './components/ListItems/ListItems';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    render () {
        return (
            <Router>
                <MainSearchBar />
                <div className="main">
                    <div className="container"> 
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <Breadcrumbs />
                                <ListItems />
                            </div>
                        </div>
                    {/* <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
