import React from "react";

//no longer a component
// now its a normal function. a function which returns a component function
const withClass = (WrappedComponent, className) => {
  //   <div className={props.classes}>{props.children}</div>
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
