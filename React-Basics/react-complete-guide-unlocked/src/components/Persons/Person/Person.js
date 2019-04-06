import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  //create constructor to create an elementref
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("something went wrong");
  // }
  render() {
    console.log("person.js rednering");

    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticaed!</p>
        ) : (
          <p>please login</p>
        )}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        {/* listen to changes intial value is called from its parent using prop */}
        <input
          type="text"
          //older approach
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          //newer approach
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // <div className={classes.Person}>
      //   <p onClick={this.props.click}>
      //     I'm a {this.props.name} and I am {this.props.age} years old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   {/* listen to changes intial value is called from its parent using prop */}
      //   <input
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </div>
    );
  }
}
//click is specified it will take a pointer at a function
//name will take a string,
//age will take a number
//changed will take a pointer at a function

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
