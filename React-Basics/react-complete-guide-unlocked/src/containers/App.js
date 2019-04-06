import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("app.js constructor");
  }

  state = {
    persons: [
      { id: "dseiu", name: "Max", age: 28 },
      { id: "wjefnfkds", name: "Manu", age: 29 },
      { id: "dsdsew", name: "Stepahnie", age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    counter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("app js getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("app.js  componentdidmount");
  }
  shouldComponentUpdate() {
    console.log("app.js should componentupdate");
    return true;
  }
  componentDidUpdate() {
    console.log("app.js componentdidupdate");
  }

  nameChangedHandler = (event, id) => {
    //holds the index i am looking for

    const personIndex = this.state.persons.findIndex(p => {
      //return true if its the element i am looking for
      return p.id === id;
    });
    //fetches the object and distrubed the objects fetched into the new one
    const person = { ...this.state.persons[personIndex] };
    //passes the name the user inputs into person
    person.name = event.target.value;
    //creates a copy of the states persons object
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      };
    });
  };
  switchNameHandler = newName => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: "Max", age: 24 },
        { name: newName, age: 29 },
        { name: "Stepahnie", age: 26 }
      ]
    });
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  deletePersonHandler = personIndex => {
    //bad practice never mutate the orignal data.
    // this.state.persons. points to the refernce of the data.
    // therefore it copies the refernce into const persons
    //    const persons = this.state.persons;

    //instead use splice which copeis the array into const persons.
    //const persons = this.state.persons.splice();

    // or use the spread operator [...this.state.persons]
    //the spread operator is the modern approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // switchNameHandler() {
  //   console.log("was clicked");
  //   console.log("this", this);
  // }
  render() {
    console.log("app.js render");
    // persons is null
    let persons = null;
    // if true persons will contain jsx code
    //persons can be seen
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
      //array of strings
      //turns intos one string "red bold"
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              clicked={this.togglePersonHandler}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }

  //takes 3 parameters, first is a element
  //second is a js object
  //third is any amount of children.
  //what is nested inside the div
  //   return React.createElement(
  //     "div",
  //     { className: "App" },
  //     "h1",
  //     "hi, I'm a react app!!"
  //   );
  // }
}

//higher order component
//adds extra functionality when parsed
//export default Radium(App);

// withclass takes the componet that should be wrapped
//the second is the class name
export default withClass(App, classes.App);

{
  /* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "max!")}
            changed={this.nameChangedHandler}
          >
            My hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */
}
