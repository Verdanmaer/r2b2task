import * as React from "react";

type Props = {
  homeworld: string;
};

const Homeworld = ({ homeworld }: Props) => {
  const [planet, setPlanet] = React.useState({name: ''});
  
  const fetchHomeworld = (homeworld: string) => {
    fetch(homeworld)
      .then((r) => r.json())
      .then(setPlanet);
  }
  
  return (
    <div>
      {planet.name ? planet.name : <button onClick={() => fetchHomeworld(homeworld)}>Get planet</button>}
    </div>
  )
}

export default Homeworld;