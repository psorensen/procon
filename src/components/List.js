import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="pros">
          {this.props.data.pros.map((pro, index) => {
            return <h3 key={index}>{pro}</h3>;
          })}
        </div>
        <div className="cons">
          {this.props.data.cons.map((con, index) => {
            return <h3 key={index}>{con}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default List;
