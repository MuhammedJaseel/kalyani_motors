import { BrowserRouter, Route, Switch } from "react-router-dom";
import Car from "./Screen/car";
import Home from "./Screen/home";
import Service from "./Screen/service";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/service"
          render={(props) => (
            <Service location={props.location.pathname.split("/")[2]} />
          )}
        />
        <Route
          path="/car"
          render={(props) => (
            <Car location={props.location.pathname.split("/")[2]} />
          )}
        />
        <Route path="/" render={() => <Home />} />
        {/* <Route path="/admin" render={(props) => <Body {...props} />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
