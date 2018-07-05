import React from "react";

class AddItem extends React.Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  myref = React.createRef();
  handleOnChange(e) {
    console.log(e.target.value);
    this.setState({ inputVal: e.target.value });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      const val = this.myref.current.value;
      this.props.addListItem(val);
    }
  }
  render() {
    return (
      <React.Fragment>
        <input
          ref={this.myref}
          value={this.props.inputVal}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          type="text"
        />
      </React.Fragment>
    );
  }
}

export default AddItem;
