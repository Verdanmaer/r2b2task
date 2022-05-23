import * as React from "react";
import "../styles/Spinner.css";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  const [loading, setLoading] = React.useState(true)
  
  return <tr><td><div className="spinner">
    <ClipLoader loading={loading} />
  </div></td></tr>;
};
export default Spinner;
