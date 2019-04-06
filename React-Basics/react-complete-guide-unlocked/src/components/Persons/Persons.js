import React, { PureComponent } from "react";
import Person from "./Person/Person";

//props iwll contain an arary of persons
//transforming the array into a jsx array
//jsx is return so () can be omitted

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("persons.js getderivedstate from props");
  //     return state;
  //   }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("persons should component update");
  //     if (nextProps.persons !== this.props.persons) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //saves a snaptshot a datapacakge where componenet did update recieves
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons.js getsnapshotbefore update");
    return { message: "snapshot!" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("persons.js component did update");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("persons.js component will unmount");
  }
  render() {
    console.log("persons.js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        //component which wraps the component where, if the component throws an error itll handle it
        //key must be assigned to the higher components
        // <ErrorBoundary >
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
          key={index}
        />
        // </ErrorBoundary>
      );
    });
  }
  //normal js
}

export default Persons;
