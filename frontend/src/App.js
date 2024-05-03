import "./App.css"
import React , { Component } from "react"
import { BrowserRouter , Switch , Route, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Disease from "./components/Disease"
import Bmi from "./components/Bmi"
import Nav from "./components/Nav"
import Footer from "./components/footer"
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast"
import ViewHistory from "./components/Viewhistory"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <br />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bmi" component={Bmi} />
            <Route path="/disease" component={Disease} />
            <Route path="/view-history" component={ViewHistory} />
            <Route path="/dash" component={Dashboard} />
            {/* Redirect from root path to login */}
            <Redirect exact from="/" to="/login" />
          </Switch>
          <br />
          <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
