import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("cockpit.js useeffect ");
    //http request...
    // setTimeout(() => {
    //   console.log("ALERT SAVED TO CLOUD");
    //   // alert("saved data to cloud!");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log("cockpit.js cleanup work in useeffect");
    };
  }, []);
  useEffect(() => {
    console.log("cockpit.js useEffect 2nd function");

    return () => {
      console.log("cockpit.js cleanup work in 2nduseeffect");
    };
  });

  // let classes = ["red", "bold"].join(" ");
  const assignedClasses = [];
  let btnClass = "";
  console.log(props);

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes will be red
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes =["red", "bold"]
  }
  return (
    <div className={classes.Cockpit}>
      {/* //only props is needed because it isnt className
    //this is needed in a class */}
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working </p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};
export default React.memo(cockpit);
