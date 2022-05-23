import * as React from "react";
import "../styles/Table.css";
import Homeworld from './Homeworld';
import Spinner from './Spinner';

type Props = {
  rowsCount: number;
  results?: any;
  isLoading: boolean;
};

const Table = ({  rowsCount, results, isLoading }: Props) => {
  const formatDate = (date: string) => {
    return date.substring(0, 10);
  }
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
        <td>{formatDate(data.created)}</td>
      </tr>
    )
  })
  return <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Birth Year</th>
        <th>Eye Color</th>
        <th>Gender</th>
        <th>Hair Color</th>
        <th>Height</th>
        <th>Homeworld</th>
        <th>Mass</th>
        <th>Skin Color</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      {isLoading ? <Spinner /> : displayData}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={10} style={{ textAlign: "center", padding: '1rem 0rem' }}>
          Number of results: {rowsCount}
        </td>
      </tr>
    </tfoot>
  </table>;
};
export const DummyTable = ({ rowsCount, results, isLoading}: Props) => {
  return (
    <table className="dummyTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Eye Color</th>
          <th>Gender</th>
          <th>Hair Color</th>
          <th>Height</th>
          <th>Homeworld</th>
          <th>Mass</th>
          <th>Skin Color</th>
          <th>Created</th>
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
          <td>DUMMY</td>
          <td>{results?.mass}</td>
          <td>{results?.skin_color}</td>
          <td>{results?.created}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={10} style={{ textAlign: "center" }}>
            Number of results: {rowsCount}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
