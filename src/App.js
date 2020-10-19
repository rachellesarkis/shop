import React from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Items} />
        <Route path="/order" component={Order} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
