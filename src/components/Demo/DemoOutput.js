import React from "react";

const DemoOutput = props => {
  return <p>{props.show ? 'This is new' : ''}</p>;
};

/* react.memo is for funcational components */
export default React.memo(DemoOutput);
