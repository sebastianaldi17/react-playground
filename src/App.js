import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Components import
import ClockComponent from './components/ClockComponent';
import Greeting from './components/Greeting';
import Home from './components/Home';
import Todo from './components/Todo';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        {
                            /*
                              Route/Pattern matching BEGINS from the top, so put home/index at bottom!
                              Switch contains all the routes being used. Route nesting should be done in each component.
                              Refer to https://reactrouter.com/web/guides/quick-start/2nd-example-nested-routing for more info.
                            */
                        }
                        <Route path='/greeting'>
                            <Greeting name="User" />
                        </Route>

                        <Route path='/todo'>
                            <Todo />
                        </Route>

                        <Route path='/clock'>
                            <ClockComponent />
                        </Route>

                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
