import React, {Component} from 'react';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';

class App extends Component {
    render () {
        return (
            <div className="main">
                <MainSearchBar />
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Steve Jobs</h5>
                        <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
                        <p className="card-text">Stay Hungry, Stay Foolish</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
