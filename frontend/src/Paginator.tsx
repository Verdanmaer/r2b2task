import * as React from "react";
import '../styles/Paginator.css';

type Props = {
  setPage: (pageNumber: number) => void;
}

function Paginator({ setPage }: Props) {
  return (
    <div className="paginator">
      <button onClick={() => setPage(1)} value={1}>1</button>
      <button onClick={() => setPage(2)} value={2}>2</button>
      <button onClick={() => setPage(3)} value={3}>3</button>
      <button onClick={() => setPage(4)} value={4}>4</button>
      <button onClick={() => setPage(5)} value={5}>5</button>
      <button onClick={() => setPage(6)} value={6}>6</button>
      <button onClick={() => setPage(7)} value={7}>7</button>
      <button onClick={() => setPage(8)} value={8}>8</button>
      <button onClick={() => setPage(9)} value={9}>9</button>
    </div>
  );
}

export default Paginator;