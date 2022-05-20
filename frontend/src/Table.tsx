import * as React from "react";
import "./Table.css";
type Props = {
  // rows: any[];
  rowsCount: number;
  results?: any;
};

// type Data = {
//   count: number;
//   results: any[];
// }

const Table = ({  rowsCount, results }: Props) => {
  // TASK: make a button and fetch persons's homeworld on click. You can fetch directly SW api (https://swapi.dev/documentation#planets) if you want.
  const [homeworld, setHomeworld] = React.useState<any | null>(null);
  // const [planets, setPlanets] = React.useState<Data>({count: 0, results: []});
  const [planets, setPlanets] = React.useState({name: ''});
  const planet = 2;

  // React.useEffect(() => {
  //   fetch(`/api/planets.php/planet=${planet}`)
  //   .then((r) => r.json())
  //   .then(setPlanets)
  // }, [])

  // console.log(planets);

  
  
  const fetchHomeworld = (homeworld: string) => {
    let planet = homeworld.match(/\d+/g);

    fetch(`https://swapi.dev/api/planets/${planet}`)
      .then((r) => r.json())
      .then(setPlanets);

    console.log(planets.name);
    setHomeworld(planets.name);
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
        {/* <td>{homeworld}</td> */}
        <td><button onClick={() => fetchHomeworld(data.homeworld)}>{homeworld}</button></td>
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
      {displayData}
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
export const DummyTable = ({ rowsCount, results}: Props) => {
  
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
