import React, { Component } from "react";
import logo from "./logo.svg";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";

class App extends Component {
  // Set initial state.
  state = {
    inputVal: "",
    inputType: "",
    data: {
      pro: [],
      con: []
    }
  };

  // Add a list item.
  addListItem = item => {
    const items = { ...this.state.data };
    const type = this.state.inputType.trim();
    console.log(type);
    if (this.state.inputType) {
      items[type].push(item);
      this.setState({ data: items, inputVal: "", inputType: "" });
    }
  };

  onChangeInput = e => {
    let inputValue = { ...this.state.inputVal };
    inputValue = e;
    this.setState({ inputVal: inputValue });
  };

  updateType = type => {
    let inputType = { ...this.state.inputType };

    if ('pro' === type) {
      inputType = 'pro';
      this.setState({ inputType, inputVal: "" });
    } else if ('con' === type) {
      inputType = 'con';
      this.setState({ inputType, inputVal: "" });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddItem
            type={this.state.inputType}
            addListItem={this.addListItem}
            inputVal={this.state.inputVal}
            onChangeInput={this.onChangeInput}
            updateType={this.updateType}
          />
        </header>
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
