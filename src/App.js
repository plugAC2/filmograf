import {Provider} from "react-redux";
import store from "./redux/store";
import Film from "./components/Film";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Provider store={store}>
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
                    <Route exact path="/" component={Film}/>
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
