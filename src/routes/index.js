import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOFour from "../views/404";
import ContactDetail from "../views/Detail";
import Search from "../views/Home";

export default function Routes(props) {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Search />
                </Route>
                <Route path="/Detail/:id">
                    <ContactDetail />
                </Route>
                <Route>
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    );
}