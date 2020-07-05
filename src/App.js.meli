import React, {Component} from 'react';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';
import Breadcrumbs from './components/BreadCrumbs/BreadCrumbs';
import ListItems from './components/ListItems/ListItems';
import ItemDetails from './components/ItemDetails/ItemDetails';
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
                <div className="main">
                    <MainSearchBar />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Breadcrumbs />
                                <ItemDetails />
                                {/* <ListItems /> */}
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
