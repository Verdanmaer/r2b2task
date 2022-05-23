import * as React from "react";
import "../styles/App.css";
import Table, { DummyTable } from "./Table";
import Paginator from './Paginator';

type Data = {
  count: number;
  results: any[];
};
function App() {
  const [data, setData] = React.useState<Data>({ count: 0, results: [] });
  const [dummyData, setDummyData] = React.useState<Data>({count: 0, results: []});
  const [searchValue, setSearchValue] = React.useState('');
  const [attribute, setAttribute] = React.useState('name');
  const [isLoading, setIsLoading] = React.useState(true);
  const [font, setFont] = React.useState('Starjedi');

  React.useEffect(() => {
    // TASK: add `dummy` query parameter
    fetch("/api/rows.php?dummy=true")
      .then((r) => r.json())
      .then(setDummyData);
    fetch("/api/rows.php")
      .then((r) => r.json())
      .then(setData)
      .then(() => {setIsLoading(false)});
  }, []);

  const setPage = (pageNumber: number) => {
    fetch(`api/rows.php?page=${pageNumber}`)
      .then((r) => r.json())
      .then(setData)
      .then(() => {setIsLoading(false)});
  }

  const searchByAttribute = (rows: any[], attribute: string) => {
    return rows.filter(row => row[attribute].toLowerCase().indexOf(searchValue) > -1);
  }

  return (
    <div className="app" style={{fontFamily: font}}>
      <h1>SW table demo</h1>
      {font==='Starjedi' ? <button style={{fontFamily: 'Aurebesh'}} onClick={() => setFont('Aurebesh')}>Aurebesh</button> : <button style={{fontFamily: 'Starjedi'}} onClick={() => setFont('Starjedi')}>Starjedi</button> }
      <h2>Dummy table here</h2>
      <div className="app-table-container">
        <DummyTable rowsCount={dummyData.count} results={dummyData.results} isLoading={isLoading} />
      </div>
      <hr />
      <h2>Your table here</h2>
      <div className="search">
        <span>Search by </span>
        <select onChange={e => setAttribute(e.target.value)} name="attributes" id="attributes">
          <option value='name'>Name</option>
          <option value="birth_year">Birth Year</option>
          <option value="eye_color">Eye Color</option>
          <option value="gender">Gender</option>
          <option value="hair_color">Hair Color</option>
          <option value="height">Height</option>
          <option value="mass">Mass</option>
          <option value="skin_color">Skin Color</option>
        </select>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
      <div className="app-table-container">
        <Table rowsCount={data.count} results={searchByAttribute(data.results, attribute)} isLoading={isLoading}/>
      </div>
      <Paginator setPage={setPage} />
    </div>
  );
}

export default App;
