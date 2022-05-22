import * as React from "react";
import "./Spinner.css";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  const [loading, setLoading] = React.useState(true)
  
  return <div className="Spinner">
    <ClipLoader loading={loading} />
  </div>;
};
export default Spinner;
