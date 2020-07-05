import React, {Component} from 'react';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';
import Breadcrumbs from './components/BreadCrumbs/BreadCrumbs';
import ListItems from './components/ListItems/ListItems';
import ItemDetails from './components/ItemDetails/ItemDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route
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

                                {/* Process the different routes to the components that will handle them */}
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/items" component={ListItems} />
                                    {/* <Route path="/items?search=:search" component={ListItems} /> */}
                                    <Route path="/items/:id" component={ItemDetails} />
                                    <Route render={() => <h2 className="text-center mt-5">404 - Page not found</h2>} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
