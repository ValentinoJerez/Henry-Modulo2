import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
 });

 //Creo el hook
 React.useEffect(fetch('http://localhost:3001/zoo')
 .then((res) => res.json())
 .then((data) =>
    setZoo({
       ...zoo,
       animals: data.animals,
       species: data.species,
       allAnimals: data.animals,
    })
 )
 .catch((error) => console.log(error)));

 //Declaro la funcion:
 const handleInputChange = (evento)=>{
  setZoo({
    //Mantengo los atributos
    ...zoo,
    zooName: evento.target.value
  })
 }

 const handleSpecies = (event) => {
  const specie = event.target.value
  setZoo({
    //Protejo mi estado 
    ...zoo,
    //Tomo a todos los animales, los filtro y solo me quedo con los que son iguales a la especie que es parametro
    animals: zoo.allAnimals.filter((animal) => animal.specie === specie),
  })
 }

 //Resetea
 const handleAllEspecies = () => {
  setZoo({
    ...zoo,
    //Reseteo el array
    animals: zoo.allAnimals
  })
}

  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllEspecies}/>
      <Animals animals={zoo.animals} />
    </div>
  );
}
