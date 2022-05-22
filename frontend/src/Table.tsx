import * as React from "react";
import "./Table.css";
import Homeworld from './Homeworld';
import Spinner from './Spinner';

type Props = {
  rowsCount: number;
  results?: any;
  isLoading: boolean;
};

const Table = ({  rowsCount, results, isLoading }: Props) => {
  // TASK: make a button and fetch persons's homeworld on click. You can fetch directly SW api (https://swapi.dev/documentation#planets) if you want.

  const displayData = results?.map((data: any) => {
    return (
      <tr key={data.created}>
        <td>{data.name}</td>
        <td>{data.birth_year}</td>
        <td>{data.eye_color}</td>
        <td>{data.gender}</td>
        <td>{data.hair_color}</td>
        <td>{data.height}</td>
        <td><Homeworld homeworld={data.homeworld}/></td>
        <td>{data.mass}</td>
        <td>{data.skin_color}</td>
        <td>{data.created}</td>
      </tr>
    )
  })
  
  return <table className="Table">
    <thead>
      <tr>
        <th>name</th>
        <th>birth_year</th>
        <th>eye_color</th>
        <th>gender</th>
        <th>hair_color</th>
        <th>height</th>
        <th>homeworld</th>
        <th>mass</th>
        <th>skin_color</th>
        <th>created</th>
      </tr>
    </thead>
    <tbody>
      {isLoading ? <Spinner /> : displayData}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={10} style={{ textAlign: "center" }}>
          number of rows: {rowsCount}
        </td>
      </tr>
    </tfoot>
  </table>;
};
export const DummyTable = ({ rowsCount, results, isLoading}: Props) => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>birth_year</th>
          <th>eye_color</th>
          <th>gender</th>
          <th>hair_color</th>
          <th>height</th>
          <th>homeworld</th>
          <th>mass</th>
          <th>skin_color</th>
          <th>created</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{results?.name}</td>
        <td>{results?.birth_year}</td>
        <td>{results?.eye_color}</td>
        <td>{results?.gender}</td>
        <td>{results?.hair_color}</td>
        <td>{results?.height}</td>
        <td>{results?.homeworld}</td>
        <td>{results?.mass}</td>
        <td>{results?.skin_color}</td>
        <td>{results?.created}</td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={10} style={{ textAlign: "center" }}>
            number of rows: 1
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
