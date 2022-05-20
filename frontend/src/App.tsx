import * as React from "react";
import "./App.css";
import Spinner from "./Spinner";
import Table, { DummyTable } from "./Table";

type Data = {
  count: number;
  // rows: any[];
  results: any[];
};
function App() {
  const [data, setData] = React.useState<Data>({ count: 0, results: [] });
  const [dummyData, setDummyData] = React.useState<Data>({count: 0, results: []});
  const [q, setQ] = React.useState('');

  React.useEffect(() => {
    // TASK: add `dummy` query parameter
    fetch("/api/rows.php?dummy=true")
      .then((r) => r.json())
      .then(setDummyData);
    fetch("/api/rows.php")
      .then((r) => r.json())
      // HINT: API is returning `data.results` but we want `data.rows`
      .then(setData);
  }, []);

  // console.log(data);
  // const columns = data.results[0] && Object.keys(data.results[0]);
  // console.log(columns);

  const search = (rows: any[]) => {
    return rows.filter(row => row.name.toLowerCase().indexOf(q) > -1);
  }

  return (
    <div className="App">
      <h1>SW table demo</h1>
      <h2>Dummy table here</h2>
      {/* // HINT: notify user that we are fetching data. for example with a spinner */}
      <div className="App-table-container">
        <Spinner />
        <DummyTable rowsCount={dummyData.count} results={dummyData.results} />
      </div>
      <hr />
      <h2>Your table here</h2>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
      <div>
        <Table rowsCount={data.count} results={search(data.results)}/>
      </div>
    </div>
  );
}

export default App;
