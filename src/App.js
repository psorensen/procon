import React, { Component } from "react";
import logo from "./logo.svg";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";

class App extends Component {
  // Set initial state.
  state = {
    inputVal: "",
    data: {
      pros: [],
      cons: []
    }
  };

  // Add a list item.
  addListItem = item => {
    const items = { ...this.state.data };

    items.pros.push(item);
    this.setState({ data: items });
    this.setState({ inputVal: "" });
  };

  onChangeInput = e => {
    const inputVal = { ...this.state.inputVal };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <AddItem
            addListItem={this.addListItem}
            inputVal={this.state.inputVal}
          />
        </header>
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
