import React, {Component} from 'react';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';
import ListItems from './components/ListItems/ListItems';
import ItemDetails from './components/ItemDetails/ItemDetails';
import NotFound from './components/NotFound/NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component {

    render () {
        return (
            <Router>
                <main className="main">
                    <MainSearchBar />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                {/* Process the different routes to the components that will handle them */}
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/items" component={ListItems} />
                                    <Route exact path="/items/:id" component={ItemDetails} />
                                    <Route component={NotFound} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;
