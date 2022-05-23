import * as React from "react";
import '../styles/Homeworld.css';

type Props = {
  homeworld: string;
};

const Homeworld = ({ homeworld }: Props) => {
  const [planet, setPlanet] = React.useState({name: ''});
  
  // Get planet name from https://swapi.dev/api/planets/${planetNumber}
  const fetchHomeworld = (homeworld: string) => {
    fetch(homeworld)
      .then((r) => r.json())
      .then(setPlanet);
  }
  
  return (
    <div className="homeworld">
      {planet.name ? planet.name : <button onClick={() => fetchHomeworld(homeworld)}>Get planet</button>}
    </div>
  )
}

export default Homeworld;