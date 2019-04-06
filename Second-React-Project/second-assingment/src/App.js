import React, { Component } from "react";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    inputString: ""
  };
  handleChange = event => {
    this.setState({ inputString: event.target.value });
    console.log("changed");
  };
  handleClick = index => {
    const charArray = this.state.inputString.split("");
    charArray.splice(index, 1);
    const finishedString = charArray.join("");
    this.setState({ inputString: finishedString });
  };
  render() {
    const charArray = this.state.inputString
      .split("")
      .map((character, index) => {
        return (
          <CharComponent
            character={character}
            key={index}
            click={() => this.handleClick(index)}
          />
        );
      });
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputString}
        />
        <p>{this.state.inputString}</p>
        <ValidationComponent length={this.state.inputString.length} />
        {charArray}
      </div>
    );
  }
}

export default App;
