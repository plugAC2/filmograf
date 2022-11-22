import {Provider} from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchContainer from "./components/SearchContainer";

function App() {
    return (

        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                        <hr/>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/search" component={SearchContainer}/>
                </Switch>
            </Router>
        </Provider>

    );
}

export default App;
